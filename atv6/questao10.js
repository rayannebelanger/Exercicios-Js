var prompt = require('prompt-sync')();

var n1 = Number(prompt('Informe um numero: '))
var n2 = Number(prompt('Informe outro numero: '))


    for(i = n1; i < n2; i++) {
        if(i+1 < n2) {
            console.log(i+1)
        }
    }