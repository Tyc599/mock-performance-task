controller.player4.onEvent(ControllerEvent.Connected, function () {
    if (P3toad.vy == 0) {
        P3toad.vy = -50
    }
})
controller.player3.onEvent(ControllerEvent.Connected, function () {
    if (P4Peach.vy == 0) {
        P4Peach.vy = -50
    }
})
controller.player2.onEvent(ControllerEvent.Connected, function () {
    if (P1_mario.vy == 0) {
        P1_mario.vy = -50
    }
})
sprites.onDestroyed(SpriteKind.Player, function (sprite) {
    if (sprite.tileKindAt(TileDirection.Left, assets.tile`myTile9`)) {
        tiles.setTileAt(sprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Left), assets.tile`transparency16`)
        tiles.setWallAt(sprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Left), false)
    }
})
controller.player1.onEvent(ControllerEvent.Connected, function () {
    if (P2luigi.vy == 0) {
        P2luigi.vy = -50
    }
})
let P4Peach: Sprite = null
let P3toad: Sprite = null
let P2luigi: Sprite = null
let P1_mario: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
P1_mario = sprites.create(assets.image`myImage`, SpriteKind.Player)
P2luigi = sprites.create(assets.image`myImage0`, SpriteKind.Player)
P3toad = sprites.create(assets.image`myImage1`, SpriteKind.Player)
P4Peach = sprites.create(assets.image`myImage2`, SpriteKind.Player)
scene.cameraFollowSprite(P1_mario)
scene.cameraFollowSprite(P2luigi)
scene.cameraFollowSprite(P3toad)
scene.cameraFollowSprite(P4Peach)
P1_mario.setPosition(2, 192)
P2luigi.setPosition(25, 192)
P3toad.setPosition(40, 192)
P4Peach.setPosition(55, 192)
controller.player1.moveSprite(P1_mario, 100, 100)
controller.player2.moveSprite(P2luigi, 100, 100)
controller.player3.moveSprite(P3toad, 100, 100)
controller.player4.moveSprite(P4Peach, 100, 100)
