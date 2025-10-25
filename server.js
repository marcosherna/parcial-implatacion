require("dotenv").config();
const express = require("express");
const app = express();

const sequelize = require("./src/database/db");
const Estudiante = require("./src/database/models/Estudiante");

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "localhost";

app.get("/", async (req, res) => {
  try {
    const estudiantes = await Estudiante.findAll();
    res.json(estudiantes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener los estudiantes" });
  }
});

app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

app.get("/db-check", async (req, res) => {
  try {
    await sequelize.authenticate();
    res.json({ conexion: "exitosa" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ conexion: "fallida", error: error.message });
  }
});

app.listen(PORT, HOST, async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexión a la base de datos exitosa");
  } catch (error) {
    console.error("Error al conectar la base de datos:", error.message);
  }

  console.log(`Servidor corriendo en http://${HOST}:${PORT}`);
});
