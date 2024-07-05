module FBlocks.App

open Browser
open Browser.Types
open Fable.Core

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
    let levelElement = document.getElementById "level"

    let updateScore (score: Score.Score) =
        scoreElement.innerText <- string score.points
        linesCompletedElement.innerText <- string score.linesCompleted
        levelElement.innerHTML <- string score.level

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

            if previousScore.level <> currentScore.level then
                let levelUpElement = document.createElement "div"
                levelUpElement.classList.add("level-up-popup")
                levelUpElement.innerHTML <- "Level Up!"

                let callback = removeChildNodeCallback levelUpElement
                levelUpElement.addEventListener ("animationend", callback)
                gameContainerElement.appendChild levelUpElement |> ignore

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

    GameLoop.run game updateUI

run "gameContainer" "nextBlockContainer"
