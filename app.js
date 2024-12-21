const express = require('express');
const bodyParser = require('body-parser');
const { Sequelize, DataTypes } = require('sequelize');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Configuração do banco de dados SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite',
});

// Modelo de dados (Usuários)
const User = sequelize.define('User', {
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
  phone: { type: DataTypes.STRING },
  address: { type: DataTypes.STRING },
});

// Sincronizar o banco de dados
sequelize.sync();

// Rotas
app.post('/users', async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
});

app.get('/users', async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

// Iniciar servidor
const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
