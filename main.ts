function Mostrar_Cronometro () {
    basic.showNumber(cronometro)
    basic.pause(1000)
    cronometro += 1
}
function Mostrar_Reloj () {
    basic.showNumber(hora)
    basic.pause(500)
    basic.showNumber(munutos)
    basic.pause(500)
    basic.showNumber(segudos)
    basic.pause(500)
}
let cronometro = 0
let segudos = 0
let munutos = 0
let hora = 0
hora = 13
munutos = 26
segudos = 10
cronometro = 0
let modo = 1
basic.forever(function () {
    basic.pause(1000)
    cronometro += 1
    if (modo == 2) {
        basic.showNumber(cronometro)
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        modo = 1
        Mostrar_Reloj()
    }
    if (input.buttonIsPressed(Button.B)) {
        modo = 2
        cronometro = 0
        Mostrar_Cronometro()
    }
})
basic.forever(function () {
    segudos += 1
    basic.pause(1000)
    if (segudos < 60) {
        munutos += 1
        segudos = 0
    }
})
