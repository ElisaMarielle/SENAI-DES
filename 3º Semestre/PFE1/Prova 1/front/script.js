const url = 'http://localhost:3000/tarefas';
const tarefas = [];
let tarefaAtual = null;

//----------------------------------------------------------//


carregarTarefas();

function carregarTarefas(){
    fetch(url + '/listar')
    .then(response => response.json())
    .then(data =>{
        tarefas.length = 0;
        tarefas.push(...data);
        listarCards();
    })
}


//----------------------------------------------------------//


function listarCards(){
    const container = document.getElementById('lista');
    container.innerHTML = "";

    tarefas.forEach(tarefa =>{
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
          <div class="left-side">
            <img src="${tarefa.img}">
          </div>
          <div class="right-side">
            <div class="tarefa-info">
              <h2>${tarefa.nome}</h3>
              <p>${tarefa.descricao}</p>
              <p>Início: ${tarefa.data_inicio}</p>
              <p>Fim: ${tarefa.data_fim}</p>
            </div>
            <div class="tarefa-btn">
              <button onclick="excluirTarefa()">Excluir</button>
            </div>
          </div>
        `;
        container.appendChild(card);
    });
}


//----------------------------------------------------------//

const modal = document.getElementById('modal')
function abrir(){
  modal.style.display = "flex"
}
function fechar(){
  modal.style.display = "none"
}

//----------------------------------------------------------//


document.querySelector('#form').addEventListener('submit', function(e){
    e.preventDefault();
    const novaTarefa = {
        nome: nome.value,
        descricao: descricao.value,
        data_inicio: data_inicio.value,
        data_fim: data_fim.value,
        img: img.value
      };
    
    fetch(url + '/cadastrar', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(novaTarefa)
    })
    .then(res => {
        if (!res.ok) {
            throw new Error('Erro na API');
        }
    })
    .then(() => {
        alert("tarefa adicionado com sucesso.");
        cadastro.classList.add('oculto');
        carregarProdutos();
    })
    .catch(() => alert("Erro ao salvar tarefa"));
})


//----------------------------------------------------------//


function excluirTarefa(){
    if(!confirm("Deseja excluir essa tarefa?"))return;
    fetch(url + '/excluir/' + tarefaAtual.id,{
        method: 'DELETE',
    })
    .then(()=>{
        alert("tarefa excluída com sucesso.");
        detalhes.classList.add('oculto');
        carregarProdutos();
    })
    .catch(()=>alert("Erro ao excluir tarefa."));
}