var prompt = require('prompt-sync')();
var parametro = false
var pa, pb, taxaCrescimentoA, taxaCrescimentoB, tempo = 0;

while(parametro == false) {
    pa = Number(prompt('Tamanho população A (menor): '));
    pb = Number(prompt('Tamanho população B (maior): '));
    taxaCrescimentoA = Number(prompt('Taxa crescimento A (maior): '));
    taxaCrescimentoB = Number(prompt('Taxa crescimento B (menor): '));

    if (pa > pb || taxaCrescimentoA < taxaCrescimentoB) {
        parametro = false;
        console.log('Por favor, insira valores válidos.');
    } else {
        parametro = true;
    }
}

while(pa <= pb && parametro == true) {
    pa = pa  * (1 + taxaCrescimentoA)
    pb = pb  * (1 + taxaCrescimentoB)
    tempo++
}

console.log('Vão ser necessários', tempo, ' anos')