const manutencoes = require("../data/manutencoes.data");

const listar = (req, res) =>{
    res.send(manutencoes).end();
};

const buscar = (req, res) => {
    const id=req.params.id;

    ma = "";

    manutencoes.forEach((manutencoes, index) =>{
        if(manutencoes.id===id){
            ma=manutencoes;
        }
    });

    if(ma==="") ma = "Não encontrado";

    res.send(ma).end();
};

const cadastrar = (req, res) => {
    const novoma = req.body;
    manutencoes.push(novoma);
    res.status(201).send("Cadastrado com sucesso.").end();
};

const deletar = (req, res) => {
    const id=req.params.id;

    var indice= -1;

    manutencoes.forEach((manutencoes, index) => {
        if(manutencoes.id===id){
            indice=index;
        }
    });

    if(indice=== -1){
        res.send("Não encontrado.");
    }
    else{
        manutencoes.splice(indice, 1);
        res.status(200).end();
    }
};

const atualizar = (req, res) => {
    const ma=req.body;

    var encontrei = false;

    manutencoes.forEach((manutencoes, index) => {
        if(manutencoes.id===ma.id){
            manutencoes[index]=ma;
            encontrei = true;
        }
    });

    if(encontrei=false){
        res.status(401).end();
    }
    else{
        res.status(201).end();
    }
};

const alterar = (req,res) => {
    const maUpdate = req.body;
    const id = req.params.id;

    var indice= -1;

    manutencoes.forEach((manutencoes, index) => {
        if(manutencoes.id===id){
            indice=index;
        }
    });

    if(indice===-1){
        res.status(401).end();
    }
    else{
        Object.keys(maUpdate).forEach((chave) => {
        manutencoes[indice][chave] = maUpdate[chave];
        });

        res.status(200).end();
    }
    
};

module.exports = {
    listar,
    buscar,
    cadastrar,
    deletar,
    atualizar,
    alterar
}