module FBlocks.Input

open Browser
open Browser.Types
open System.Collections.Generic

type InputAction =
    | MoveLeft
    | MoveRight
    | StopMovement
    | Rotate
    | PlaceBlock
    | IncreaseFallSpeed
    | DecreaseFallSpeed
    | TogglePause

let mutable inputActionQueue: InputAction list = []

let getActions() =
    let inputs = List.rev inputActionQueue
    inputActionQueue <- []
    inputs

let handleInput (mapping: IDictionary<string, InputAction>) (inputEvent: Event) =
    let event = inputEvent :?> KeyboardEvent
    if not event.repeat then
        let maybeAction =
            match mapping.TryGetValue(event.key) with
            | (true, action) -> Some action
            | (false, _) -> None

        match maybeAction with
        | Some action -> inputActionQueue <- action :: inputActionQueue
        | None -> ()

let onKeyDown =
    handleInput (dict [
        "ArrowLeft", MoveLeft
        "ArrowRight", MoveRight
        "ArrowDown", IncreaseFallSpeed
        "ArrowUp", Rotate
        " ", PlaceBlock
    ])

let onKeyUp =
    handleInput (dict [
        "ArrowLeft", StopMovement
        "ArrowRight", StopMovement
        "ArrowDown", DecreaseFallSpeed
        "p", TogglePause
    ])

let addEventListeners() =
    window.addEventListener("keydown", onKeyDown)
    window.addEventListener("keyup", onKeyUp)
