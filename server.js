const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let orders = [];

app.get("/", (req, res) => {
  res.json({ status: "JEPADOS API ONLINE" });
});

app.get("/machines", (req, res) => {
  res.json([
    { id: 1, name: "Escavadora CAT 320", status: "DISPONÍVEL" },
    { id: 2, name: "Bulldozer D6", status: "EM_USO" }
  ]);
});

app.get("/orders", async (req, res) => {
  const result = await pool.query("SELECT * FROM orders ORDER BY id DESC");
  res.json(result.rows);
});

app.post("/orders", async (req, res) => {
  const { request } = req.body;

  const result = await pool.query(
    "INSERT INTO orders (request, status) VALUES ($1, $2) RETURNING *",
    [request, "PENDING"]
  );

  res.json(result.rows[0]);
});app.patch("/orders/:id", async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const result = await pool.query(
    "UPDATE orders SET status=$1 WHERE id=$2 RETURNING *",
    [status, id]
  );

  res.json(result.rows[0]);
});
