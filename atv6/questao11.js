var prompt = require('prompt-sync')();
var soma = 0
var n1 = Number(prompt('Informe um numero: '))
var n2 = Number(prompt('Informe outro numero: '))


    for(i = n1; i < n2; i++) {
        if(i+1 < n2) {
            console.log(i+1)
            soma += i+1
        }
    }

    console.log('Soma dos numeros total: ', soma+n1+n2)