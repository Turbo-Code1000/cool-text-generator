function textToList (text: string) {
    for (let I3 = 0; I3 <= text.length; I3++) {
        text_list.push(text.charAt(I3))
    }
    return text_list
}
function pixelByte (Byte: string) {
    basic.showString(Byte)
    for (let index = 0; index <= 4; index++) {
        for (let i2 = 0; i2 <= 4; i2++) {
            led.toggle(index, i2)
            basic.pause(100)
        }
    }
    for (let index = 0; index <= 4; index++) {
        for (let i2 = 0; i2 <= 4; i2++) {
            led.toggle(i2, index)
            basic.pause(100)
        }
    }
}
function pixelText (text: string) {
    for (let value of textToList("abc")) {
        pixelByte(value)
    }
}
let text_list: string[] = []
text_list = []
basic.forever(function () {
    pixelText("Hello")
})
