const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ status: "JEPADOS API ONLINE" });
});

app.get("/machines", (req, res) => {
  res.json([
    { id: 1, name: "Escavadora CAT 320", status: "AVAILABLE" },
    { id: 2, name: "Bulldozer D6", status: "IN_USE" }
  ]);
});

app.post("/orders", (req, res) => {
  res.json({
    id: Date.now(),
    ...req.body,
    status: "PENDING"
  });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log("JEPADOS API running on port", PORT);
});
