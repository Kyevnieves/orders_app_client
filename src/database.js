const mysql = require("mysql");

/* const { database } = require("./keys");
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

const connection = mysql.createConnection({
  host: "srv-captain--kyevdb-db",
  user: "root",
  password: "Fuhrer?*2720",
  database: "database_orders",
  insecureAuth: true,
  ssl: {
    rejectUnauthorized: false,
  },
});

connection.connect(function (err) {
  if (err) {
    return console.log(err);
  }
  console.log("Conectado a la base de datos");
});
