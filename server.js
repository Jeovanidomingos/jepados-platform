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

app.get("/orders", (req, res) => {
  res.json(orders);
});

app.post("/orders", (req, res) => {
  const order = {
    id: Date.now(),
    ...req.body,
    status: "PENDING"
  };

  orders.push(order);
  res.json(order);
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log("JEPADOS API running on port", PORT);
});
