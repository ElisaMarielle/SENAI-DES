const clientes = require("../data/clientes.data");

const listar = (req, res) =>{
    res.send(clientes).end();
};

const buscar = (req, res) => {
    const id=req.params.id;

    cl = "";

    clientes.forEach((clientes, index) =>{
        if(clientes.id===id){
            cl=clientes;
        }
    });

    if(cl==="") cl = "Não encontrado";

    res.send(cl).end();
};

const cadastrar = (req, res) => {
    const novocl = req.body;
    clientes.push(novocl);
    res.status(201).send("Cadastrado com sucesso.").end();
};

const deletar = (req, res) => {
    const id=req.params.id;

    var indice= -1;

    clientes.forEach((clientes, index) => {
        if(clientes.id===id){
            indice=index;
        }
    });

    if(indice=== -1){
        res.send("Não encontrado.");
    }
    else{
        clientes.splice(indice, 1);
        res.status(200).end();
    }
};

const atualizar = (req, res) => {
    const cl=req.body;

    var encontrei = false;

    clientes.forEach((clientes, index) => {
        if(clientes.id===cl.id){
            clientes[index]=cl;
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
    const clUpdate = req.body;
    const id = req.params.id;

    var indice= -1;

    clientes.forEach((clientes, index) => {
        if(clientes.id===id){
            indice=index;
        }
    });

    if(indice===-1){
        res.status(401).end();
    }
    else{
        Object.keys(clUpdate).forEach((chave) => {
        clientes[indice][chave] = clUpdate[chave];
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