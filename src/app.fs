module FBlocks.App

open Fable.Core.JsInterop
open Fable.Import.Browser
open FBlocks.Block

let blockSize = 24.0
let gameAreaSize = (10, 20)

let clearCanvas (canvas: HTMLCanvasElement) =
    let context = canvas.getContext_2d()
    context.fillStyle <- !^ "#000"
    context.fillRect(0.0, 0.0, canvas.width, canvas.height)

let drawSquare (x: int) (y: int) (color: string) (canvas: HTMLCanvasElement) =
    let context = canvas.getContext_2d()
    context.fillStyle <- !^ color
    context.fillRect((float x) * blockSize + 0.5, (float y) * blockSize + 0.5, blockSize - 1.0, blockSize - 1.0)

let drawShape (x: int) (y:int) (color: string) (Shape coords) (canvas: HTMLCanvasElement) =
    coords
    |> Seq.iter (fun ({ x = cx; y = cy }) -> drawSquare (x + cx) (y + cy) color canvas)

type MoveDirection = Left | Right | Up | Down

let run containerDivId =
    let elem = document.getElementById containerDivId
    let canvas = document.createElement_canvas()
    canvas.width <- float (fst gameAreaSize) * blockSize
    canvas.height <- float (snd gameAreaSize) * blockSize
    elem.appendChild(canvas) |> ignore

    let shape = createShape D
    let mutable pos = { x = 0; y = 0 }

    let redraw() =
        clearCanvas canvas
        drawShape pos.x pos.y "red" shape canvas

    let moveBlock (direction: MoveDirection) =
        let newPos =
            match direction with
            | Left -> { pos with x = pos.x - 1 }
            | Right -> { pos with x = pos.x + 1 }
            | Up -> { pos with y = pos.y - 1 }
            | Down -> { pos with y = pos.y + 1 }
        pos <- newPos

    let onKeyDown (e: KeyboardEvent) =
        let moveDirection =
            match e.key with
            | "ArrowLeft" -> Some Left
            | "ArrowRight" -> Some Right
            | "ArrowUp" -> Some Up
            | "ArrowDown" -> Some Down
            | _ -> None

        match moveDirection with
        | Some dir ->
            moveBlock dir
            redraw()
        | None -> ()

    window.addEventListener_keydown onKeyDown

    redraw()

run "mainContainer"
