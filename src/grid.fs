module FBlocks.Grid

open FBlocks.Coord

type Grid = {
    cells: Matrix.Matrix<Shape.ShapeCell>
    height: int
    width: int
}

let createDefault =
    let width = 10
    let height = 20
    {
        cells = Matrix.create width height Shape.EmptyCell
        height = height
        width = width
    }

let isBlockValid grid block =
    let isCellValid coord =
        coord.x >= 0
        && coord.x < grid.width
        && coord.y >= 0
        && coord.y < grid.height

    block
    |> Block.getSquareCoords
    |> Seq.forall isCellValid

let placeBlock grid block =
    let blockCells = Block.getSquareCoords block
    let gridCells =
        grid.cells
        |> Matrix.mapi (fun x y value ->
            if Seq.exists (fun coord -> coord = { x = x; y = y }) blockCells then
                Shape.FilledCell
            else
                value)
    {
        cells = gridCells
        height = grid.height
        width = grid.width
    }
