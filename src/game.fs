module FBlocks.Game

let blockFallInterval = Time.fromMilliseconds 1000.0
let blockFastFallInterval = Time.fromMilliseconds 50.0
let moveInterval = Time.fromMilliseconds 100.0

type GameState = {
    block: Block.Block
    fallInterval: Time.Time
    grid: Grid.Grid
    lastBlockFallTime: Time.Time
    lastMoveTime: Time.Time
    moveDelta: int option
    nextShape: Shape.ShapeName
    score: Score.Score
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

let placeBlock currentTime block gameState =
    let newGrid = Grid.placeBlock gameState.grid block
    let completedRows = Grid.countCompletedRows newGrid

    { gameState with
        block = gameState.nextShape |> Block.create gameState.grid.width
        grid = Grid.removeCompletedRows newGrid
        lastBlockFallTime = currentTime
        nextShape = Shape.random()
        score = Score.update gameState.score completedRows }

let placeCurrentBlock currentTime gameState =
    placeBlock currentTime gameState.block gameState

let moveBlockDown currentTime gameState =
    let movedBlock = Block.moveBy 0 1 gameState.block
    if Grid.isBlockValid gameState.grid movedBlock then
        { gameState with
            block = movedBlock
            lastBlockFallTime = currentTime }
    else
        placeCurrentBlock currentTime gameState

let offsetOutOfBoundsBlock gridWidth block =
    let bounds = block |> Block.getBoundingRect
    if bounds.left < 0 then
        block |> Block.moveBy -bounds.left 0
    else if bounds.right >= gridWidth then
        block |> Block.moveBy (gridWidth - bounds.right - 1) 0
    else
        block

let processInput currentTime inputs gameState =
    let processAction gameState action =
        let rotateBlock gameState =
            Block.rotate
            >> offsetOutOfBoundsBlock gameState.grid.width
            |> updateBlockIfValid gameState

        let placeBlock gameState =
            let droppedBlock = Grid.moveBlockToBottom gameState.grid gameState.block
            placeBlock currentTime droppedBlock gameState

        let setMovement dx gameState =
            { gameState with moveDelta = Some dx }

        let stopMovement gameState =
            { gameState with moveDelta = None }

        let setFallInterval interval gameState =
            { gameState with fallInterval = interval }

        gameState |>
            match action with
            | Input.MoveLeft -> setMovement -1
            | Input.MoveRight -> setMovement 1
            | Input.StopMovement -> stopMovement
            | Input.IncreaseFallSpeed -> setFallInterval blockFastFallInterval
            | Input.DecreaseFallSpeed -> setFallInterval blockFallInterval
            | Input.Rotate -> rotateBlock
            | Input.PlaceBlock -> placeBlock

    let updatedGameState =
        inputs
        |> Seq.fold processAction gameState

    updatedGameState

let moveBlock dx gameState =
    Block.moveBy dx 0
    |> updateBlockIfValid gameState

let processMovement currentTime gameState =
    match gameState.moveDelta with
    | Some dx ->
        if Time.difference currentTime gameState.lastMoveTime >= moveInterval then
            let newGameState = moveBlock dx gameState
            { newGameState with lastMoveTime = currentTime }
        else
            gameState
    | None -> gameState

let processFalling currentTime gameState =
    if Time.difference currentTime gameState.lastBlockFallTime >= gameState.fallInterval then
        moveBlockDown currentTime gameState
    else
        gameState

let checkGameOver gameState =
    if Grid.isBlockValid gameState.grid gameState.block then
        RunningGame gameState
    else
        FinishedGame gameState.score

let update currentTime game =
    match game with
    | RunningGame gameState ->
        gameState
        |> processInput currentTime (Input.getActions())
        |> processMovement currentTime
        |> processFalling currentTime
        |> checkGameOver
    | FinishedGame _ ->
        game

let newGame gridWidth gridHeight currentTime =
    let grid = Grid.create gridWidth gridHeight
    let state =
        {
            block = Shape.random() |> Block.create grid.width
            fallInterval = blockFallInterval
            grid = grid
            lastBlockFallTime = currentTime
            lastMoveTime = Time.zero
            moveDelta = None
            nextShape = Shape.random()
            score = Score.zero
        }
    RunningGame state
