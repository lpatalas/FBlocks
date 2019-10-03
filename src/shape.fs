module FBlocks.Shape

open System

type Color = string
type ShapeCell = EmptyCell | FilledCell of Color
type ShapeName = D | I | J | L | O | S | Z
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
    | _ -> invalidOp "Random number out of range of available shapes"

let isCellFilled cell =
    match cell with
    | FilledCell _ -> true
    | EmptyCell -> false

let getShapeColor shapeName =
    match shapeName with
        | D -> "#FF8080"
        | I -> "#8080FF"
        | J -> "#FFFF80"
        | L -> "#FFB080"
        | O -> "#80FF80"
        | S -> "#FF80FF"
        | Z -> "#B080FF"

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

    let color = getShapeColor shapeName

    matrixDefinition
    |> Matrix.fromArray
    |> Matrix.map (fun x -> if x = 1 then FilledCell color else EmptyCell)

let filledCellCoords shape =
    shape
    |> Matrix.flatmapi (fun x y v -> (Coord.create x y, v))
    |> Seq.filter (fun (_, v) -> isCellFilled v)
    |> Seq.map (fun (coord, _) -> coord)
