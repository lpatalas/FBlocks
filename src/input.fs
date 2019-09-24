module FBlocks.Input

open Fable.Import.Browser

type InputAction =
    | MoveLeft
    | MoveRight
    | Rotate
    | PlaceBlock
    | IncreaseFallSpeed
    | DecreaseFallSpeed

let mutable inputQueue: InputAction list = []

let getQueue() =
    let inputs = List.rev inputQueue
    inputQueue <- []
    inputs

let onKeyDown (e: KeyboardEvent) =
    let maybeAction =
        match e.key with
        | "ArrowLeft" -> Some MoveLeft
        | "ArrowRight" -> Some MoveRight
        | "ArrowDown" -> Some IncreaseFallSpeed
        | " " -> Some Rotate
        | "Enter" -> Some PlaceBlock
        | _ -> None

    match maybeAction with
    | Some action -> inputQueue <- action :: inputQueue
    | None -> ()

let onKeyUp (e: KeyboardEvent) =
    let maybeAction =
        match e.key with
        | "ArrowDown" -> Some DecreaseFallSpeed
        | _ -> None

    match maybeAction with
    | Some action -> inputQueue <- action :: inputQueue
    | None -> ()

let addEventListeners() =
    window.addEventListener_keydown onKeyDown
    window.addEventListener_keyup onKeyUp
