const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "localhost";

const estudiante = {
  nombre: "Marcos Enrique Ramos Hernandez",
  expediente: "25540",
  codigo_estudiantil: "RH21I04001",
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

app.listen(PORT, HOST, () => {
  console.log(`Servidor corriendo en http://${HOST}:${PORT}`);
});
