module FBlocks.Matrix

type Matrix<'T> = {
    cells: 'T array
    size: int
}

let create (input: 'T array array) =
    {
        cells = input |> Array.concat
        size = input.Length
    }

let getAt x y matrix =
    matrix.cells.[x + (y * matrix.size)]

let iter action matrix =
    Array.iter action matrix.cells

let iteri action matrix =
    let action' i x =
        action (i % matrix.size) (i / matrix.size) x
    Array.iteri action' matrix.cells

let flatmapi mapping matrix =
    let mapping' i x =
        mapping (i % matrix.size) (i / matrix.size) x
    Array.mapi mapping' matrix.cells

let map mapping matrix =
    {
        cells = matrix.cells |> Array.map mapping
        size = matrix.size
    }

let mapi mapping matrix =
    let mapping' i x =
        mapping (i % matrix.size) (i / matrix.size) x
    {
        cells = matrix.cells |> Array.mapi mapping'
        size = matrix.size
    }

let rotateClockwise matrix =
    let rotateCell x y _ =
        getAt y (matrix.size - 1 - x) matrix
    matrix |> mapi rotateCell
