let prompt = require('prompt-sync')();

function pell(N) {
    if (N === 0) {
        return 0;
    } else if (N === 1) {
        return 1;
    } else {
        return 2 * pell(N - 1) + pell(N - 2);
    }
}

let N = parseInt(prompt("Digite o valor de N para encontrar o N-ésimo número de Pell: "));
let resultado = pell(N);
console.log("O", N + "-ésimo número de Pell é:", resultado);
