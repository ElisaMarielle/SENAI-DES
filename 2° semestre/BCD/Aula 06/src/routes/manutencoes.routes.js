const express = require("express");
const router = express.Router();

const ManutencoesController = require ("../controllers/manutencoes.controllers");

router.get("/manutencoes", ManutencoesController.listar);
router.get("/manutencao/:id", ManutencoesController.buscar);
router.post("/manutencao", ManutencoesController.cadastrar);
router.delete("/manutencoes/:id", ManutencoesController.deletar);
router.put("/manutencao", ManutencoesController.atualizar);
router.patch("/manutencao/:id", ManutencoesController.alterar);

module.exports = router;