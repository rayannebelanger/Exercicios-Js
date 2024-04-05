var prompt = require('prompt-sync')() //ERARRADODOOOOOOOOOOOOOOOOOOOOOO

var numero
var parametro = true


while(parametro == true) {
    numero = Number(prompt('Fatorial inteiro, positivo, menor que 16: '))

    if(numero > 16 || numero < 0) {
        console.log('ERRADO! Informe fatorial inteiro, positivo, menor que 16! ')
        parametro = false
    } else {
        var total = 1
        for(i = numero; i > 0; i--) {
            total *= i
        }
        
        console.log(numero, '! = ', total) 
    }

}




