const prisma = require("../data/prisma");
const { limiteParticipantes } = require("../services/inscricoes.services");

const cadastrar = async (req, res) => {
    const data = req.body;

    /*const item = await prisma.inscricoes.create({
        data
    });*/

    limiteParticipantes(data.usuarioId, data.eventoId);

    res.json({}).status(201).end();
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
