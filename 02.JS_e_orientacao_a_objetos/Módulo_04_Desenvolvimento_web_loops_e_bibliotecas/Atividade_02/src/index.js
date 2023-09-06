const express = require("express");
const app = express();
const porta = 3333;

const routes = require("./routes");

app.listen(porta, function () {
    console.log("Servidor rodando na porta", porta);
});

app.use(routes);