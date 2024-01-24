let emoji = ""
input.onButtonPressed(Button.AB, function () {
    let Y = 0
    let X = 0
    emoji = ""
    led.toggle(X, Y)
    for (let Xindex = 0; Xindex <= 4; Xindex++) {
        for (let Yindex = 0; Yindex <= 4; Yindex++) {
            if (led.point(Xindex, Yindex)) {
                emoji = "" + emoji + "1"
            } else {
                emoji = "" + emoji + "0"
            }
            led.toggle(Xindex, Yindex)
            basic.pause(30)
            led.toggle(Xindex, Yindex)
        }
    }
    led.toggle(X, Y)
    radio.sendString(emoji.substr(0, 15))
    basic.pause(10)
    radio.sendString(emoji.substr(15, 10))
    basic.pause(10)
    radio.sendString("ferdig")
})
