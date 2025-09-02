const express = require('express');
const app = express();

const PORT= 3000;

app.get('/', (req, res) => {
res.send('Olá! Meu primeiro servidor está funcionando.');
});

app.listen(PORT, () => {
console.log('Servidor rodando em http://localhost:3000');
});

app.get('/health', (req, res) => {
  res.status(200).send('tudo certo por aqui');
});