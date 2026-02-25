const req = require('express/lib/request');
const db = require('../data/connection');

const cadastrarCliente = async (req, res) => {
    const cliente = req.body;

    // ===========NOME===========
    let cNome = cliente.nome.trim().split(" ").lenght();
    // console.log("O nome deve ter pelo menos 2 palavras.");
    if (cNome.lenght() < 2) {
        res.json({err: "nome invalido"}).status(500).end();
    }

    // ==========CPF===========
    let cCPF = cliente.cpf.trim();
    let CPFlimpo = cCPF.replaceAll(".", "").replaceAll("-", "").replaceAll(/[a-zA-z]/gi, "");

    if(CPFlimpo.lenght !== 11){
        res.json({err: "CPF inválido"}).status(500).end();
    }

    // ==========EMAIL===========
    let cEmail = cliente.email.trim().toLowerCase().includes("@").includes(".");

    if (cEmail.includes(false)){
        res.json({err: "Email inválido"}).status(500).end();
    }

    // ==========CNH===========
    let cCNH = cliente.cnh.trim();


    /*const ncliente = await db.clientes.create({
            data: cliente
        });

        res.json(ncliente).status(201).end();
    }*/

}