function Face_Recognition () {
    huskylens.initI2c()
    huskylens.initMode(protocolAlgorithm.ALGORITHM_FACE_RECOGNITION)
    while (초기화 == 0) {
        huskylens.request()
        if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
            basic.showLeds(`
                . # . # .
                # # # # #
                # # # # #
                . # # # .
                . . # . .
                `)
            basic.pause(100)
            basic.clearScreen()
            초기화 = 1
        } else {
            초기화 = 0
        }
    }
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.UntilDone)
    basic.showString("HI!")
    basic.pause(100)
    기분 = 0
}
input.onButtonPressed(Button.A, function () {
    Tag_Recognition()
})
function Object_Classification () {
	
}
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `)
    기분 += -1
})
input.onButtonPressed(Button.B, function () {
    기분 = 0
    초기화 = 0
    Face_Recognition()
    Tag_Recognition()
    Object_Classification()
    basic.showLeds(`
        . # # # .
        # # # # #
        # # # # #
        . . # . .
        . . # . .
        `)
    basic.showString("GAMEBOY")
})
function Tag_Recognition () {
    huskylens.initI2c()
    huskylens.initMode(protocolAlgorithm.ALGORITHM_FACE_RECOGNITION)
    while (기분 < 100) {
        huskylens.request()
        if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                # . . . #
                . # # # .
                `)
            music.playSoundEffect(music.builtinSoundEffect(soundExpression.happy), SoundExpressionPlayMode.UntilDone)
            basic.pause(2000)
            basic.clearScreen()
            기분 += 1
        }
    }
    if (huskylens.isAppear(2, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.mysterious), SoundExpressionPlayMode.UntilDone)
        basic.pause(2000)
        basic.clearScreen()
        기분 += 1
    }
    if (input.buttonIsPressed(Button.A)) {
        Object_Classification()
    }
}
let 기분 = 0
let 초기화 = 0
Face_Recognition()
Tag_Recognition()
Object_Classification()
basic.showLeds(`
    . # # # .
    # # # # #
    # # # # #
    . . # . #
    # . # . .
    `)
basic.showString("GAMEBOY")
