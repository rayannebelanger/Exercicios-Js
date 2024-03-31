var prompt = require('prompt-sync')();

function valorMaisPorcentagem(valor, porcentagem) {
    return valor * (1 + (porcentagem / 100))
}

var valor = prompt('Informe um valor: ')
var porcentagem = prompt('Informe uma porcentagem: ')
console.log(valorMaisPorcentagem(valor, porcentagem))
