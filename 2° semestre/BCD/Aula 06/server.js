const express = require("express");
const cors = require("cors");

const ClienteRoutes = require ("./src/routes/clientes.routes");
const ContratoRoutes = require ("./src/routes/contratos.routes");
const ManutencaoRoutes = require ("./src/routes/manutencoes.routes");
const VeiculoRoutes = require ("./src/routes/veiculos.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use(ClienteRoutes);
app.use(ContratoRoutes);
app.use(ManutencaoRoutes);
app.use(VeiculoRoutes);

app.listen(3000, ()=> {
    console.log("Servidor online na porta 3000.");
});