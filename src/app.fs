module FBlocks.App

open Fable.Import.Browser
open System

let blockFallInterval = 1000.0

type GameState = {
    block: Block.Block
    grid: Grid.Grid
    lastBlockFallTime: float
}

type MoveDirection = Left | Right | Up | Down

type InputAction =
    | Move of direction: MoveDirection
    | Rotate
    | PlaceBlock

let mutable inputQueue: InputAction list = []

let onKeyDown (e: KeyboardEvent) =
    let maybeAction =
        match e.key with
        | "ArrowLeft" -> Some (Move Left)
        | "ArrowRight" -> Some (Move Right)
        | "ArrowUp" -> Some (Move Up)
        | "ArrowDown" -> Some (Move Down)
        | " " -> Some Rotate
        | "Enter" -> Some PlaceBlock
        | _ -> None

    match maybeAction with
    | Some action -> inputQueue <- action :: inputQueue
    | None -> ()

let updateBlockIfValid gameState updater =
    let updatedBlock = updater gameState.block
    if Grid.isBlockValid gameState.grid updatedBlock then
        { gameState with block = updatedBlock }
    else
        gameState

let processInput gameState =
    let processAction action gameState =
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
            | Move Left -> moveBlock -1 0
            | Move Right -> moveBlock 1 0
            | Move Up -> moveBlock 0 -1
            | Move Down -> moveBlock 0 1
            | Rotate -> rotateBlock
            | PlaceBlock -> placeBlock
            | _ -> id

    let updatedGameState =
        Seq.foldBack processAction inputQueue gameState

    inputQueue <- []

    updatedGameState

let processFalling elapsedTime gameState =
    if elapsedTime - gameState.lastBlockFallTime >= blockFallInterval then
        let movedBlock = Block.moveBy 0 1 gameState.block
        if Grid.isBlockValid gameState.grid movedBlock then
            { gameState with
                block = movedBlock
                lastBlockFallTime = elapsedTime }
        else
            { gameState with
                block = Block.create Shape.L
                grid = Grid.placeBlock gameState.grid gameState.block
                lastBlockFallTime = elapsedTime }
    else
        gameState

let processFrame elapsedTime deltaTime gameState =
    let newGameState =
        gameState
        |> processInput
        |> processFalling elapsedTime

    newGameState

let rec mainLoop gameState renderer lastTime lastElapsedTime currentTime =
    let deltaTime = currentTime - lastTime
    let elapsedTime = lastElapsedTime + deltaTime

    let newGameState =
        if deltaTime > 0.0 then
            processFrame elapsedTime deltaTime gameState
        else
            gameState

    if newGameState <> gameState then
        Renderer.redraw renderer newGameState.grid newGameState.block

    window.requestAnimationFrame (mainLoop newGameState renderer currentTime elapsedTime) |> ignore

let run containerDivId =
    let currentTime = performance.now()

    let gameState = {
        block = Block.create Shape.D
        grid = Grid.createDefault
        lastBlockFallTime = currentTime
    }

    let renderer = Renderer.create containerDivId gameState.grid

    let redraw() =
        Renderer.redraw renderer gameState.grid gameState.block

    window.addEventListener_keydown onKeyDown

    redraw()

    mainLoop gameState renderer currentTime 0.0 currentTime

run "mainContainer"
