module FBlocks.RandomShapeGenerator

open System

type GeneratorState = {
    nextShapes: Shape.ShapeName list
}

let random = Random()
let allShapes = [| Shape.D; Shape.I; Shape.J; Shape.L; Shape.O; Shape.S; Shape.Z |]

let shuffleList (array: 'T[]) =
    let arrayCopy = Array.copy array
    for i = arrayCopy.Length - 1 downto 0 do
        let j = random.Next(0, i + 1)
        let temp = arrayCopy.[i]
        arrayCopy.[i] <- arrayCopy.[j]
        arrayCopy.[j] <- temp
    arrayCopy
    |> Array.toList

let getShuffledShapes() =
    allShapes
    |> shuffleList

let getNext state =
    match state.nextShapes with
    | [next] -> (next, { nextShapes = getShuffledShapes() })
    | next :: remaining -> (next, { nextShapes = remaining })
    | _ -> invalidOp "Unexpected empty list of next shapes"

let getList count state =
    let initialState =
        let (shape, nextState) = getNext state
        ([shape], nextState)

    let folder (shapes, lastState) _ =
        let (nextShape, nextState) = getNext lastState
        (List.append shapes [nextShape], nextState)

    seq { 1..count }
    |> Seq.fold folder initialState

let initialize() =
    {
        nextShapes = getShuffledShapes()
    }
