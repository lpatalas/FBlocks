module FBlocks.Game

let normalFallInterval = 48<frame/cell>
let fastFallInterval = 5<frame/cell>
let moveInterval = 8<frame/cell>

type GameState = {
    block: Block.Block
    grid: Grid.Grid
    isFastFallEnabled: bool
    isPaused: bool
    lastBlockFallFrame: int<frame>
    lastMoveFrame: int<frame>
    moveDelta: int option
    nextShape: Shape.ShapeName
    score: Score.Score
    shapeGeneratorState: RandomShapeGenerator.GeneratorState
}

type Game =
    | RunningGame of GameState
    | FinishedGame of Score.Score

let updateBlockIfValid gameState updater =
    let updatedBlock = updater gameState.block
    if Grid.isBlockValid gameState.grid updatedBlock then
        { gameState with block = updatedBlock }
    else
        gameState

let placeBlock currentFrame block gameState =
    let newGrid = Grid.placeBlock gameState.grid block
    let completedRows = Grid.countCompletedRows newGrid
    let (nextShape, generatorState) =
        gameState.shapeGeneratorState
        |> RandomShapeGenerator.getNext

    { gameState with
        block = gameState.nextShape |> Block.create gameState.grid.width
        grid = Grid.removeCompletedRows newGrid
        lastBlockFallFrame = currentFrame
        nextShape = nextShape
        score = Score.update gameState.score completedRows
        shapeGeneratorState = generatorState }

let placeCurrentBlock currentFrame gameState =
    placeBlock currentFrame gameState.block gameState

let moveBlockDown currentFrame gameState =
    let movedBlock = Block.moveBy 0 1 gameState.block
    if Grid.isBlockValid gameState.grid movedBlock then
        { gameState with
            block = movedBlock
            lastBlockFallFrame = currentFrame }
    else
        placeCurrentBlock currentFrame gameState

let offsetOutOfBoundsBlock gridWidth block =
    let bounds = block |> Block.getBoundingRect
    if bounds.left < 0 then
        block |> Block.moveBy -bounds.left 0
    else if bounds.right >= gridWidth then
        block |> Block.moveBy (gridWidth - bounds.right - 1) 0
    else
        block

let processInput currentFrame inputs gameState =
    let processAction gameState action =
        let rotateBlock gameState =
            Block.rotate
            >> offsetOutOfBoundsBlock gameState.grid.width
            |> updateBlockIfValid gameState

        let placeBlock gameState =
            let droppedBlock = Grid.moveBlockToBottom gameState.grid gameState.block
            placeBlock currentFrame droppedBlock gameState

        let setMovement dx gameState =
            { gameState with moveDelta = Some dx }

        let stopMovement gameState =
            { gameState with moveDelta = None }

        let enableFastFall enabled gameState =
            { gameState with isFastFallEnabled = enabled }

        let togglePause gameState =
            { gameState with isPaused = not gameState.isPaused }

        gameState |>
            match action with
            | Input.MoveLeft -> setMovement -1
            | Input.MoveRight -> setMovement 1
            | Input.StopMovement -> stopMovement
            | Input.IncreaseFallSpeed -> enableFastFall true
            | Input.DecreaseFallSpeed -> enableFastFall false
            | Input.Rotate -> rotateBlock
            | Input.PlaceBlock -> placeBlock
            | Input.TogglePause -> togglePause

    let updatedGameState =
        inputs
        |> Seq.fold processAction gameState

    updatedGameState

let moveBlock dx gameState =
    Block.moveBy dx 0
    |> updateBlockIfValid gameState

let processMovement currentFrame gameState =
    match gameState.moveDelta with
    | Some dx ->
        let cellsToMove = (currentFrame - gameState.lastMoveFrame) / moveInterval
        if cellsToMove >= 1<cell> then
            let newGameState = moveBlock dx gameState
            { newGameState with lastMoveFrame = currentFrame }
        else
            gameState
    | None -> gameState

let getFallInterval isFastFallEnabled =
    if isFastFallEnabled then
        fastFallInterval
    else
        normalFallInterval

let processFalling currentFrame gameState =
    let frameDelta = currentFrame - gameState.lastBlockFallFrame
    let cellsToFall = frameDelta / getFallInterval gameState.isFastFallEnabled
    if cellsToFall >= 1<cell> then
        moveBlockDown currentFrame gameState
    else
        gameState

let checkGameOver gameState =
    if Grid.isBlockValid gameState.grid gameState.block then
        RunningGame gameState
    else
        FinishedGame gameState.score

let update currentFrame game =
    let ifNotPaused action gameState =
        if not gameState.isPaused then
            action gameState
        else
            gameState

    match game with
    | RunningGame gameState ->
        gameState
        |> processInput currentFrame (Input.getActions())
        |> ifNotPaused (processMovement currentFrame)
        |> ifNotPaused (processFalling currentFrame)
        |> checkGameOver
    | FinishedGame _ ->
        game

let newGame gridWidth gridHeight currentTime =
    let grid = Grid.create gridWidth gridHeight
    let (initialShapes, randomGeneratorState) =
        RandomShapeGenerator.initialize()
        |> RandomShapeGenerator.getList 2

    let state =
        {
            block = initialShapes.[0] |> Block.create grid.width
            grid = grid
            isFastFallEnabled = false
            isPaused = false
            lastBlockFallFrame = 0<frame>
            lastMoveFrame = 0<frame>
            moveDelta = None
            nextShape = initialShapes.[1]
            score = Score.initial
            shapeGeneratorState = randomGeneratorState
        }
    RunningGame state
