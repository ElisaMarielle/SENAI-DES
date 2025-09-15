const express = require("express");
const cors = require("cors");

const UsuarioRoutes = require("./src/routes/usuarios.routes")
const LivroRoutes = require("./src/routes/livros.routes")

const app = express();

app.use(cors());
app.use(express.json());

app.use(UsuarioRoutes);
app.use(LivroRoutes);

app.listen(3000, ()=> {
    console.log("Senvidor Online na porta 3000");
});
