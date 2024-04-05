var prompt = require('prompt-sync')()
var numeros = []
var maior = 0
var soma = 0
var numero

while(numero != "ok") {
    numero = prompt('Informe numero: ')

    if(numero != "ok") {
        numero = Number(numero)
        if(numero < 0 || numero > 1000) {
            console.log("Informe numeros entre 0 e 1000")
        } else {
            numeros.push(Number(numero))
        }
    } 

}
var menor = numeros[0]

for(i = 0; i < numeros.length; i++) {
    soma += numeros[i]
    if(numeros[i] > maior) {
        maior = numeros[i]
    }
    if(numeros[i] < menor) {
        menor = numeros[i]
    }

}



console.log('Maior: ', maior, '| Menor: ', menor)
console.log('Soma dos numeros fornecidos: ', soma)

