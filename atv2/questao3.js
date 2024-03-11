let prompt = require('prompt-sync')();

var dataNascimento = prompt('Informe a sua data de nascimento (dd/mm/yyyy): ');
dataNascimento = dataNascimento.split("/")

// dataNascimento[0] = dia / dataNascimento[1] = mes / dataNascimento[2] = ano

var dataAtual = new Date().toLocaleDateString('pt-BR').split("/")

// Verificar pelo ano
if (dataAtual[2] - dataNascimento[2] >= 18) {

    // Se tiver 18 pelo calculo do ano, verificar se já completou 18 ou não
    if (dataAtual[2] - dataNascimento[2] == 18) {

        // Verificar se completou aniversário já nesse ano pelo mes
        if (dataNascimento[1] < dataAtual[1]) {

            // Verificar se completou aniversário já nesse ano pelo dia do mes
            if (dataNascimento[0] < dataAtual[0]) {
                console.log("Você é de maior")
            } 
            
            else {
                console.log("Você ainda não é de maior")
            }
        } 
        else {
            console.log("Você ainda não é de maior")
        }
    } 
    
    else if(dataAtual[2] - dataNascimento[2] < 18) {
        console.log("Você ainda não é de maior")

    } 
    
    else if (dataAtual[2] - dataNascimento[2] > 18) {
        console.log("Você é de maior")
    }
    
} 

else {
    console.log("Você ainda não é de maior")
}
