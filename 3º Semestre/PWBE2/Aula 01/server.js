require("dotenv").config();

const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const listaRoutes = require("./scr/routes/lista.route");

app.use(listaRoutes);

app.get("/", (req, res) => {
    res.send("App Online").end();
});

app.listen(3000, () => {
    console.log("Online na 3000");
});