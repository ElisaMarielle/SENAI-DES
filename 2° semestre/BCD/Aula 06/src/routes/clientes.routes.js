const express = require("express");
const router = express.Router();

const ClientesController = require ("../controllers/clientes.controllers");

router.get("/clientes", ClientesController.listar);
router.get("/cliente/:id", ClientesController.buscar);
router.post("/cliente", ClientesController.cadastrar);
router.delete("/clientes/:id", ClientesController.deletar);
router.put("/cliente", ClientesController.atualizar);
router.patch("/cliente/:id", ClientesController.alterar);

module.exports = router;