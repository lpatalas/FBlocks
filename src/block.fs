module FBlocks.Block

type Cell = Empty | Square
type CellCoord = { x: int; y: int }
type Rotation = NoRotation | By90Degrees | By180Degrees | By270Degrees
type Shape = D | I | J | L | O | S | Z
type ShapeMatrix = Matrix.Matrix<Cell>

type Block = {
    rotation: Rotation;
    shape: Shape;
}

let rotateMatrix (matrix: ShapeMatrix) =
    let rotateCell x y _ =
        Matrix.getAt y (matrix.size - 1 - x) matrix
    matrix |> Matrix.mapi rotateCell

let getShapeMatrix shapeKind =
    let x = 1
    let matrixDefinition =
        match shapeKind with
        | D -> [| [| 0; x; 0 |]
                  [| x; x; x |]
                  [| 0; 0; 0 |] |]

        | I -> [| [| 0; 0; 0; 0 |]
                  [| x; x; x; x |]
                  [| 0; 0; 0; 0 |]
                  [| 0; 0; 0; 0 |] |]

        | J -> [| [| x; 0; 0 |]
                  [| x; x; x |]
                  [| 0; 0; 0 |] |]

        | L -> [| [| 0; 0; x |]
                  [| x; x; x |]
                  [| 0; 0; 0 |] |]

        | O -> [| [| x; x |]
                  [| x; x |] |]

        | S -> [| [| 0; x; x |]
                  [| x; x; 0 |]
                  [| 0; 0; 0 |] |]

        | Z -> [| [| x; x; 0 |]
                  [| 0; x; x |]
                  [| 0; 0; 0 |] |]

    matrixDefinition
    |> Matrix.create
    |> Matrix.map (fun x -> if x = 1 then Square else Empty)

