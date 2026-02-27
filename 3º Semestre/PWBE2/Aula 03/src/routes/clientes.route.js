const clientesController = require('../controllers/clientes.controller');
const express = require('express');
const clRoutes = express();

clRoutes.post('/cliente', clientesController.cadastrarCliente);
clRoutes.get('/clientes', clientesController.listarClientes);
clRoutes.get('/cliente/:id', clientesController.buscarCliente);
clRoutes.delete('/cliente/:id', clientesController.apagarClientes);

module.exports = clRoutes;