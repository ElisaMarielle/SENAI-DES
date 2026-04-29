const modal = document.getElementById('modal');

function Cadastrar(){
    modal.style.display = "flex";
}

function Fechar(){
    modal.style.display = "none";
}


function Listar(){
    const container = document.getElementById('listagem');
    container.innerHTML = '';

    eventos.forEach(evento =>{
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
        <h3>${evento.titulo}</h3>
        <p>${evento.descricao}</p>
        <p>${evento.data_evento}</p>
        <p>${evento.local}</p>
        <p>${evento.capacidade_maxima}</p>
        `;
        container.appendChild(card);
    });
}