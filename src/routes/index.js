const express = require("express");
const pool = require("../database");
const router = express.Router();

const obtenerProductosDeUsuario = (productsID) => {
  return pool.query(`SELECT * FROM products WHERE id IN ${productsID}`);
};

router.get("/", async (req, res) => {
  if (req.user) {
    const response = await pool.query(
      `SELECT * FROM users WHERE id = ${req.user.id}`
    );
    const productosHabilitados = response[0].products;
    const myProducts = await obtenerProductosDeUsuario(productosHabilitados);
    res.render("index", { myProducts });
  }
  if (!req.user) {
    res.render("index");
  }
});

module.exports = router;
