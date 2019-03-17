module FBlocks.Block

type Coord = { x: int; y: int }
type ShapeKind = D | I | J | L | O | S | Z
type Shape = Shape of Coord array

let convertShapeDefinition (definition: int array array) =
    seq {
        for x in 0..(definition.Length - 1) do
            for y in 0..(definition.Length - 1) do
                if definition.[y].[x] = 1 then
                    yield { x = x; y = y }
    }
    |> Seq.toArray
    |> Shape

let createShape shapeKind =
    let x = 1

    convertShapeDefinition (
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
                  [| 0; 0; 0 |] |])
