module FBlocks.BoundingRect

open System

type BoundingRect = {
    bottom: int
    left: int
    right: int
    top: int
}

let addPoint bounds (coord: Coord.Coord) =
    {
        bottom = max bounds.bottom coord.y
        left = min bounds.left coord.x
        right = max bounds.right coord.x
        top = min bounds.top coord.y
    }

let fromCoords (coords: Coord.Coord seq) =
    let initialBounds = {
        bottom = Int32.MinValue
        left = Int32.MaxValue
        right = Int32.MinValue
        top = Int32.MinValue
    }

    coords
    |> Seq.fold addPoint initialBounds

