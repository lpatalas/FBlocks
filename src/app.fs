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

let run containerDivId =
    let elem = document.getElementById containerDivId
    let canvas = document.createElement_canvas()
    canvas.width <- float (fst gameAreaSize) * blockSize
    canvas.height <- float (snd gameAreaSize) * blockSize
    elem.appendChild(canvas) |> ignore
    clearCanvas canvas
    drawShape 0 0  "red" (createShape D) canvas
    drawShape 0 2  "green" (createShape I) canvas
    drawShape 0 5  "yellow" (createShape J) canvas
    drawShape 0 8  "cyan" (createShape L) canvas
    drawShape 0 11  "orange" (createShape O) canvas
    drawShape 0 14  "magenta" (createShape S) canvas
    drawShape 0 17 "blue" (createShape Z) canvas

run "mainContainer"
