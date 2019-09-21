module FBlocks.Time

open Fable.Import.Browser

type Time = Time of ms: float

let zero =
    Time 0.0

let add (Time t1) (Time t2) =
    Time (t1 + t2)

let difference (Time t1) (Time t2) =
    Time (t1 - t2)

let fromMilliseconds ms =
    Time ms

let getCurrent() =
     performance.now() |> fromMilliseconds
