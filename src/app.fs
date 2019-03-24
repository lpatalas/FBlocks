module FBlocks.App

open Fable.Import.Browser

let run containerDivId =
    let mutable grid = Grid.createDefault
    let mutable block = Block.create Shape.D
    let renderer = Renderer.create containerDivId grid

    let redraw() =
        Renderer.redraw renderer grid block

    let onKeyDown (e: KeyboardEvent) =
        let move =
            match e.key with
            | "ArrowLeft" -> Block.moveBy -1 0
            | "ArrowRight" -> Block.moveBy 1 0
            | "ArrowUp" -> Block.moveBy 0 -1
            | "ArrowDown" -> Block.moveBy 0 1
            | _ -> id

        let rotate =
            match e.key with
            | " " -> Block.rotate
            | _ -> id

        let updatedBlock = block |> move |> rotate

        if Grid.isBlockValid grid updatedBlock then

            if e.key = "Enter" then
                grid <- Grid.placeBlock grid updatedBlock
                block <- Block.create Shape.L
            else
                block <- updatedBlock

            redraw()

    window.addEventListener_keydown onKeyDown

    redraw()

run "mainContainer"
