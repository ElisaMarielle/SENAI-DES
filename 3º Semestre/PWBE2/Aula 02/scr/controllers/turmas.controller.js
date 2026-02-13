const req = require('express/lib/request');
const prisma = require('../data/connection');

const cadastrarTurma = async (req, res) => {
    const turma = req.body;

    const nturma = await prisma.turmas.create({
        data: turma
    });

    res.json(nturma).status(201).end();
}

const listarTurmas = async (req, res) => {
    const turmas = await prisma.turmas.findMany();

    res.json(turmas).status(200).end();
}

const buscarTurmas = async (req, res) => {
    const {id} = req.params;

    const turma = await prisma.turmas.findUnique({
        where: {id},
        include: {
            alunos: true
        }
    });

    res.json(turma).status(200).end();
}

const apagarTurma = async (req, res) => {
    const {id} = req.params;

    const turma = await prisma.turmas.delete({
        where: {id}
    });

    res.json(turma).status(200).end();
}

module.exports = {
    cadastrarTurma
}