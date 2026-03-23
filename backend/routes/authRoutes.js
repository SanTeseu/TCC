const express = require("express");
const router = express.Router();
const db = require("../database");

// Cadastro de usuário
router.post("/register", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Campos obrigatórios" });
  }

  const query = `INSERT INTO users (email, password) VALUES (?, ?)`;

  db.run(query, [email, password], function (err) {
    if (err) {
      return res.status(500).json({ error: "Usuário já existe" });
    }

    res.json({ message: "Usuário criado com sucesso" });
  });
});

// Login
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  const query = `SELECT * FROM users WHERE email = ? AND password = ?`;

  db.get(query, [email, password], (err, user) => {
    if (err) {
      return res.status(500).json({ error: "Erro no servidor" });
    }

    if (!user) {
      return res.status(401).json({ error: "Email ou senha inválidos" });
    }

    res.json({ message: "Login realizado com sucesso", user });
  });
});

module.exports = router;
