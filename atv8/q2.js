let prompt = require('prompt-sync')();

function somaRecursiva(n) {
    
    if (n === 1) {
        return 1;
    } else {
       
        return 1/n + somaRecursiva(n-1);
    }
}

// Exemplo de uso
let n = parseInt(prompt("n: "));
let resultado = somaRecursiva(n);
console.log("resultado:", resultado);
