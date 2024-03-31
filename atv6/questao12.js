var prompt = require('prompt-sync')();

var numero = prompt('Informe um número entre 1 e 10: ')

while(numero < 1 || numero > 10) {
    numero = prompt('Informe um número APENAS entre 1 e 10: ')  
}

console.log('Tabuada de ', numero)

for(let i = 1; i <= 10; i++) {
    resultado = numero * i
    console.log(numero," x ", i, " = ", resultado)
}