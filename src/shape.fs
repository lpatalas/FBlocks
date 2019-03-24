module FBlocks.Shape

type ShapeCell = EmptyCell | FilledCell
type ShapeName = D | I | J | L | O | S | Z
type ShapeMatrix = Matrix.Matrix<ShapeCell>

let getShapeMatrix shapeName =
    let x = 1
    let matrixDefinition =
        match shapeName with
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
    |> Matrix.map (fun x -> if x = 1 then FilledCell else EmptyCell)

