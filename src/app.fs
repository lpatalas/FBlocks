module FBlocks

open Fable.Core.JsInterop
open Fable.Import.Browser

let blockSize = 24.0
let gameAreaSize = (10, 20)

let clearCanvas (canvas: HTMLCanvasElement) =
    let context = canvas.getContext_2d()
    context.fillStyle <- !^ "#000"
    context.fillRect(0.0, 0.0, canvas.width, canvas.height)

let drawBlock (x: int) (y: int) (color: string) (canvas: HTMLCanvasElement) =
    let context = canvas.getContext_2d()
    context.fillStyle <- !^ color
    context.fillRect((float x) * blockSize + 0.5, (float y) * blockSize + 0.5, blockSize - 1.0, blockSize - 1.0)

let run containerDivId =
    let elem = document.getElementById containerDivId
    let canvas = document.createElement_canvas()
    canvas.width <- float (fst gameAreaSize) * blockSize
    canvas.height <- float (snd gameAreaSize) * blockSize
    elem.appendChild(canvas) |> ignore
    clearCanvas canvas
    drawBlock 0 0 "red" canvas
    drawBlock 1 0 "red" canvas
    drawBlock 1 1 "red" canvas
    drawBlock 2 1 "red" canvas

run "mainContainer"
