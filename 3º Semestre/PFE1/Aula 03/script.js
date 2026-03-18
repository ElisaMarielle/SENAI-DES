const filmeModal = document.getElementById('filmeModal');
var filmes = JSON.parse(localStorage.getItem('filmes')) || [];
renderizar();

function salvarLocal() {
    localStorage.setItem('filmes', JSON.stringify(filmes));
    window.location.reload();
}

function abrirModal() {
    filmeModal.style.display = "block";
}

function fecharModal() {
    filmeModal.style.display = "none";
}

const formFilme = document.getElementById('cadFilme');
formFilme.addEventListener('submit', e => {
    e.preventDefault();
    //pega as infos do input
    const obj = {
        titulo: formFilme.titulo.value,
        ano: formFilme.ano.value,
        genero: formFilme.genero.value,
        duracao: formFilme.duracao.value,
        preco: formFilme.preco.value,
        foto: formFilme.foto.value
    }
    filmes.push(obj);
    salvarLocal();
});

function renderizar() {
    const corpo = document.getElementById('filmes-content');
    corpo.innerHTML = "";
    filmes.forEach((c, i) => {
        corpo.innerHTML = `
        <div class="filmes">
               <div class="filmes-foto">
                <img src="${c.foto}">
            </div>
            <h3>${c.titulo}</h3>
            <p>${c.ano}</p>
            <p>${c.genero}</p>
            <p>${c.duracao}</p>
            <p>Preço: $${c.preco}</p>
            <button onclick="excluir(${i})">Excluir</button>
        </div>
        `;
    })
}

function excluir(indice) {
    filmes.splice(indice,1);
    salvarLocal();
}