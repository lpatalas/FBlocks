module FBlocks.Score

type Score = {
    linesCompleted: int
    points: int
}

let zero = { linesCompleted = 0; points = 0 }

let calculatePoints linesCompleted =
    match linesCompleted with
    | 0 -> 0
    | 1 -> 40
    | 2 -> 100
    | 3 -> 300
    | 4 -> 1200
    | _ -> invalidArg "linesCompleted" (sprintf "Invalid number of lines completed: %i" linesCompleted)

let update score completedRows =
    { score with
        linesCompleted = score.linesCompleted + completedRows
        points = score.points + calculatePoints completedRows }

let difference previous current =
    {
        linesCompleted = current.linesCompleted - previous.linesCompleted
        points = current.points - previous.points
    }
