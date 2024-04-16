var prompt = require('prompt-sync')();

function recursao(n) {
    if(n == 1) {
        return 1
    }
    return n + recursao(n - 1)
}

console.log(recursao(5))