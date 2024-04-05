var prompt = require('prompt-sync')()
var base = Number(prompt('Base: '))
var expoente = Number(prompt('Expoente: '))
var total = 1

for(i = 0; i < expoente; i++) {
    total *= base
}

console.log('Total: ', total)