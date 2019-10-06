module FBlocks.Score

open System

type Score = {
    level: int
    linesCompleted: int
    points: int
}

let initial =
    {
        level = 0
        linesCompleted = 0
        points = 0
    }

let linesToNextLevel currentLevel =
    let rec calcLinesToNextLevel level total =
        if level < 0 then
            total
        else
            let linesAtCurrentLevel = (level + 1) * 10
            calcLinesToNextLevel (level - 1) (total + linesAtCurrentLevel)

    calcLinesToNextLevel currentLevel 0

let calculatePoints linesCompleted =
    match linesCompleted with
    | 0 -> 0
    | 1 -> 40
    | 2 -> 100
    | 3 -> 300
    | 4 -> 1200
    | _ -> invalidArg "linesCompleted" (sprintf "Invalid number of lines completed: %i" linesCompleted)

let calculateLevel level totalLinesCompleted =
    let linesNeeded = linesToNextLevel level
    if totalLinesCompleted >= linesNeeded then
        level + 1
    else
        level

let update score linesCompleted =
    let totalLinesCompleted = score.linesCompleted + linesCompleted
    { score with
        level = calculateLevel score.level totalLinesCompleted
        linesCompleted = totalLinesCompleted
        points = score.points + calculatePoints linesCompleted }

let difference previous current =
    {
        level = current.level - previous.level
        linesCompleted = current.linesCompleted - previous.linesCompleted
        points = current.points - previous.points
    }
