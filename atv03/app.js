const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./models');
const userRoutes = require('./routes/user');
const taskRoutes = require('./routes/task');
const categoryRoutes = require('./routes/category');

app.use(bodyParser.json());

// Rota raiz
app.get('/', (req, res) => {
  res.send('Bem-vindo à minha aplicação! Back-end em Node.JS');
});

// Rotas para usuários, tarefas e categorias
app.use('/users', userRoutes);
app.use('/tasks', taskRoutes);
app.use('/categories', categoryRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
