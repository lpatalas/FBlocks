module FBlocks.GameState

let blockFallInterval = Time.fromMilliseconds 1000.0
let blockFastFallInterval = Time.fromMilliseconds 50.0

type GameState = {
    block: Block.Block
    fallInterval: Time.Time
    grid: Grid.Grid
    lastBlockFallTime: Time.Time
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
        let moveBlock dx dy gameState =
            Block.moveBy dx dy |> updateBlockIfValid gameState

        let rotateBlock gameState =
            Block.rotate |> updateBlockIfValid gameState

        let placeBlock gameState =
            { gameState with
                grid = Grid.placeBlock gameState.grid gameState.block
                block = Block.create Shape.L }

        let setFallInterval interval gameState =
            { gameState with fallInterval = interval }

        gameState |>
            match action with
            | Input.MoveLeft -> moveBlock -1 0
            | Input.MoveRight -> moveBlock 1 0
            | Input.IncreaseFallSpeed -> setFallInterval blockFastFallInterval
            | Input.DecreaseFallSpeed -> setFallInterval blockFallInterval
            | Input.Rotate -> rotateBlock
            | Input.PlaceBlock -> placeBlock

    let updatedGameState =
        inputs
        |> Seq.fold processAction gameState

    updatedGameState

let processFalling currentTime gameState =
    if Time.difference currentTime gameState.lastBlockFallTime >= gameState.fallInterval then
        moveBlockDown currentTime gameState
    else
        gameState

let update currentTime gameState =
    let newGameState =
        gameState
        |> processInput currentTime (Input.getQueue())
        |> processFalling currentTime

    newGameState

let create() =
    {
        block = Shape.random() |> Block.create
        fallInterval = blockFallInterval
        grid = Grid.createDefault
        lastBlockFallTime = Time.zero
    }
