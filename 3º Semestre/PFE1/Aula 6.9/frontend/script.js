const url = 'http://localhost:3000/produtos';
const albuns = [];
let albumAtual = null;

//----------------------------------------------------------//

const search = document.getElementById('searching');
const modal = document.getElementById('modal');

function togglePesquisa() {
  if (search.classList.contains('off')) {
    search.classList.remove('off');
    search.classList.add('on');
  } else {
    search.classList.remove('on');
    search.classList.add('off');
  }
}

function abrir(){
    modal.style.display = "flex"
    modal.style.alignItems = "center"
    modal.style.justifyContent = "center"
}
function fechar(){
    modal.style.display = "none"
}

//----------------------------------------------------------//


carregarProdutos();

function carregarProdutos(){
    fetch(url + '/listar')
    .then(response => response.json())
    .then(data =>{
        albuns.length = 0;
        albuns.push(...data);
        listarCards();
    })
    .catch(e =>alert('Problemas com a conexão da API'));
}


//----------------------------------------------------------//


function listarCards(){
    const container = document.getElementById('listagem');
    container.innerHTML = '';

    albuns.forEach(album =>{
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <div class="album-img">
                <img src="${album.img_album}">
            </div>
            <div class="album-info">
                <h2>${album.nome}</h3>
                <p>Preço: ${album.preco}</p>
            </div>
        `;
        card.onclick = () => abrirAlbum(album);
        container.appendChild(card);
    });
}


//----------------------------------------------------------//


function abrirAlbum(album){
    albumAtual = album;
    tituloAlbum.innerHTML = album.nome;
    nomeEdit.value = album.nome;
    imgAlbum.src = album.img_album;
    imgEdit.value = album.img_album;
    musicsEdit.value = album.music_nomes;
    genreEdit.value = album.genero;
    dataEdit.value = album.lancamento;
    precoEdit.value = album.preco;
    detalhes.classList.remove('oculto');
}

imgEdit.addEventListener("input", ()=>{
    imgAlbum.src = imgEdit.value;
})


//----------------------------------------------------------//


document.querySelector('#form').addEventListener('submit', function(e){
    e.preventDefault();
    const novoAlbum = {
        nome: nome.value,
        img_album: img.value,
        music_nomes: musics.value,
        genero: genre.value,
        lancamento: data.value,
        preco: preco.value ? Number(preco.value) : null
    };

    fetch(url + '/cadastrar', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(novoAlbum)
    })
    .then(res => {
        if (!res.ok) {
            throw new Error('Erro na API');
        }
    })
    .then(() => {
        alert("Álbum adicionado com sucesso.");
        cadastro.classList.add('oculto');
        carregarProdutos();
    })
    .catch(() => alert("Erro ao salvar álbum"));
})


//----------------------------------------------------------//


function salvarEdicao(){
    const albumEditado = {
        nome: nomeEdit.value,
        img_album: imgEdit.value,
        music_nomes: musicsEdit.value,
        genero: genreEdit.value,
        lancamento: dataEdit.value,
        preco: precoEdit.value ? Number(precoEdit.value): null
    };

    fetch(url + '/atualizar/' + albumAtual.id,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(albumEditado)
    })

    .then(res=>{
        if(!res.ok) throw new Error();
        return res.json();
    })

    .then(()=> {
        alert("Álbum atualizado com sucesso.");
        detalhes.classList.add('oculto');
        carregarProdutos();
    })
    .catch(()=>alert("Erro ao editar álbum"));
}


//----------------------------------------------------------//


function excluirAlbumAtual(){
    if(!confirm("Deseja excluir esse álbum?"))return;
    fetch(url + '/excluir/' + albumAtual.id,{
        method: 'DELETE',
    })
    .then(()=>{
        alert("Álbum excluído com sucesso.");
        detalhes.classList.add('oculto');
        carregarProdutos();
    })
    .catch(()=>alert("Erro ao excluir álbum."));
}