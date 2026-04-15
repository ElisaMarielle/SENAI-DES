const prisma = require("../data/prisma");
const {limiteParticipantes, verificarDuplicidade} = require("./limite.controller");

const cadastrar = async (req, res) => {
    try {
        const data = req.body;
        await verificarDuplicidade(data.usuariosId, data.eventoId)
        let status = await limiteParticipantes(data.usuariosId, data.eventoId);
        data.status = status;
        const inscricao = await prisma.inscricoes.create({
            data
        });
        res.json(inscricao).status(201).end();
    } catch (error) {
        res.json({error : error.message}).status(500).end();
    }
    
};

const listar = async (req, res) => {
    const lista = await prisma.inscricoes.findMany();

    res.json(lista).status(200).end();
};

const buscar = async (req, res) => {
    const { id } = req.params;
    
    const item = await prisma.inscricoes.findUnique({
        where: { id : Number(id) }
    });

    res.json(item).status(200).end();
};

const atualizar = async (req, res) => {
    const { id } = req.params;
    const dados = req.body;
    
    const item = await prisma.inscricoes.update({
        where: { id : Number(id) },
        data: dados
    });

    res.json(item).status(200).end();
};

const excluir = async (req, res) => {
    const { id } = req.params;
    
    const item = await prisma.inscricoes.delete({
        where: { id : Number(id) }
    });

    res.json(item).status(200).end();
};

module.exports = {
    cadastrar,
    listar,
    buscar,
    atualizar,
    excluir
}
