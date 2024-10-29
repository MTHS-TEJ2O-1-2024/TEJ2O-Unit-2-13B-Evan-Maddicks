/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Evan M
 * Created on: Oct 2024
 * This program counts down from 4
*/

//variables
let neopixelStrip: neopixel.Strip = null
let count = 4
let pixel = 4

//cleanup
input.onButtonPressed(Button.B,function() { 
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.show()
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})

//neopixels
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))

//setup
input.onButtonPressed(Button.A,function() { 
basic.showNumber(count)
neopixelStrip.show()

while (count >= 0) {
    neopixelStrip.setPixelColor(pixel, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.show()
    basic.showNumber(count)
    basic.pause(250)
    count = count -1
    pixel = pixel -1
}
    basic.showIcon(IconNames.Happy)
})

