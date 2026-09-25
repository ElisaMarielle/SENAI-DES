const url = 'http://localhost:3000/usuario/'


//=====================================================================//


document.getElementById("bt-cadastrar").addEventListener("click", (event) => {
    event.preventDefault();

    const novoUsuario = {
        nome: nome.value,
        email: email.value,
        senha: senha.value,
        tipo: tipo.value
    };

    console.log(novoUsuario);

    fetch(url + 'cadastrar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(novoUsuario)
    })
        .then(res => {
            if (!res.ok) {
                throw new Error('Erro na API');
            }
        })
        .then(() => {
            alert("Usuário cadastrado com sucesso.");
            window.location.href = "login.htm";
        })
        .catch(() => alert("Erro ao cadastrar"));
});



function decodeJWT(token) {
    const payload = token.split('.')[1];

    const decodedPayload = atob(payload);

    return JSON.parse(decodedPayload);
}


function login() {
    const email = document.querySelector("#email").value;
    const senha = document.querySelector("#senha").value;

    fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: email,
            senha: senha
        })
    })
    .then(resp => {
        if (!resp.ok) {
            throw new Error("Email ou senha inválidos");
        }

        return resp.json();
    })
    .then(data => {
        const dados = decodeJWT(data.token);

        localStorage.setItem("token", data.token);
        localStorage.setItem("dados", JSON.stringify(dados));
        window.location.href = "inicio.htm";
    })
    .catch(err => {
        console.log(err);
        alert(err.message);
    });
}


