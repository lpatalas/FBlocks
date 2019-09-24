module FBlocks.GameState

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
}

let updateBlockIfValid gameState updater =
    let updatedBlock = updater gameState.block
    if Grid.isBlockValid gameState.grid updatedBlock then
        { gameState with block = updatedBlock }
    else
        gameState

let moveBlockDown currentTime gameState =
    let movedBlock = Block.moveBy 0 1 gameState.block
    if Grid.isBlockValid gameState.grid movedBlock then
        { gameState with
            block = movedBlock
            lastBlockFallTime = currentTime }
    else
        { gameState with
            block = Shape.random() |> Block.create
            grid = Grid.placeBlock gameState.grid gameState.block
            lastBlockFallTime = currentTime }

let processInput currentTime inputs gameState =
    let processAction gameState action =
        let rotateBlock gameState =
            Block.rotate |> updateBlockIfValid gameState

        let placeBlock gameState =
            { gameState with
                grid = Grid.placeBlock gameState.grid gameState.block
                block = Block.create Shape.L }

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

let update currentTime gameState =
    let newGameState =
        gameState
        |> processInput currentTime (Input.getActions())
        |> processMovement currentTime
        |> processFalling currentTime

    newGameState

let create() =
    {
        block = Shape.random() |> Block.create
        fallInterval = blockFallInterval
        grid = Grid.createDefault
        lastBlockFallTime = Time.zero
        lastMoveTime = Time.zero
        moveDelta = None
    }
