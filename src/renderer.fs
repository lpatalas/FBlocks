module FBlocks.Renderer

open Fable.Core.JsInterop
open Fable.Import.Browser

type Renderer = {
    canvas: HTMLCanvasElement
}

let blockSize = 24.0

let setAlpha alpha color =
    sprintf "%s%X" color alpha

let create containerElementId width height =
    let elem = document.getElementById containerElementId
    let canvas = document.createElement_canvas()
    canvas.width <- (float width) * blockSize
    canvas.height <- (float height) * blockSize
    elem.appendChild(canvas) |> ignore
    { canvas = canvas }

let clearCanvas (canvas: HTMLCanvasElement) =
    let context = canvas.getContext_2d()
    context.fillStyle <- !^ "#246"
    context.fillRect(0.0, 0.0, canvas.width, canvas.height)

let drawSquare (x: int) (y: int) (color: string) (canvas: HTMLCanvasElement) =
    let context = canvas.getContext_2d()
    context.fillStyle <- !^ color
    context.fillRect((float x) * blockSize + 0.5, (float y) * blockSize + 0.5, blockSize - 1.0, blockSize - 1.0)

let drawGrid (grid: Grid.Grid) (canvas: HTMLCanvasElement) =
    grid.cells
    |> Matrix.iteri (fun cellX cellY cell ->
        match cell with
        | Shape.FilledCell color -> drawSquare cellX cellY color canvas
        | _ -> ())

let drawShape x y shape alpha canvas =
    shape
    |> Matrix.iteri (fun cellX cellY cell ->
        match cell with
        | Shape.FilledCell color -> drawSquare (x + cellX) (y + cellY) (setAlpha alpha color) canvas
        | Shape.EmptyCell -> ())

let drawBlock renderer alpha (block: Block.Block) =
    drawShape block.position.x block.position.y block.shape alpha renderer.canvas

let redraw renderer grid block =
    clearCanvas renderer.canvas
    drawGrid grid renderer.canvas

    let ghost = Grid.moveBlockToBottom grid block
    drawBlock renderer 64 ghost
    drawBlock renderer 255 block

let drawNextBlock renderer (shape: Shape.ShapeName) =
    clearCanvas renderer.canvas
    let shapeMatrix = shape |> Shape.getShapeMatrix
    drawShape 0 0 shapeMatrix 255 renderer.canvas
