const url = "https://receitasapi-b-2025.vercel.app"
const receitas = []

getReceitas()

function getReceitas() {
    fetch(`${url}/receitas`)
    .then(response => response.json())
    .then(data => {
        data.forEach(receita => {
            receitas.push(receita)
        })
        renderReceitas()
    })
}

function renderReceitas() {
    const main = document.querySelector("main")
    receitas.forEach(r => {
        const card = document.createElement("div")
        card.classList.add("card")
        card.innerHTML = `
        <img src="${r.img}" alt="${r.nome}">
        <h2>${r.nome}</h2>
        <p>${r.ingredientes}</p>
        <p>${r.modoFazer}</p>`

        main.appendChild(card)
    })
}

const modal = document.querySelector('.modal');

function maisReceita(){
    modal.style.display = "block";
}

function fechar(){
    modal.style.display = "none";
}

const form = document.getElementById('form');
form.addEventListener('submit', e => {
    e.preventDefault();
    const rec = {
        nome: form.nome.value,
        ingredientes: form.ingredientes.value,
        modoFazer: form.modoFazer.value,
        img: form.img.value,
        tipo: form.tipo.value,
        custoAproximado: form.custoAproximado.value
    }

    fetch(url + '/receitas', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(rec)
    })
});