function fibonacci() {
    let fib = [0, 1];

    for (let i = 2; ; i++) {
        let proximo = fib[i - 1] + fib[i - 2];
        if (proximo > 500) {
            break;
        }
        fib.push(proximo);
    }

    return fib;
}

const serieFibonacci = fibonacci();

console.log("Série de Fibonacci até que o valor seja maior que 500:", serieFibonacci);
