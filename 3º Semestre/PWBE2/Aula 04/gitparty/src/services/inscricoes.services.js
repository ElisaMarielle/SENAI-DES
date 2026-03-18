const prisma = require('../data/prisma');

const limiteParticipantes = async (usuarioId, eventoId) => {
    const evento = await prisma.evento.findUnique({
        where: {id : eventoId},
        include: {
            inscricoes: true
        }
    });

    const numeroParticipantes = evento.inscricoes.filter(inscricao => inscricao.status == "CONFIRMADA").length;

    console.log(numeroParticipantes);
};

module.exports = {
    limiteParticipantes
}