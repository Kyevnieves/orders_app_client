const express = require("express");
const router = express.Router();
const pool = require("../database");

router.get("/perfil", async (req, res) => {
  const usuario = await pool.query(
    `SELECT * FROM users WHERE id = ${req.user.id}`
  );
  res.render("usuario/perfil", { usuario });
});

module.exports = router;
