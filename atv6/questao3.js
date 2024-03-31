var prompt = require('prompt-sync')();
var parametro = false;


    while(parametro == false) {
        var nome = prompt('Nome (maior que 3 letras): ')
        var idade = prompt('Idade (entre 0 e 150): ')
        var salario = prompt('Salario (maior que zero): ')
        var sexo = prompt('Sexo (f ou m): ')
        var estado_civil = prompt('Estado Civil (s, c, v ou d): ')
        

        if(nome.length <= 3) {
            parametro = false
        } else if (idade < 0 || idade > 150) {
            parametro = false
        } else if (salario <= 0) {
            parametro = false
        } else if (sexo != 'f' && sexo != 'm') {
            parametro = false
        } else if (estado_civil != 's' && estado_civil != 'c' && estado_civil != 'v' && estado_civil != 'd' ) {
            parametro = false
        } else {
            parametro = true
        }

    }


    
    
