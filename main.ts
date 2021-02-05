function randomSpinRight () {
    Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Right, Speed)
    basic.pause(randint(150, MaxTime))
}
input.onButtonPressed(Button.A, function () {
    Speed = 100
    while (Speed > 3) {
        randomSpinRight()
        Speed += randint(-15, 3)
    }
    Kitronik_Move_Motor.stop()
})
function randomSpinLeft () {
    Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Left, Speed)
    basic.pause(randint(150, MaxTime))
}
input.onButtonPressed(Button.B, function () {
    Speed = 100
    while (Speed > 3) {
        randomSpinLeft()
        Speed += randint(-15, 3)
    }
    Kitronik_Move_Motor.stop()
})
let Speed = 0
let MaxTime = 0
MaxTime = 1000
