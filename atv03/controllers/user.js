const db = require('../models');

const User = db.User;

exports.getAllUsers = async (req, res) => {
  const users = await User.findAll();
  res.json(users);
};

exports.getUserById = async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (!user) {
    return res.status(404).send('Usuário não encontrado');
  }
  res.json(user);
};

exports.createUser = async (req, res) => {
  const { name, email } = req.body;
  const user = await User.create({ name, email });
  res.status(201).json(user);
};

exports.updateUser = async (req, res) => {
  const { name, email } = req.body;
  const user = await User.findByPk(req.params.id);
  if (!user) {
    return res.status(404).send('Usuário não encontrado');
  }
  user.name = name;
  user.email = email;
  await user.save();
  res.json(user);
};

exports.deleteUser = async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (!user) {
    return res.status(404).send('Usuário não encontrado');
  }
  await user.destroy();
  res.status(204).send();
};
