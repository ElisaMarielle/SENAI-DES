const express = require("express");
const router = express.Router();

const VeiculosController = require ("../controllers/veiculos.controllers");

router.get("/veiculos", VeiculosController.listar);
router.get("/veiculo/:id", VeiculosController.buscar);
router.post("/veiculo", VeiculosController.cadastrar);
router.delete("/veiculos/:id", VeiculosController.deletar);
router.put("/veiculo", VeiculosController.atualizar);
router.patch("/veiculo/:id", VeiculosController.alterar);

module.exports = router;