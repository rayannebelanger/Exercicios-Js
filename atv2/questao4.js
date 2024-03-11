let prompt = require('prompt-sync')();

var lado1 = prompt('Informe o lado 1 do triangulo: ');
var lado2 = prompt('Informe o lado 2 do triangulo: ');
var lado3 = prompt('Informe o lado 3 do triangulo: ');

if (lado1 + lado2 > lado3) {
    // triangulo equilatero
    if (lado1 == lado2 && lado2 == lado3) {
        console.log("Triângulo equilátero")
    }

    // triangulo isósceles
    else if (lado1 == lado2 || lado2 == lado3 || lado3 == lado1) {
        console.log("Triângulo isósceles")

    } 

    // triangulo isósceles
    else if (lado1 == lado2 || lado2 == lado3 || lado3 == lado1) {
        console.log("Triângulo isósceles")
    }

    // triangulo escaleno
    else if (lado1 != lado2 && lado2 != lado3 && lado3 != lado1) {
        console.log("Triângulo escaleno")
    }

} else {
    console.log("Triângulo inválido")
}
