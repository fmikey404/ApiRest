const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// Puerto configurado
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
