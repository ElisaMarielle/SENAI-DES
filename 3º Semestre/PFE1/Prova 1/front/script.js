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
        tarefa.ndata_inicio = tarefa.data_inicio.replaceAll("-","/")
        tarefa.ndata_fim = tarefa.data_fim.replaceAll("-","/")

        card.innerHTML = `
          <div class="left-side">
            <img src="${tarefa.img}">
          </div>
          <div class="right-side">
            <div class="tarefa-info">
              <h2>${tarefa.nome}</h3>
              <p style="color: #a9a9a9;">${tarefa.descricao}</p>
              <p><b>Início:</b> <span>${tarefa.ndata_inicio}</span></p>
              <p><b>Fim:</b> <span>${tarefa.ndata_fim}</span></p>
            </div>
            <div class="tarefa-btn">
              <button onclick="excluirTarefa(${tarefa.id})">Excluir</button>
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
        alert("Tarefa adicionada com sucesso.");
        carregarTarefas();
    })
    .catch(() => {
        alert("Erro ao cadastrar tarefa.");
    })
})


//----------------------------------------------------------//


function excluirTarefa(id){
    if(!confirm("Deseja excluir essa tarefa?"))return;
    fetch(`${url}/excluir/${id}`,{
        method: 'DELETE',
    })
    .then(()=>{
        alert("Tarefa excluída com sucesso.");
        carregarTarefas();
    })
    .catch(()=>alert("Erro ao excluir tarefa."));
}