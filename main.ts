controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (P2luigi.vy == 0) {
        P2luigi.vy = -75
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.y += -2
})
controller.player4.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (P4Peach.vy == 0) {
        P4Peach.vy = -75
    }
})
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (P1_mario.vy == 0) {
        P1_mario.vy = -75
    }
})
controller.player3.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (P3toad.vy == 0) {
        P3toad.vy = -75
    }
})
let P4Peach: Sprite = null
let P3toad: Sprite = null
let P2luigi: Sprite = null
let P1_mario: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
mp.setPlayerIndicatorsVisible(true)
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
controller.player1.moveSprite(P1_mario, 100, 0)
controller.player2.moveSprite(P2luigi, 100, 0)
controller.player3.moveSprite(P3toad, 100, 0)
controller.player4.moveSprite(P4Peach, 100, 0)
P1_mario.ay = 300
P2luigi.ay = 300
P3toad.ay = 300
P4Peach.ay = 300
P1_mario.setStayInScreen(false)
P2luigi.setStayInScreen(false)
P3toad.setStayInScreen(false)
P4Peach.setStayInScreen(false)
