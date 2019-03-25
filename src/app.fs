module FBlocks.App

open Fable.Import.Browser
open System

let rec mainLoop gameState renderer lastTime lastElapsedTime currentTime =
    let deltaTime = currentTime - lastTime
    let elapsedTime = lastElapsedTime + deltaTime

    let newGameState =
        if deltaTime > 0.0 then
            GameState.update elapsedTime gameState
        else
            gameState

    if newGameState <> gameState then
        Renderer.redraw renderer newGameState.grid newGameState.block

    window.requestAnimationFrame (mainLoop newGameState renderer currentTime elapsedTime) |> ignore

let run containerDivId =
    let currentTime = performance.now()
    let gameState = GameState.create()
    let renderer = Renderer.create containerDivId gameState.grid

    let redraw() =
        Renderer.redraw renderer gameState.grid gameState.block

    window.addEventListener_keydown Input.onKeyDown

    redraw()

    mainLoop gameState renderer currentTime 0.0 currentTime

run "mainContainer"
