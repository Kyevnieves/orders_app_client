const mysql = require("mysql");
const { database } = require("./keys");
const mysql2 = require("mysql2");
const connection = mysql2.createConnection(database);

connection.query(
  'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45',
  function (err, results, fields) {
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  }
);
/*
const { promisify } = require("util");
const pool = mysql.createPool(database);

pool.getConnection((error, connection) => {
  if (error) {
    if (error.code === "PROTOCOL_CONNECTION_LOST") {
      console.log("La conexion con la base de datos fue cerrada");
    }
    if (error.code === "ER_CON_COUNT_ERROR") {
      console.log("Base de datos tiene muchas conexiones");
    }
    if (error.code === "ECONNREFUSED") {
      console.log("Conexion rechazada");
    }
  }
  if (connection) {
    connection.release();
    console.log("Conectado a la base de datos");
    return;
  }
});

pool.query = promisify(pool.query);

module.exports = pool;
*/
