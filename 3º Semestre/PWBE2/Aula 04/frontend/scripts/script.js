const url = 'http://localhost:3000/evento';
const eventos = []

//----------------------------------------------------------//

carregarTudo();

async function carregarTudo(){
    try{
        const resposta = await fetch(url + '/listar');
        const dadosRes = await resposta.json();

        eventos.length = 0;
        eventos.push(...dadosRes);

        listarCards();

    }catch(e){
        console.error(e);
        alert('Problemas com a conexão da API');
    }
}

//----------------------------------------------------------//

function listarCards(){
    const container = document.querySelector('.listagem');
    container.innerHTML = '';
    localStorage.setItem('eventos', JSON.stringify(eventos));

    eventos.forEach(evento => {

        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <h2>${evento.titulo}</h2>
            <p><b>Data:</b> ${evento.data_evento}</p>
            <p>${evento.status}</p>
        `;
        card.onclick = () => {
            window.location.href = `det.htm?id=${evento.id}`;
        };
        container.appendChild(card);
    });
}