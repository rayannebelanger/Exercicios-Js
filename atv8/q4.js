let prompt = require('prompt-sync')();

function tribonacci(N) {
    if (N === 0) {
        return 0;
    } else if (N === 1 || N === 2) {
        return 1;
    } else {
        return tribonacci(N - 1) + tribonacci(N - 2) + tribonacci(N - 3);
    }
}

let N = parseInt(prompt("Digite o valor de N: "));
let resultado = tribonacci(N);
console.log("O", N + "-ésimo número da sequência de Tribonacci é:", resultado);
