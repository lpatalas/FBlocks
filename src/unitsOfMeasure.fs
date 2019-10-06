[<AutoOpen>]
module FBlocks.UnitsOfMeasure

[<Measure>]
type ms

[<Measure>]
type s

[<Measure>]
type frame

[<Measure>]
type cell

let millisecondsPerSecond: float<ms/s> = 1000.0<ms/s>

let secondsToMilliseconds (seconds: float<s>) =
    seconds * millisecondsPerSecond
