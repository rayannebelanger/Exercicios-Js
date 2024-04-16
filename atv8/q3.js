let prompt = require('prompt-sync')();

function potenciaRecursiva(x, k) {
    if (k === 0) {
        return 1;
    } else if (k === 1) {
        return x;
    } else if (k < 0) {
        return 1 / (x * potenciaRecursiva(x, -k - 1));
    } else if (k % 2 === 0) {
        let temp = potenciaRecursiva(x, k / 2);
        return temp * temp;
    } else {
        return x * potenciaRecursiva(x, k - 1);
    }
}

let x = parseInt(prompt("Digite o valor de x: "));
let k = parseInt(prompt("Digite o valor de k: "));
let resultado = potenciaRecursiva(x, k);
console.log(x + " elevado a " + k + " é:", resultado);
