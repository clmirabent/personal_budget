const express = require("express");
const app = express();
const port = 3000;
// const cors = require("cors");
const api = require("./server/api");

// app.use(cors());

//Le decimos a nuestra app, que vamos recibir peticiones donde el Body contiene texto en formato JSON.
app.use(express.json());

app.use("/api", api);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
