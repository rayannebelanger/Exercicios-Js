var prompt = require('prompt-sync')();

function numeroFatorial(numero) {
    let fatorial = numero
    for (let index = numero; index >= 0; index--) {

        if ((index - 1) >= 1) {
            fatorial = fatorial * (index - 1)
        }
        
    }
    return fatorial
}

var numero = Number(prompt('Informe um numero: '))
console.log(numeroFatorial(numero))
