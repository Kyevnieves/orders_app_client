const express = require("express");
const router = express.Router();
const pool = require("../database");

router.get("/pedidos", (req, res) => {
  res.render("pedidos/todos");
});

module.exports = router;
