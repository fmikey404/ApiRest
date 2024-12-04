const mongoose = require('mongoose');

// Definir el esquema para los alumnos
const alumnoSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true, // El ID es obligatorio
    unique: true,   // El ID debe ser único
  },
  nombre: {
    type: String,
    required: true, // El nombre es obligatorio
  },
  edad: {
    type: Number,
    required: true, // La edad es obligatoria
  },
}, {
  timestamps: true,  // Agrega las propiedades 'createdAt' y 'updatedAt'
});

// Crear un modelo para 'alumnos' con el esquema definido
const Alumno = mongoose.model('Alumno', alumnoSchema);

module.exports = Alumno;
