# Instruções:

Crie um código JavaScript no back-end utilizando o Node.JS. No código, você deverá elaborar uma ou mais rotas, que podem ser de qualquer tipo (get, put etc). Depois, faça um teste em aplicações de rota, como o Postman ou o Insomnia, para confirmar se o retorno está coerente com o que você programou.

Observação: os prints, ou o próprio código, devem ser divididos por arquivos. Por exemplo, o código de rotas está em um arquivo diferente do código de conexão.

# RESPOSTA

## CÓDIGOS EM JS

### Código de rotas

```JS
const express = require("express");
const router = express.Router();

router.get('/projects', (request, response) => {
    console.log('Servidor OK');
    return response.send('Hello World!');
});

router.get('/projects/:id', (request, response) => {
    const id = request.params.id;
    response.json({ message: `ID ${id} Recebido ` });
});

module.exports = router;
```

### Código de conexão
```JS
const express = require("express");
const app = express();
const porta = 3333;

const routes = require("./routes");

app.listen(porta, function () {
    console.log("Servidor rodando na porta", porta);
});

app.use(routes);
```
##
![img1](https://github.com/jedsonjhones/Softex-Backend/assets/39849707/13eef14f-ca11-4914-8db7-382e6206203e)
![img2](https://github.com/jedsonjhones/Softex-Backend/assets/39849707/ad2f3c70-87a9-421d-b1c7-ba70bcafa706)



