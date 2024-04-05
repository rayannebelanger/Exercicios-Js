var prompt = require('prompt-sync')()

var numero = Number(prompt('Fatorial de: '))
var total = 1
for(i = numero; i > 0; i--) {
    total *= i
}

console.log(numero, '! = ', total)