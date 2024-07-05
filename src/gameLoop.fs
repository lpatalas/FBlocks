module FBlocks.GameLoop

open Browser

let framesPerSecond = 60.0<frame/s>
let msPerFrame = 1.0<frame> / framesPerSecond |> secondsToMilliseconds
let frameDuration = Time.fromMilliseconds msPerFrame

let onNextFrame callback =
    window.requestAnimationFrame callback |> ignore

let rec updateFrame state lastFrameNumber currentTime lastFrameTime =
    let frameNumber = lastFrameNumber + 1<frame>
    let frameTime = Time.add lastFrameTime frameDuration
    if frameTime < currentTime then
        let updatedState = state |> Game.update frameNumber
        updateFrame updatedState frameNumber currentTime frameTime
    else
        (state, lastFrameNumber, lastFrameTime)

let rec mainLoop game updateUI lastFrameNumber lastFrameTime lastGameTime lastRealTime =
    let realTime = Time.getCurrent()
    let realTimeDelta = Time.difference realTime lastRealTime
    let gameTime = Time.add lastGameTime realTimeDelta

    let (updatedGame, frameNumber, updatedLastFrameTime) =
        updateFrame game lastFrameNumber gameTime lastFrameTime

    if updatedGame <> game then
        updateUI game updatedGame

    match updatedGame with
    | Game.RunningGame _ ->
        onNextFrame (fun _ -> mainLoop updatedGame updateUI frameNumber updatedLastFrameTime gameTime realTime)
    | _ -> ()

let run game updateUI =
    let realTime = Time.getCurrent()
    let gameTime = Time.zero
    let frameTime = Time.zero
    let frameNumber = 0<frame>

    onNextFrame (fun _ -> mainLoop game updateUI frameNumber frameTime gameTime realTime)
