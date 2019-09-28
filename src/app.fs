module FBlocks.App

open Fable.Import.Browser

let onNextFrame callback =
    window.requestAnimationFrame (callback << Time.fromMilliseconds) |> ignore

let rec mainLoop game updateUI lastTime lastElapsedTime currentTime =
    let deltaTime = Time.difference currentTime lastTime
    let elapsedTime = Time.add lastElapsedTime deltaTime

    let updatedGame =
        if deltaTime > Time.zero then
            Game.update elapsedTime game
        else
            game

    if updatedGame <> game then
        updatedGame |> updateUI

    match updatedGame with
    | Game.RunningGame _ ->
        onNextFrame (mainLoop updatedGame updateUI currentTime elapsedTime)
    | _ -> ()


let gridWidth = 10
let gridHeight = 20

let run gameContainerDivId nextBlockDivId =
    let currentTime = Time.getCurrent()
    let game = Game.newGame gridWidth gridHeight currentTime
    let gameRenderer = Renderer.create gameContainerDivId gridWidth gridHeight
    let nextBlockRenderer = Renderer.create nextBlockDivId 4 4

    let gameContainerElement = document.getElementById gameContainerDivId
    let scoreElement = document.getElementById "score"
    let linesCompletedElement = document.getElementById "linesCompleted"

    let updateScore (score: Score.Score) =
        scoreElement.innerText <- string score.points
        linesCompletedElement.innerText <- string score.linesCompleted

    let updateUI (game: Game.Game) =
        match game with
        | Game.RunningGame gameState ->
            Renderer.redraw gameRenderer gameState.grid gameState.block
            Renderer.drawNextBlock nextBlockRenderer gameState.nextShape
            updateScore gameState.score
        | Game.FinishedGame score ->
            updateScore score
            gameContainerElement.classList.add("is-over")

    Input.addEventListeners()

    mainLoop game updateUI currentTime Time.zero currentTime

run "gameContainer" "nextBlockContainer"
