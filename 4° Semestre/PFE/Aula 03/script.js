function cadastrar(){
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;

    let usuario = {
        'email':email,
        'senha':senha
    }

    let lista = localStorage.getItem('usuarios')
    if(lista == null){
        lista = []
    }else{
        lista = JSON.parse(lista);
    }

    lista.push(usuario);
    
    localStorage.setItem('usuarios', JSON.stringify(lista));
}

function limparCadastro(){
    localStorage.removeItem('usuarios')
}

function recuperarCadastro(){
    let lista = localStorage.getItem('usuarios');

    lista = JSON.parse(lista);

    let tbody = document.querySelector('tbody')

    tbody.innerHTML = "";

    lista.forEach((usuario, indice) => {
        let linha = document.createElement('tr')
        let tdEmail = document.createElement('td')
        let tdSenha = document.createElement('td')
        let tdExcluir = document.createElement('td')
        let btExcluir = document.createElement('button')

        btExcluir.innerHTML = "Excluir"
        btExcluir.addEventListener('click', () => {excluirUsuario(indice)})
        tdExcluir.appendChild(btExcluir)

        tdEmail.innerHTML = usuario.email
        tdSenha.innerHTML = usuario.senha
        linha.appendChild(tdEmail)
        linha.appendChild(tdSenha)
        linha.appendChild(tdExcluir)

        tbody.appendChild(linha)
    });
    
}

function excluirUsuario(indice){
    let lista = localStorage.getItem('usuarios')

    lista = JSON.parse(lista)
    lista.splice(indice, 1)

    localStorage.setItem('usuarios', JSON.stringify(lista));
    recuperarCadastro()
}