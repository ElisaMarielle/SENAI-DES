const express = require("express");
const router = express.Router();

const LivrosController=require("../controllers/livros.controller");

router.get("/livros", LivrosController.listar);
router.get("/livros/:id", LivrosController.buscar);
router.post("/livros", LivrosController.cadastrar);
router.delete("/livros/:id", LivrosController.deletar);

module.exports = router;