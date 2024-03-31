var prompt = require('prompt-sync')();

function ehPalindromo(palavra) {
    let palavraInversa = ""

    for (let index = palavra.length - 1; index >= 0; index--) {
        palavraInversa += palavra[index]
        
    }

    console.log(palavraInversa)
    

    return palavra == palavraInversa

}

var palavra = prompt('Informe uma palavra: ')
console.log(ehPalindromo(palavra))