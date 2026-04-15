const key = "fc1675d89085cb859f1dd439c2ed4d7a";

async function buscarCidade(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json());

    colocarDadosTela(dados)
}

function colocarDadosTela(dados){
    document.querySelector('.cidade').innerHTML = "Tempo em " + dados.name;
    document.querySelector('.tempo').innerHTML = Math.floor(dados.main.temp) + "°C";
    document.querySelector('.texto-previsao').innerHTML = dados.weather[0].description;
    document.querySelector('.umidade').innerHTML = dados.main.humidity + "%";
    document.querySelector('.img-previsao').src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png";
}

function cliqueBotao(){
    const cidade = document.querySelector('.input-cidade').value;
    buscarCidade(cidade);
}