module FBlocks.GameState

let blockFallInterval = 1000.0

type GameState = {
    block: Block.Block
    grid: Grid.Grid
    lastBlockFallTime: float
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

        gameState |>
            match action with
            | Input.Move Input.Left -> moveBlock -1 0
            | Input.Move Input.Right -> moveBlock 1 0
            | Input.Move Input.Up -> moveBlock 0 -1
            | Input.Move Input.Down -> moveBlockDown currentTime
            | Input.Rotate -> rotateBlock
            | Input.PlaceBlock -> placeBlock
            | _ -> id

    let updatedGameState =
        inputs
        |> Seq.fold processAction gameState

    updatedGameState

let processFalling currentTime gameState =
    if currentTime - gameState.lastBlockFallTime >= blockFallInterval then
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
        grid = Grid.createDefault
        lastBlockFallTime = 0.0
    }
