function RandomSpin (SpinDirection: number) {
    Result = randint(1, 12)
    Speed = 100
    moveMotorZIP.setZipLedColor(0, Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Red))
    moveMotorZIP.setZipLedColor(1, Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Blue))
    moveMotorZIP.setZipLedColor(2, Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.White))
    moveMotorZIP.setZipLedColor(3, Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Yellow))
    while (Speed > 3) {
        moveMotorZIP.rotate(1)
        moveMotorZIP.show()
        if (SpinDirection < 0) {
            Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Left, Speed)
        } else {
            Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Right, Speed)
        }
        basic.pause(randint(150, MaxTime))
        Speed += randint(-15, 3)
    }
    Kitronik_Move_Motor.stop()
    if (Result <= 6) {
        ShowBanana()
    } else if (Result <= 9) {
        ShowCheekyMonkey()
    } else if (Result <= 11) {
        ShowPool()
    } else {
        ShowQuestion()
    }
    moveMotorZIP.show()
}
function ShowCheekyMonkey () {
    moveMotorZIP.setColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.White))
    music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
    basic.showLeds(`
        # . . . #
        # # . # #
        # . # . #
        # . . . #
        # . . . #
        `)
}
input.onButtonPressed(Button.A, function () {
    music.startMelody(music.builtInMelody(Melodies.Chase), MelodyOptions.Once)
    basic.clearScreen()
    RandomSpin(1)
})
function ShowPool () {
    moveMotorZIP.setColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Blue))
    music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once)
    basic.showLeds(`
        # # # . .
        # . . # .
        # # # . .
        # . . . .
        # . . . .
        `)
}
function ShowBanana () {
    music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)
    moveMotorZIP.setColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Yellow))
    basic.showLeds(`
        # # # . .
        # . . # .
        # # # . .
        # . . # .
        # # # . .
        `)
}
input.onButtonPressed(Button.B, function () {
    music.startMelody(music.builtInMelody(Melodies.Chase), MelodyOptions.Once)
    basic.clearScreen()
    RandomSpin(-1)
})
function ShowQuestion () {
    moveMotorZIP.setColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Red))
    music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
    basic.showLeds(`
        . # # # .
        # . . . #
        . . # # .
        . . . . .
        . . # . .
        `)
}
let Speed = 0
let Result = 0
let MaxTime = 0
let moveMotorZIP: Kitronik_Move_Motor.MoveMotorZIP = null
moveMotorZIP = Kitronik_Move_Motor.createMoveMotorZIPLED(4)
MaxTime = 500
