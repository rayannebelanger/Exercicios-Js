var prompt = require('prompt-sync')();

function stringCaixaAlta(string) {
    return string.toUpperCase();
}

var string = prompt('Informe uma string: ')
console.log(stringCaixaAlta(string))