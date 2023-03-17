function Modo_Al_Pulsar_B () {
	
}
function Mostrar_Cronometro () {
	
}
function Mostrar_Reloj () {
	
}
let hora = 13
let munutos = 26
let segudos = 10
let cronometro = 0
let modo = 1
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        modo = 1
        Mostrar_Reloj()
    }
    if (input.buttonIsPressed(Button.B)) {
        modo = 2
        Mostrar_Cronometro()
    }
})
