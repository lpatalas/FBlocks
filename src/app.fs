module FBlocks.App

open Fable.Import.Browser

let onNextFrame callback =
    window.requestAnimationFrame (callback << Time.fromMilliseconds) |> ignore

let rec mainLoop gameState updateUI lastTime lastElapsedTime currentTime =
    let deltaTime = Time.difference currentTime lastTime
    let elapsedTime = Time.add lastElapsedTime deltaTime

    let newGameState =
        if deltaTime > Time.zero then
            GameState.update elapsedTime gameState
        else
            gameState

    if newGameState <> gameState then
        newGameState |> updateUI

    onNextFrame (mainLoop newGameState updateUI currentTime elapsedTime)


let gridWidth = 10
let gridHeight = 20

let run gameContainerDivId nextBlockDivId =
    let currentTime = Time.getCurrent()
    let gameState = GameState.create gridWidth gridHeight currentTime
    let gameRenderer = Renderer.create gameContainerDivId gridWidth gridHeight
    let nextBlockRenderer = Renderer.create nextBlockDivId 4 4

    let gameContainerElement = document.getElementById gameContainerDivId
    let scoreElement = document.getElementById "score"
    let linesCompletedElement = document.getElementById "linesCompleted"

    let updateUI (gameState: GameState.GameState) =
        Renderer.redraw gameRenderer gameState.grid gameState.block
        Renderer.drawNextBlock nextBlockRenderer gameState.nextShape
        scoreElement.innerText <- string gameState.score.points
        linesCompletedElement.innerText <- string gameState.score.linesCompleted
        if gameState.isGameOver then
            gameContainerElement.classList.add("is-over")

    Input.addEventListeners()

    mainLoop gameState updateUI currentTime Time.zero currentTime

run "gameContainer" "nextBlockContainer"
