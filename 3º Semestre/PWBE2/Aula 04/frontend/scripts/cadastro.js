const urlu = 'http://localhost:3000/usuarios';
const urle = 'http://localhost:3000/evento';


//----------------------------------------------------------//

const formu = document.querySelector('.formu');
if(formu){
    formu.addEventListener('submit', function(e){
    e.preventDefault();
    const novoUser = {
        nome: nome.value,
        email: email.value,
        senha: senha.value
    };
    

    fetch(urlu + '/cadastrar', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(novoUser)
    })
    .then(() => {
        alert("Usuário adicionado com sucesso.");
    })
    .catch(() => alert("Erro ao salvar usuário"));
    })
}

//----------------------------------------------------------//

const forme = document.querySelector('.forme');
if(forme){
    forme.addEventListener('submit', function(e){
    e.preventDefault();
    const novoEvento = {
        titulo: titulo.value,
        descricao: descricao.value,
        capacidade_maxima: capacidade_maxima.value ? Number (capacidade_maxima.value) : null,
        data_evento: data_evento.value,
        local: local.value
    };
    

    fetch(urle + '/cadastrar', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(novoEvento)
    })
    .then(() => {
        alert("Evento adicionado com sucesso.");
    })
    .catch(() => alert("Erro ao salvar evento"));
    })
}
