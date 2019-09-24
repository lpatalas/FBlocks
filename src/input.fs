module FBlocks.Input

open Fable.Import.Browser
open System.Collections.Generic

type InputAction =
    | MoveLeft
    | MoveRight
    | Rotate
    | PlaceBlock
    | IncreaseFallSpeed
    | DecreaseFallSpeed

let mutable inputActionQueue: InputAction list = []

let getActions() =
    let inputs = List.rev inputActionQueue
    inputActionQueue <- []
    inputs

let handleInput (mapping: IDictionary<string, InputAction>) (event: KeyboardEvent) =
    let maybeAction =
        match mapping.TryGetValue(event.key) with
        | (true, action) -> Some action
        | (false, _) -> None

    match maybeAction with
    | Some action -> inputActionQueue <- action :: inputActionQueue
    | None -> ()

let onKeyDown =
    handleInput (dict[
        "ArrowLeft", MoveLeft
        "ArrowRight", MoveRight
        "ArrowDown", IncreaseFallSpeed
        " ", Rotate
        "Enter", PlaceBlock
    ])

let onKeyUp =
    handleInput (dict[
        "ArrowDown", DecreaseFallSpeed
    ])

let addEventListeners() =
    window.addEventListener_keydown onKeyDown
    window.addEventListener_keyup onKeyUp
