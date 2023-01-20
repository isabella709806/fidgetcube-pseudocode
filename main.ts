input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
})
input.onGesture(Gesture.ScreenDown, function () {
    for (let index = 0; index < 4; index++) {
        basic.showArrow(ArrowNames.East)
        basic.showArrow(ArrowNames.West)
    }
})
input.onSound(DetectedSound.Loud, function () {
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # # # # #
        . . . . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Confused)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Sad)
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("OK!")
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showIcon(IconNames.Angry)
})
basic.clearScreen()
