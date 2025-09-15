const contratos = require("../data/contratos.data");

const listar = (req, res) =>{
    res.send(contratos).end();
};

const buscar = (req, res) => {
    const id=req.params.id;

    co = "";

    contratos.forEach((contratos, index) =>{
        if(contratos.id===id){
            co=contratos;
        }
    });

    if(co==="") co = "Não encontrado";

    res.send(co).end();
};

const cadastrar = (req, res) => {
    const novoco = req.body;
    contratos.push(novoco);
    res.status(201).send("Cadastrado com sucesso.").end();
};

const deletar = (req, res) => {
    const id=req.params.id;

    var indice= -1;

    contratos.forEach((contratos, index) => {
        if(contratos.id===id){
            indice=index;
        }
    });

    if(indice=== -1){
        res.send("Não encontrado.");
    }
    else{
        contratos.splice(indice, 1);
        res.status(200).end();
    }
};

const atualizar = (req, res) => {
    const co=req.body;

    var encontrei = false;

    contratos.forEach((contratos, index) => {
        if(contratos.id===co.id){
            contratos[index]=co;
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
    const coUpdate = req.body;
    const id = req.params.id;

    var indice= -1;

    contratos.forEach((contratos, index) => {
        if(contratos.id===id){
            indice=index;
        }
    });

    if(indice===-1){
        res.status(401).end();
    }
    else{
        Object.keys(coUpdate).forEach((chave) => {
        contratos[indice][chave] = coUpdate[chave];
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