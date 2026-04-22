const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req,res)=>{
  res.send("JEPADOS API ONLINE");
});

app.listen(process.env.PORT || 3000);
function getPrice(machine){

  const map = {
    "Escavadora": 150000,
    "Bulldozer": 200000
  };

  return map[machine] || 100000;
}

app.post("/billing", (req,res)=>{
  const { machine } = req.body;

  const price = getPrice(machine);

  res.json({ price });
});
