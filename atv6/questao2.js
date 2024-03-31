var prompt = require('prompt-sync')();

var usuario = prompt('Informe o nome do usuário: ')
var senha = prompt('Informe uma senha: ')

while(usuario == senha) {
    console.log('Erro! Usuário e senha não podem ser iguais!')
    usuario = prompt('Informe o nome do usuário: ')
    senha = prompt('Informe uma senha: ')
}