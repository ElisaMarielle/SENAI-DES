const livros = require("../data/livros.data");

const listar = (req, res) => {
    res.send(livros).end();
};

const buscar = (req, res) => {
    const id=req.params.id;

    li = "";

    livros.forEach((livros, index) => {
        if(livros.id===id){
            li = livros;
        }
    });

    if(li==="") li = "Não encontrado";

    res.send(li).end();
};

const cadastrar = (req, res) => {
    const novol = req.body;
    livros.push(novol);
    res.status(201).send("Cadastrado com sucesso").end();
};

const deletar = (req, res) => {
    const id=req.params.id;

    var indice =-1;

    livros.forEach((livro, index) => {
        if(livro.id===id){
            indice=index;
        }
    });

    if(indice===-1){
        res.send("Não encontrado").end();
    }
    else{
        livros.splice(indice, 1);
        res.status(200).end();
    }
};

module.exports = {
    listar,
    buscar,
    cadastrar,
    deletar
}