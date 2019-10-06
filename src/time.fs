module FBlocks.Time

open Fable.Import.Browser

type Time = Time of ms: float<ms>

let zero =
    Time 0.0<ms>

let add (Time t1) (Time t2) =
    Time (t1 + t2)

let difference (Time t1) (Time t2) =
    Time (t1 - t2)

let fromMilliseconds ms =
    Time ms

let getCurrent() =
     (performance.now() * 1.0<ms>) |> fromMilliseconds
