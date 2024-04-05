const prompt = require('prompt-sync')();

function ehPrimo(num) {
    if (num < 2) return false; 
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; 
    }

    return true; 
}

const numero = parseInt(prompt('Informe um número inteiro: '));

const primos = [];
let divisoes = 0; 

for (let i = 2; i <= numero; i++) {
    if (ehPrimo(i)) {
        primos.push(i); 
    }
    divisoes++;
}

console.log("Números primos entre 1 e", numero, ":", primos.join(', '));
console.log("Divisões:", divisoes);