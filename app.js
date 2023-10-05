const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 8080;
app.use(express.static('public'));


app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs'); // Usando EJS como mecanismo de modelo

// Rota principal que renderiza o formulário
app.get('/', (req, res) => {
  res.render('index'); // Renderiza views/index.ejs
});

// Rota para lidar com o envio do formulário (POST)
app.post('/dados', (req, res) => {
  const { nome, endereco, telefone, dataAgendamento } = req.body;
  // Aqui você pode processar os dados como desejar
  // Por exemplo, você pode enviá-los para a página "dados.html"
  res.render('dados', { nome, endereco, telefone, dataAgendamento }); // Renderiza views/dados.ejs com os dados
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
