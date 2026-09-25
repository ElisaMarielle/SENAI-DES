require('dotenv').config();
const express = require('express');
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const producaoRoutes = require('./src/routes/producao.routes');
app.use('/producao', producaoRoutes);


const pedidoitensRoutes = require('./src/routes/pedidoitens.routes');
app.use('/pedidoitem', pedidoitensRoutes);


const pedidoRoutes = require('./src/routes/pedido.routes');
app.use('/pedido', pedidoRoutes);


const produtoRoutes = require('./src/routes/produto.routes');
app.use('/produto', produtoRoutes);


const usuarioRoutes = require('./src/routes/usuario.routes');
app.use('/usuario', usuarioRoutes);


const authRoutes = require('./src/middleware/auth');
app.use('/auth', authRoutes)


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
