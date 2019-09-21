module FBlocks.App

open Fable.Import.Browser

let onNextFrame callback =
    window.requestAnimationFrame (callback << Time.fromMilliseconds) |> ignore

let rec mainLoop gameState renderer lastTime lastElapsedTime currentTime =
    let deltaTime = Time.difference currentTime lastTime
    let elapsedTime = Time.add lastElapsedTime deltaTime

    let newGameState =
        if deltaTime > Time.zero then
            GameState.update elapsedTime gameState
        else
            gameState

    if newGameState <> gameState then
        Renderer.redraw renderer newGameState.grid newGameState.block

    onNextFrame (mainLoop newGameState renderer currentTime elapsedTime)

let run containerDivId =
    let currentTime = Time.getCurrent()
    let gameState = GameState.create()
    let renderer = Renderer.create containerDivId gameState.grid

    let redraw() =
        Renderer.redraw renderer gameState.grid gameState.block

    window.addEventListener_keydown Input.onKeyDown

    redraw()

    mainLoop gameState renderer currentTime Time.zero currentTime

run "mainContainer"
