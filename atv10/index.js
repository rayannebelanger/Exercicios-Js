function consultaEndereco() {
    let cep = document.querySelector('#cep').value;
    
    if(cep.length !== 8) {
        alert('CEP inválido!');
        return;
    }
    
    let url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url).then(function(response){
        response.json().then(mostrarEndereco)
        });

    function mostrarEndereco(dados) {
        let resultado = document.querySelector('#resultado');
        if(dados.erro) {
            resultado.innerHTML = "Não foi possível localizar endereço!";
        } else {
            resultado.innerHTML = `<p>Endereço: ${dados.logradouro}</p>
            <p>Complemento: ${dados.complemento}</p>
            <p>Bairro: ${dados.bairro}</p>
            <p>Cidade: ${dados.localidade} - ${dados.uf}</p>`
        }
        
    }
}

function consultaClima() {
    let clima = document.querySelector('#clima').value;
    // http://api.openweathermap.org/data/2.5/weather?q=Recife&appid=300e6d140856655683c1d887d82ebe2a&units=metric&lang=pt
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${clima}&appid=300e6d140856655683c1d887d82ebe2a&anits=metric&lang=pt`;

    fetch(url).then(function(response){
        response.json().then(mostrarClima)
    });

    function mostrarClima(dados) {
        debugger // dados.weather[0].description
        clima = dados.weather[0].description
        temperatura = dados.main.temp

        let resultadoclima = document.querySelector('#resultadoclima');
        if(dados.erro) {
            resultadoclima.innerHTML = "Não foi possível informar o clima!";
        } else {
            resultadoclima.innerHTML = `<p>Clima: ${clima}</p> <p>Temperatura: ${temperatura}</p>`
        }
    }



}