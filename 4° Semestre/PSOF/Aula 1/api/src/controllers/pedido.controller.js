const prisma = require("../data/prisma");

const cadastrar = async (req, res) => {
    const { usuario_id, itens } = req.body;

    const pedido = await prisma.pedido.create({
        data: {
            usuario_id,

            itens: {
                create: itens
            }
        }
    });

    for (const item of itens) {
        await prisma.produto.update({
            where: {
                id: item.produto_id
            },
            data: {
                quant_estoque: {
                    decrement: item.quantidade
                }
            }
        });
    }

    res.status(201).json(pedido);
};

const listar = async (req, res) => {
    const lista = await prisma.pedido.findMany();

    res.json(lista).status(200).end();
};

const buscar = async (req, res) => {
    const { id } = req.params;
    
    const item = await prisma.pedido.findUnique({
        where: { id : Number(id) }
    });

    res.json(item).status(200).end();
};

const atualizar = async (req, res) => {
    const { id } = req.params;
    const dados = req.body;
    
    const item = await prisma.pedido.update({
        where: { id : Number(id) },
        data: dados
    });

    res.json(item).status(200).end();
};

const excluir = async (req, res) => {
    const { id } = req.params;
    
    const item = await prisma.pedido.delete({
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
