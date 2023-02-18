const express = require("express");
const router = express.Router();
const pool = require("../database");

router.get("/pedidos", async (req, res) => {
  const pedido = await pool.query(
    `SELECT * FROM orders WHERE companyid = ${req.user.id}`
  );
  res.render("pedidos/todos", { pedido });
});

router.post("/orders/add", async (req, res) => {
  const { pedido } = req.body;
  const newOrder = {
    companyid: req.user.id,
    pedido,
    procesado: 0,
    enviado: 0,
  };
  const response = await pool.query("INSERT INTO orders set ?", [newOrder]);
  res.send(response);
});

module.exports = router;
