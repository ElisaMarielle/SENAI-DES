const req = require('express/lib/request');
const db = require('../data/connection');

const cadastrarCliente = async (req, res) => {
    const cliente = req.body;

    // ===========NOME===========
    //trim: separa as palavras
    let cNome = cliente.nome.trim().split(" ").length;
    // console.log("O nome deve ter pelo menos 2 palavras.");
    if (cNome < 2) {
        res.status(500).json({err: "nome invalido"}).end();
    }

    // ==========CPF===========
    let cCPF = cliente.cpf.trim();
    //retira - e . e letras
    let CPFlimpo = cCPF.replace([/\D/g], "").replaceAll("-", "").replaceAll(".", "");

    if(CPFlimpo.length > 11 || CPFlimpo < 11){
        res.status(500).json({err: "CPF inválido"}).end();
    }

    // ==========EMAIL===========
    let cEmail = cliente.email.trim().toLowerCase();

    if (!cEmail.includes('@') || !cEmail.includes('.')){
        res.json({err: "Email inválido"}).status(500).end();
    }

    // // ==========CNH===========
    // let cCNH = cliente.cnh.trim();
    // //retira letras
    // let CNHlimpo = cCNH.replaceAll([a-zA-Z], "");
    // let array = CNHlimpo.split("");

    // //compara se é diferente de 11 caracteres
    // if (array.length !== 11){
    //     res.json({err: "CNH inválida"}).status(500).end();
    // }

    else{
        const ncliente = await db.clientes.create({
            data: cliente
        });
        res.json(ncliente).status(201).end();
    }
}
    
    

//================================================================================//

const listarClientes = async (req, res) => {
    const clientes = await db.clientes.findMany();
    res.json(clientes).status(200).end();
}

//================================================================================//

const buscarCliente = async (req, res) => {
    const {id} = req.params;

    const cliente = await db.clientes.findUnique({
        where: {id: Number(id)}
    });

    res.json(cliente).status(200).end();
}

//================================================================================//

const apagarClientes = async (req, res) => {
    const {id} = req.params;

    const cliente = await db.clientes.delete({
        where: { id: Number(id) }
    });

    res.json(cliente).status(200).end();
}

module.exports = {
    cadastrarCliente,
    listarClientes,
    buscarCliente,
    apagarClientes
}