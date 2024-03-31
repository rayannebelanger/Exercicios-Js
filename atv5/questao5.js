var prompt = require('prompt-sync')();

function ehPrimo(num) {
    if (num < 2) {
        return false;
    }
    
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
    
}

var numero = prompt('Informe um número: ')
console.log(ehPrimo(numero))
