module FBlocks.Block

type Block = {
    position: Coord.Coord
    shape: Shape.ShapeMatrix
}

let create gridSize shapeName =
    let shape = Shape.getShapeMatrix shapeName
    let maxY =
        shape
        |> Shape.filledCellCoords
        |> Seq.map Coord.getY
        |> Seq.max

    {
        position = { x = (gridSize - shape.columnCount) / 2; y = -maxY }
        shape = shape
    }

let moveBy dx dy block =
    { block with position = Coord.add block.position { x = dx; y = dy } }

let rotate block =
    { block with shape = Matrix.rotateClockwise block.shape }

let getSquareCoords block =
    block.shape
    |> Shape.filledCellCoords
    |> Seq.map (fun coord -> Coord.add coord block.position)

let getFilledCells block =
    block.shape
    |> Matrix.flatmapi (fun x y cell -> (Coord.create x y, cell))
    |> Seq.filter (fun (coord, cell) -> Shape.isCellFilled cell)
    |> Seq.map (fun (coord, cell) -> ((Coord.add coord block.position), cell))

let getBoundingRect block =
    block
    |> getSquareCoords
    |> BoundingRect.fromCoords
