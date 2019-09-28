module FBlocks.Grid

open FBlocks
open FBlocks.Coord

type Grid = {
    cells: Matrix.Matrix<Shape.ShapeCell>
    height: int
    width: int
}

let create width height =
    {
        cells = Matrix.create width height Shape.EmptyCell
        height = height
        width = width
    }

let getFilledCellCoords grid =
    grid.cells
    |> Matrix.coordsWhere Shape.isCellFilled

let isBlockValid grid block =
    let isCellInBounds coord =
        coord.x >= 0
        && coord.x < grid.width
        && coord.y < grid.height

    let isCellOverlappingFilledGrid cellCoord =
        grid
        |> getFilledCellCoords
        |> Seq.exists (fun gridCoord -> gridCoord = cellCoord)

    let isCellValid cell =
        isCellInBounds cell
        && not (isCellOverlappingFilledGrid cell)

    block
    |> Block.getSquareCoords
    |> Seq.forall isCellValid

let countCompletedRows grid =
    let isRowCompleted row =
        row
        |> Seq.forall Shape.isCellFilled

    grid.cells
    |> Matrix.rows
    |> Seq.filter isRowCompleted
    |> Seq.length

let removeCompletedRows grid =
    let matrix = grid.cells
    let completeRowIndices =
        let isRowComplete rowIndex =
            matrix
            |> Matrix.getRow rowIndex
            |> Seq.forall Shape.isCellFilled

        seq { 0..(matrix.rowCount - 1) }
        |> Seq.filter isRowComplete

    let removeRow matrix rowIndex =
        let mapCell x y value =
            if y = 0 then
                Shape.EmptyCell
            else if y <= rowIndex then
                Matrix.getAt x (y - 1) matrix
            else
                value
        Matrix.mapi mapCell matrix

    let updatedCells =
        completeRowIndices
        |> Seq.fold removeRow matrix

    { grid with cells = updatedCells }

let placeBlock grid block =
    let filledCells = Block.getFilledCells block
    let gridCells =
        grid.cells
        |> Matrix.mapi (fun x y value ->
            let matchingCell =
                Seq.tryFind (fun (coord, _) -> coord = { x = x; y = y }) filledCells

            match matchingCell with
            | Some (_, cell) -> cell
            | _ -> value)

    {
        cells = gridCells
        height = grid.height
        width = grid.width
    }

let moveBlockToBottom grid (block: Block.Block) =
    let maxMoveY = grid.height - 1 - block.position.y
    [0..maxMoveY]
    |> Seq.map (fun dy -> Block.moveBy 0 dy block)
    |> Seq.takeWhile (isBlockValid grid)
    |> Seq.tryLast
    |> Option.defaultValue block
