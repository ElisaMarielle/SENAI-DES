const express = require("express");
const router = express.Router();

const UsuariosController = require("../controllers/usuarios.controller");

//Define os métodos e rotas da aplicação
router.get("/usuarios", UsuariosController.listar);
router.get("/usuarios/:matricula", UsuariosController.buscar);
router.post("/usuario", UsuariosController.cadastrar);
router.delete("/usuarios/:matricula", UsuariosController.apagar);
router.put("/usuario", UsuariosController.atualizar);
router.patch("/usuario/:matricula", UsuariosController.alterar);

module.exports = router;