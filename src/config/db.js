const { Pool } = require("pg");
const pool = new Pool({
  user: "admin",
  host: "localhost",
  database: "teste",
  password: "admin",
  port: 5433, // Porta alterada para evitar conflitos
});
module.exports = pool;
