const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Estudiante = sequelize.define(
  "Estudiante",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    codigo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "estudiantes",
    timestamps: false,
  }
);

module.exports = Estudiante;
