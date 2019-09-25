module FBlocks.App

open Fable.Import.Browser

let onNextFrame callback =
    window.requestAnimationFrame (callback << Time.fromMilliseconds) |> ignore

let rec mainLoop gameState redraw lastTime lastElapsedTime currentTime =
    let deltaTime = Time.difference currentTime lastTime
    let elapsedTime = Time.add lastElapsedTime deltaTime

    let newGameState =
        if deltaTime > Time.zero then
            GameState.update elapsedTime gameState
        else
            gameState

    if newGameState <> gameState then
        newGameState |> redraw

    onNextFrame (mainLoop newGameState redraw currentTime elapsedTime)

let run gameContainerDivId nextBlockDivId =
    let currentTime = Time.getCurrent()
    let gameState = GameState.create()
    let gameRenderer = Renderer.create gameContainerDivId gameState.grid.width gameState.grid.height
    let nextBlockRenderer = Renderer.create nextBlockDivId 4 4

    let scoreElement = document.getElementById "score"
    let linesCompletedElement = document.getElementById "linesCompleted"

    let redrawAll (gameState: GameState.GameState) =
        Renderer.redraw gameRenderer gameState.grid gameState.block
        Renderer.redrawBlock nextBlockRenderer gameState.nextBlock
        scoreElement.innerText <- string gameState.stats.score
        linesCompletedElement.innerText <- string gameState.stats.linesCompleted

    Input.addEventListeners()

    mainLoop gameState redrawAll currentTime Time.zero currentTime

run "gameContainer" "nextBlockContainer"
