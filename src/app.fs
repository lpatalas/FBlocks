module FBlocks.App

open Fable.Core.JsInterop
open Fable.Import.Browser
open FBlocks.Coord
open FBlocks.Shape

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
        if cell = FilledCell then
            drawSquare (x + cellX) (y + cellY) color canvas)

type MoveDirection = Left | Right | Up | Down

let run containerDivId =
    let elem = document.getElementById containerDivId
    let canvas = document.createElement_canvas()
    canvas.width <- float (fst gameAreaSize) * blockSize
    canvas.height <- float (snd gameAreaSize) * blockSize
    elem.appendChild(canvas) |> ignore

    let mutable block = Block.create D

    let redraw() =
        clearCanvas canvas
        drawShape block.position.x block.position.y "red" block.shape canvas

    let onKeyDown (e: KeyboardEvent) =
        let move =
            match e.key with
            | "ArrowLeft" -> Block.moveBy -1 0
            | "ArrowRight" -> Block.moveBy 1 0
            | "ArrowUp" -> Block.moveBy 0 -1
            | "ArrowDown" -> Block.moveBy 0 1
            | _ -> id

        let rotate =
            match e.key with
            | " " -> Block.rotate
            | _ -> id

        let updatedBlock = block |> move |> rotate

        if updatedBlock <> block then
            block <- updatedBlock
            redraw()

    window.addEventListener_keydown onKeyDown

    redraw()

run "mainContainer"
