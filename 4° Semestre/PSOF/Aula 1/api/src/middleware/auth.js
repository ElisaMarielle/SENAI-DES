const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const prisma = require('../data/prisma');
const jwt = require('jsonwebtoken');

router.post('/login', async (req, res) => {
    const { email, senha } = req.body;

    try {
        // Procura o usuário pelo email
        const usuario = await prisma.usuario.findUnique({
            where: {
                email: email
            }
        });

        // Se não encontrou
        if (!usuario) {
            return res.status(401).json({
                mensagem: 'Email ou senha inválidos'
            });
        }

        // Se a senha estiver errada
        if (!senha) {
            return res.status(401).json({
                mensagem: 'Email ou senha inválidos'
            });
        }

        const token = jwt.sign(
            {
                id: usuario.id,
                email: usuario.email,
                tipo: usuario.tipo
            },
            'key',
            {
                expiresIn: '1h'
            }
        );

        res.json({
            token: token
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            mensagem: 'Erro interno do servidor'
        });
    }
});

module.exports = router;
