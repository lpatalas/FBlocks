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

let toArray (a: 'T[,]) =
    a |> Seq.cast<'T>

let drawShape (x: int) (y:int) (color: string) (shape: ShapeMatrix) (canvas: HTMLCanvasElement) =
    shape
    |> Matrix.iteri (fun cellX cellY cell ->
        if cell = Square then
            drawSquare (x + cellX) (y + cellY) color canvas)

type MoveDirection = Left | Right | Up | Down

let run containerDivId =
    let elem = document.getElementById containerDivId
    let canvas = document.createElement_canvas()
    canvas.width <- float (fst gameAreaSize) * blockSize
    canvas.height <- float (snd gameAreaSize) * blockSize
    elem.appendChild(canvas) |> ignore

    let shapeKind = D
    let mutable pos = { x = 0; y = 0 }
    let mutable rotation = 0

    let redraw() =
        let matrix =
            match rotation with
            | 1 -> rotateMatrix (getShapeMatrix shapeKind)
            | 2 -> rotateMatrix (rotateMatrix (getShapeMatrix shapeKind))
            | 3 -> rotateMatrix (rotateMatrix (rotateMatrix (getShapeMatrix shapeKind)))
            | _ -> getShapeMatrix shapeKind

        clearCanvas canvas
        drawShape pos.x pos.y "red" matrix canvas

    let moveBlock (direction: MoveDirection) =
        let newPos =
            match direction with
            | Left -> { pos with x = pos.x - 1 }
            | Right -> { pos with x = pos.x + 1 }
            | Up -> { pos with y = pos.y - 1 }
            | Down -> { pos with y = pos.y + 1 }
        pos <- newPos

    let rotateBlock() =
        rotation <- if rotation = 3 then 0 else rotation + 1

    let onKeyDown (e: KeyboardEvent) =
        let moveDirection =
            match e.key with
            | "ArrowLeft" -> Some Left
            | "ArrowRight" -> Some Right
            | "ArrowUp" -> Some Up
            | "ArrowDown" -> Some Down
            | _ -> None

        let rotate = e.key = " "

        match moveDirection with
        | Some dir ->
            moveBlock dir
            redraw()
        | None -> ()

        if rotate then
            rotateBlock()
            redraw()

    window.addEventListener_keydown onKeyDown

    redraw()

run "mainContainer"
