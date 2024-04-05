var prompt = require('prompt-sync')()
var par = 0
var impar = 0

for(i = 0; i < 10; i++) {
    var numero = Number(prompt('Numero: '))

    if(numero % 2 == 0) {
        par++
    } else if(numero % 2 != 0) {
        impar++
    }
}

console.log('Quantidade par: ', par)
console.log('Quantidade impar: ', impar)