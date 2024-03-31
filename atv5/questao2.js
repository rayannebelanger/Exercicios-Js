var prompt = require('prompt-sync')();

function imparOupar(numero) {
    if (numero % 2 == 0) {
        console.log('true')
    } else if (numero % 2 != 0) {
        console.log('false')
    }
}

var numero = prompt('Informe um número: ')
imparOupar(numero)