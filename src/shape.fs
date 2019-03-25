module FBlocks.Shape

open System
open FBlocks.Coord

type ShapeCell = EmptyCell | FilledCell
type ShapeName = D | I | J | L | O | S | Z | E
type ShapeMatrix = Matrix.Matrix<ShapeCell>

let randomGenerator = Random()

let random() =
    match randomGenerator.Next(7) with
    | 0 -> D
    | 1 -> I
    | 2 -> J
    | 3 -> L
    | 4 -> O
    | 5 -> S
    | 6 -> Z
    | _ -> E

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

        | E -> [| [| x; 0; x; 0; x |]
                  [| x; x; x; x; x |] |]

    matrixDefinition
    |> Matrix.fromArray
    |> Matrix.map (fun x -> if x = 1 then FilledCell else EmptyCell)

let filledCellCoords shape =
    shape
    |> Matrix.flatmapi (fun x y v -> ({ x = x; y = y }, v))
    |> Seq.filter (fun (coord, v) -> v = FilledCell)
    |> Seq.map (fun (coord, _) -> coord)
