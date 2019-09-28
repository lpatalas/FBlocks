module FBlocks.App

open Fable.Import.Browser
open Fable.Core

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
        updateUI game updatedGame

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

    let removeChildNodeCallback (node: ChildNode) (e: Event) =
        console.log("Removing element")
        node.remove()

    let showScorePopup (previousScore: Score.Score) (currentScore: Score.Score) =
        if previousScore <> currentScore then
            let gainedScore = Score.difference previousScore currentScore
            let linesText =
                if gainedScore.linesCompleted > 1 then
                    sprintf "%i LINES" gainedScore.linesCompleted
                else
                    sprintf "%i LINE" gainedScore.linesCompleted
            let pointsText =
                sprintf "%i POINTS" gainedScore.points

            let scoreElement = document.createElement "div"
            scoreElement.classList.add("score-popup")
            scoreElement.innerHTML <- sprintf "%s<br>+%s" linesText pointsText

            let callback = removeChildNodeCallback scoreElement
            scoreElement.addEventListener ("animationend", U2.Case1 callback)
            gameContainerElement.appendChild scoreElement |> ignore

    let updateUI (previousState: Game.Game) (currentState: Game.Game) =
        match currentState with
        | Game.RunningGame gameState ->
            Renderer.redraw gameRenderer gameState.grid gameState.block
            Renderer.drawNextBlock nextBlockRenderer gameState.nextShape
            updateScore gameState.score
            match previousState with
            | Game.RunningGame prevGameState ->
                showScorePopup prevGameState.score gameState.score
            | _ -> ()
        | Game.FinishedGame score ->
            updateScore score
            gameContainerElement.classList.add("is-over")

    Input.addEventListeners()

    mainLoop game updateUI currentTime Time.zero currentTime

run "gameContainer" "nextBlockContainer"
