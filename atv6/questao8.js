var prompt = require('prompt-sync')();
var i
var numero
var soma = 0
for(i = 0; i < 5; i++) {
    numero = Number(prompt())
    soma += numero
    
}

console.log('Soma dos numeros: ', soma)
console.log('Média dos numeros: ', soma/i)