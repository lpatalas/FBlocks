module FBlocks.Matrix

type Matrix<'T> = {
    cells: 'T array
    columnCount: int
    rowCount: int
}

let create columnCount rowCount value =
    {
        cells = Array.replicate (columnCount * rowCount) value
        columnCount = columnCount
        rowCount = rowCount
    }

let fromArray (input: 'T array array) =
    if input.Length = 0 then
        invalidArg "input" "Input array can't have zero length"

    let rowCount = input.Length
    let columnCount = input.[0].Length
    let areSubarraysSameLength =
        input |> Seq.forall (fun subarray -> subarray.Length = columnCount)

    if not areSubarraysSameLength then
        invalidArg "input" "All subarrays in matrix must have same length"

    {
        cells = input |> Array.concat
        columnCount = columnCount
        rowCount = rowCount
    }

let getAt x y matrix =
    matrix.cells.[x + (y * matrix.columnCount)]

let getRow y matrix =
    matrix.cells.[(y * matrix.columnCount)..(matrix.columnCount + (y * matrix.columnCount) - 1)]

let rows matrix =
    seq { 0..(matrix.rowCount - 1) }
    |> Seq.map (fun y -> getRow y matrix)

let exists predicate matrix =
    Array.exists predicate matrix.cells

let iter action matrix =
    Array.iter action matrix.cells

let iteri action matrix =
    let action' i x =
        action (i % matrix.columnCount) (i / matrix.columnCount) x
    Array.iteri action' matrix.cells

let flatmapi mapping matrix =
    let mapping' i x =
        mapping (i % matrix.columnCount) (i / matrix.columnCount) x
    Array.mapi mapping' matrix.cells

let map mapping matrix =
    {
        cells = matrix.cells |> Array.map mapping
        columnCount = matrix.columnCount
        rowCount = matrix.rowCount
    }

let mapi mapping matrix =
    let mapping' i x =
        mapping (i % matrix.columnCount) (i / matrix.columnCount) x
    {
        cells = matrix.cells |> Array.mapi mapping'
        columnCount = matrix.columnCount
        rowCount = matrix.rowCount
    }

let coordsWithValue value matrix =
    matrix
    |> flatmapi (fun x y v -> (x, y, v))
    |> Seq.filter (fun (_, _, v) -> v = value)
    |> Seq.map (fun (x, y, _) -> Coord.create x y)

let coordsWhere predicate matrix =
    matrix
    |> flatmapi (fun x y v -> (x, y, v))
    |> Seq.filter (fun (_, _, v) -> predicate v)
    |> Seq.map (fun (x, y, _) -> Coord.create x y)

let rotateClockwise matrix =
    let rotateCell x y _ =
        getAt y (matrix.rowCount - 1 - x) matrix

    create matrix.rowCount matrix.columnCount (getAt 0 0 matrix)
    |> mapi rotateCell
