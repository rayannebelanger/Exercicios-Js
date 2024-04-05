var prompt = require('prompt-sync')();

var numero = Number(prompt('Informe um numero: '))
var parametro = true
if(numero < 2) {
    console.log('Não é primo')
} else {
        for(i = 2; i < numero; i++) {
            if(numero % i == 0) {
                console.log(numero, 'é divisivel por', i)
                parametro = false
            }
    }
    

}

if(parametro == true) {
    console.log(numero, 'é primo')
}


