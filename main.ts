basic.showIcon(IconNames.Heart)
basic.forever(function () {
    PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J1, true)
    PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J3, false)
    basic.pause(5000)
    PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J1, false)
    PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J2, true)
    basic.pause(2000)
    PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J2, false)
    PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J3, true)
    basic.pause(5000)
})
