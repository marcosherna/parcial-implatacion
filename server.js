const express = require("express");
const app = express();
const PORT = 3000;

const estudiante = {
  nombre: "Marcos Ramos",
  expediente: "EXP12345",
  codigo_estudiantil: "COD6789",
};

app.get("/", (req, res) => {
  res.json({
    mensaje: "Información del estudiante",
    datos: estudiante,
  });
});

app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
