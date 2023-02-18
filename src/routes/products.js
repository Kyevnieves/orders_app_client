const express = require("express");
const router = express.Router();
const pool = require("../database");

router.post('/product/add', async (req, res)=>{
    const response = await pool.query('SELECT 1 + 1')
    res.send(response)
})

module.exports = router;
