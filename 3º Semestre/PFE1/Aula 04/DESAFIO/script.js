const filmeModal = document.getElementById('filmeModal');
const formFilme = document.getElementById('cadFilme'); // <-- FALTAVA ISSO

var filmes = JSON.parse(localStorage.getItem('filmes')) || [];
renderizar();

function salvarLocal() {
    localStorage.setItem('filmes', JSON.stringify(filmes));
    window.location.reload();
}

function abrirModal() {
    const modal = new bootstrap.Modal(filmeModal);
    modal.show();
}

formFilme.addEventListener('submit', e => {
    e.preventDefault();

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

    const modal = bootstrap.Modal.getInstance(filmeModal);
    modal.hide();
});

function renderizar() {
    const corpo = document.getElementById('filmes-content');
    corpo.innerHTML = "";

    filmes.forEach((c, i) => {
        corpo.innerHTML += `
        <div class="col">
            <div class="card shadow-sm h-100">
                <img src="${c.foto}" class="card-img-top">

                <div class="card-body text-center">
                    <h5 class="card-title">${c.titulo}</h5>
                    <p class="card-text">${c.ano}</p>
                    <p class="card-text">${c.genero}</p>
                    <p class="card-text">${c.duracao}</p>
                    <p class="card-text text-muted">R$ ${c.preco}</p>

                    <button class="btn btn-secondary w-100 mb-2" onclick="excluir(${i})">
                        Comprar
                    </button>

                    <button class="btn btn-danger w-100" onclick="excluir(${i})">
                        Excluir
                    </button>
                </div>
            </div>
        </div>
        `;
    });
}

function excluir(indice) {
    filmes.splice(indice,1);
    salvarLocal();
}