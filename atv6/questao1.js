var prompt = require('prompt-sync')();

var nota = prompt('Informe uma nota entre 0 e 10: ')

while(nota < 0 || nota > 10) {
    console.log('Valor inválido!')
    nota = prompt('Informe uma nota entre 0 e 10: ')
}