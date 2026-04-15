const db = require('../data/prisma');

const limiteParticipantes = async (usuarioId, eventoId) => {
    const evento = await db.evento.findUnique({
        where: {id: eventoId},
        include: {
            inscricoes: true
        }
    });
    
    const numeroParticipantes = evento.inscricoes.filter(inscricoes => inscricoes.status == "CONFIRMADA").length

    if(numeroParticipantes == evento.capacidade_maxima) {
        return "LISTA_ESPERA";
    }else{
        return "CONFIRMADA";
    }
};

const verificarDuplicidade = async (usuarioId, eventoId) => {
    const cadastro = await db.inscricoes.findMany({
        where: {
            eventoId: eventoId,
            usuariosId: usuarioId //usuarioId (ao invés de usuarios) vem do parâmetro passado para a função
        }
    });

    if(cadastro.length > 0) throw Error("Usuário já cadastrado.");
}

module.exports = {
    limiteParticipantes,
    verificarDuplicidade
}