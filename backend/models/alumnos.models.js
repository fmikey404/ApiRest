// models/Alumno.js

const mongoose = require("mongoose");

// Define el esquema para la colección 'alumnos'
const alumnoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true, // El nombre es obligatorio
  },
  edad: {
    type: Number,
    required: true, // La edad es obligatoria
  },
});

// Crea el modelo a partir del esquema
const Alumno = mongoose.model("Alumno", alumnoSchema);

module.exports = Alumno; // Exporta el modelo para usarlo en otras partes de la aplicación
