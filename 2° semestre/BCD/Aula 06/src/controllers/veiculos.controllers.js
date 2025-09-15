const veiculos = require("../data/veiculos.data");

const listar = (req, res) =>{
    res.send(veiculos).end();
};

const buscar = (req, res) => {
    const id=req.params.id;

    ve = "";

    veiculos.forEach((veiculos, index) =>{
        if(veiculos.id===id){
            ve=veiculos;
        }
    });

    if(ve==="") ve = "Não encontrado";

    res.send(ve).end();
};

const cadastrar = (req, res) => {
    const novove = req.body;
    veiculos.push(novove);
    res.status(201).send("Cadastrado com sucesso.").end();
};

const deletar = (req, res) => {
    const id=req.params.id;

    var indice= -1;

    veiculos.forEach((veiculos, index) => {
        if(veiculos.id===id){
            indice=index;
        }
    });

    if(indice=== -1){
        res.send("Não encontrado.");
    }
    else{
        veiculos.splice(indice, 1);
        res.status(200).end();
    }
};

const atualizar = (req, res) => {
    const ve=req.body;

    var encontrei = false;

    veiculos.forEach((veiculos, index) => {
        if(veiculos.id===ve.id){
            veiculos[index]=ve;
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
    const veUpdate = req.body;
    const id = req.params.id;

    var indice= -1;

    veiculos.forEach((veiculos, index) => {
        if(veiculos.id===id){
            indice=index;
        }
    });

    if(indice===-1){
        res.status(401).end();
    }
    else{
        Object.keys(veUpdate).forEach((chave) => {
        veiculos[indice][chave] = veUpdate[chave];
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