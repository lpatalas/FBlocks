module FBlocks.Coord

type Coord = {
    x: int
    y: int
}

let add a b =
    { x = a.x + b.x; y = a.y + b.y }

let getX coord =
    coord.x

let getY coord =
    coord.y

