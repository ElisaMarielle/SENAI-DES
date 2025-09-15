const express = require("express");
const router = express.Router();

const ContratosController = require ("../controllers/contratos.controllers");

router.get("/contratos", ContratosController.listar);
router.get("/contrato/:id", ContratosController.buscar);
router.post("/contrato", ContratosController.cadastrar);
router.delete("/contratos/:id", ContratosController.deletar);
router.put("/contrato", ContratosController.atualizar);
router.patch("/contrato/:id", ContratosController.alterar);

module.exports = router;