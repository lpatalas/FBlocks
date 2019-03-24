module FBlocks.Renderer

open Fable.Core.JsInterop
open Fable.Import.Browser
open FBlocks.Shape

type Renderer = {
    canvas: HTMLCanvasElement
}

let blockSize = 24.0

let create containerElementId (grid: Grid.Grid) =
    let elem = document.getElementById containerElementId
    let canvas = document.createElement_canvas()
    canvas.width <- float grid.width * blockSize
    canvas.height <- float grid.height * blockSize
    elem.appendChild(canvas) |> ignore
    { canvas = canvas }

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

let drawGrid (grid: Grid.Grid) (canvas: HTMLCanvasElement) =
    grid.cells
    |> Matrix.iteri (fun cellX cellY cell ->
        if cell = FilledCell then
            drawSquare cellX cellY "#FFF" canvas)

let drawShape (x: int) (y:int) (color: string) (shape: ShapeMatrix) (canvas: HTMLCanvasElement) =
    shape
    |> Matrix.iteri (fun cellX cellY cell ->
        if cell = FilledCell then
            drawSquare (x + cellX) (y + cellY) color canvas
        else
            drawSquare (x + cellX) (y + cellY) "#333" canvas)

let redraw renderer grid (block: Block.Block) =
    clearCanvas renderer.canvas
    drawGrid grid renderer.canvas
    drawShape block.position.x block.position.y "red" block.shape renderer.canvas
