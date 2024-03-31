var prompt = require('prompt-sync')();

function transformarEmBinario(numero) {
    return numero.toString(2)
}

var numero = Number(prompt('Informe um inteiro: '))
console.log(transformarEmBinario(numero))
