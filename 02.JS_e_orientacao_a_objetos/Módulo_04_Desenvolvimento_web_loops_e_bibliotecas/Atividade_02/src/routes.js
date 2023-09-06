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