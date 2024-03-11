let prompt = require('prompt-sync')();
let numero_secreto = 25;

var numero = prompt('Advinhe o numero: ');

while(numero != numero_secreto) {
    
    if(numero < numero_secreto) {
        console.log('O numero secreto é maior');
        
    } else if(numero > numero_secreto) {
        console.log('O numero secreto é menor');
    }

    numero = prompt('Advinhe o numero: ');
        
}

console.log('O número é igual ao número secreto!'); 
