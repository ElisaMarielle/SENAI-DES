const evento = JSON.parse(localStorage.getItem('eventoSelecionado'));

/*const titulo = document.querySelector('.title');
const descricao = document.querySelector('.desc');
const local = document.querySelector('.local');
const data = document.querySelector('.date');
const capacidade = document.querySelector('.capacity');
const status = document.querySelector('.status');

titulo.innerHTML = evento.titulo;
descricao.innerHTML = evento.descricao;
local.innerHTML = evento.local;
data.innerHTML = evento.data_evento;
capacidade.innerHTML = evento.capacidade;
status.innerHTML = evento.status;*/

document.querySelector('.title').innerHTML = evento.titulo;

document.querySelector('.desc').innerHTML = evento.descricao;

document.querySelector('.local').innerHTML = evento.local;

document.querySelector('.date').innerHTML = evento.data_evento;

document.querySelector('.capacity').innerHTML = evento.capacidade;

document.querySelector('.status').innerHTML = evento.status;