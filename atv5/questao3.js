var prompt = require('prompt-sync')();
var array = []
var size = 4
var numero
var soma = 0
function calcularArray(numero) {
    for(let i = 0; i < size; i++) {
        numero = Number(prompt('Informe um numero: '))
        soma += numero
        
    }
    console.log(soma/size)
}

calcularArray(numero)


