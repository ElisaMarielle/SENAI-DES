const usuarios = require("../data/usuarios.data");

//Define fução utiliada na rota
//req -> request (requisição)
//res -> response (resposta)
const listar = (req, res) => {
    res.send(usuarios).end();
};

const buscar = (req, res) => {
    const matricula = req.params.matricula;

    var user = "";

    usuarios.forEach((usuarios, index) => {
        if(usuarios.matricula === matricula){
            user = usuarios;
        }
    });

    if(user==="") user = "Não encontrado";

    res.send(user).end();
};

const cadastrar = (req, res) => {
    const data = req.body;
    usuarios.push(data);
    res.status(201).send("Cadastrado com sucesso").end();
};

const apagar = (req, res) => {
    const matricula = req.params.matricula;

    var indice= -1;

    usuarios.forEach((usuario, index) => {
        if(usuario.matricula===matricula){
            indice=index;
        }
    });

    if(indice=== -1){
        res.send("Não encontrado").end();
    }
    else{
        usuarios.splice(indice, 1);
        res.status(200).end();
    }
}

const atualizar = (req, res) => {
    const user=req.body;

    var encontrei = false;

    usuarios.forEach((usuario, index) => {
        if(usuario.matricula===user.matricula){
            usuarios[index]=user;
            encontrei = true;
        }
    });

    if(encontrei===false){
        res.status(401).end();
    }
    else{
        res.status(201).end();
    }
};

const alterar = (req,res) => {
    const userUpdate = req.body;
    const matricula = req.params.matricula;

    var indice= -1;

    //index: posição do obj do vetor
    usuarios.forEach((usuario, index) => {
        if(usuario.matricula===matricula){
            indice=index;
        }
    });

    if(indice===-1){
        res.status(401).end();
    }
    else{
        Object.keys(userUpdate).forEach((chave) => {
        usuarios[indice][chave] = userUpdate[chave];
        });

        res.status(200).end();
    }
    
};

module.exports = {
    listar,
    buscar,
    cadastrar,
    apagar,
    atualizar,
    alterar
}