var prompt = require('prompt-sync')();
var nota
var quantidade = Number(prompt('Informe quantidade de notas: '))
var notaTotal = 0
var soma = 0
var resultado
for(let i = 0; i < quantidade; i++) {
    nota = Number(prompt('Informe nota: '))
    notaTotal += nota
    soma++
}
resultado = notaTotal/soma
console.log('Média aritmética: ', resultado)