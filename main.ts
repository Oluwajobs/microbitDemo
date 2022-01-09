TPBot.headlightColor(0xffff00)
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    TPBot.setTravelSpeed(TPBot.DriveDirection.Forward, 47)
    if (TPBot.sonarJudge(TPBot.Sonarjudge.Less, 20)) {
        TPBot.headlightColor(0xff0000)
        TPBot.setTravelTime(TPBot.DriveDirection.Backward, 53, 1)
        TPBot.setWheels(48, 10)
        TPBot.setTravelTime(TPBot.DriveDirection.Left, 52, 0.5)
    }
})
