let prompt = require('prompt-sync')();

var valor = prompt('Informe o valor que deseja sacar: ');

if (valor % 10 == 0) {
    console.log("Saque realizado com sucesso")
} else {
    console.log("Valor inválido. Digite um valor múltiplo de 10")
}
