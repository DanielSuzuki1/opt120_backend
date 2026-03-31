const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const pool = require("./config/db");
const swaggerSpec = require("./config/swaggerConfig"); // Importando o arquivo novo

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const initDatabase = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS usuarios (
      id SERIAL PRIMARY KEY,
      nome VARCHAR(100) NOT NULL,
      email VARCHAR(100) UNIQUE NOT NULL
    );
  `;
  try {
    await pool.query(query);
    console.log('📦 Tabela "usuarios" OK na porta 5433.');
  } catch (error) {
    console.error("❌ Erro no Banco:", error.message);
  }
};
initDatabase();

// --- ROTAS ---
app.get("/usuarios", async (req, res) => {
  const result = await pool.query("SELECT * FROM usuarios ORDER BY id ASC");
  res.json(result.rows);
});

app.post("/usuarios", async (req, res) => {
  const { nome, email } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO usuarios (nome, email) VALUES ($1, $2) RETURNING *",
      [nome, email],
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put("/usuarios/:id", async (req, res) => {
  const { id } = req.params;
  const { nome, email } = req.body;
  const result = await pool.query(
    "UPDATE usuarios SET nome = $1, email = $2 WHERE id = $3 RETURNING *",
    [nome, email, id],
  );
  res.json(result.rows[0]);
});

app.delete("/usuarios/:id", async (req, res) => {
  const { id } = req.params;
  await pool.query("DELETE FROM usuarios WHERE id = $1", [id]);
  res.status(204).send();
});

app.listen(3000, () => {
  console.log("--------------------------------------------------");
  console.log("🚀 SERVIDOR RODANDO COM SUCESSO!");
  console.log("📂 LISTA DE USUÁRIOS: http://localhost:3000/usuarios");
  console.log("📝 DOCUMENTAÇÃO (SWAGGER): http://localhost:3000/api-docs");
  console.log("--------------------------------------------------");
  console.log("Dica: Segure CTRL e clique no link para abrir no navegador.");
});
