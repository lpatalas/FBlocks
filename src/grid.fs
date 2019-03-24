module FBlocks.Grid

open FBlocks.Coord

type Grid = {
    height: int
    width: int
}

let createDefault =
    { height = 20; width = 10 }

let isBlockValid (grid: Grid) (block: Block.Block) =
    let isCellValid coord =
        coord.x >= 0
        && coord.x < grid.width
        && coord.y >= 0
        && coord.y < grid.height

    block
    |> Block.getSquareCoords
    |> Seq.forall isCellValid
