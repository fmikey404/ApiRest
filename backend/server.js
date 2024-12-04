const express = require('express');
const mongoose = require('mongoose');
const Alumno = require('./models/alumnos.models');  // Corregir la ruta al modelo

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

// Conectar a MongoDB
mongoose.connect("mongodb://localhost:27017/colegio", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  const db = mongoose.connection;
  console.log("Base de datos conectada:", db.name);
  console.log("Conexión exitosa a MongoDB");
})
.catch(err => {
  console.error("Error al conectar a MongoDB:", err.message);
});

// Ruta de prueba
app.get('/', (req, res) => {
  res.send("¡Servidor en funcionamiento!");
});

// Ruta GET para obtener todos los alumnos
app.get('/api/alumnos', async (req, res) => {
  try {
    const alumnos = await Alumno.find({});
    res.status(200).json(alumnos);  // Enviar los datos de los alumnos
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Ruta GET para obtener un alumno por ID
app.get('/api/alumnos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const alumno = await Alumno.findById(id);

    if (!alumno) {
      return res.status(404).json({ message: "Alumno no encontrado" });
    }

    res.status(200).json(alumno);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Ruta POST para crear un nuevo alumno
app.post('/api/alumnos', async (req, res) => {
  try {
    const alumno = await Alumno.create(req.body);
    res.status(200).json(alumno);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Ruta PUT para actualizar un alumno por ID
app.put('/api/alumnos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const alumno = await Alumno.findByIdAndUpdate(id, req.body, { new: true });

    if (!alumno) {
      return res.status(404).json({ message: "Alumno no encontrado" });
    }

    res.status(200).json(alumno);  // Enviar el alumno actualizado
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Ruta DELETE para eliminar un alumno por ID
app.delete('/api/alumnos/:id', async (req, res) => {
  try {
    const { id } = req.params;  // Obtener el ID del parámetro en la URL
    const alumno = await Alumno.findByIdAndDelete(id);  // Eliminar el alumno por su ID

    if (!alumno) {
      return res.status(404).json({ message: "Alumno no encontrado" });
    }

    res.status(200).json({ message: "Alumno eliminado exitosamente" });  // Confirmación de eliminación
  } catch (error) {
    res.status(500).json({ message: error.message });  // Enviar un mensaje de error si ocurre uno
  }
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
