let prompt = require('prompt-sync')();
let peso = prompt('Informe seu peso: ');
let altura = prompt('Informe a sua altura: ');

const imc = peso / (altura * altura);

if(imc < 18.8) {
    console.log('Abaixo do peso');
} else if((imc >= 18.5) && (imc <= 24.9)){
    console.log('Peso normal');
} else if((imc >= 25) && (imc <= 29.9)){
    console.log('Excesso de peso');
} else if((imc >= 30) && (imc <= 34.9)){
    console.log('Obesidade grau I');
} else if((imc >= 35) && (imc <= 39.9)) {
    console.log('Obesidade grau II');
} else {
    console.log('Obesidade grau III');
}