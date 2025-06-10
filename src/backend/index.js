const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get('/api', (req, res) => {
    res.json({ mensagem: 'Bem-vindo à API do seu projeto React!' });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});