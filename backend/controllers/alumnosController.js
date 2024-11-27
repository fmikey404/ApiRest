const Alumno = require('./models/alumnos.models');

// Obtener todos los alumnos
const getAlumnos = async (req, res) => {
  try {
    const alumnos = await Alumno.find({});
    res.status(200).json(alumnos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener un alumno por ID
const getAlumnoById = async (req, res) => {
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
};

// Crear un nuevo alumno
const createAlumno = async (req, res) => {
  try {
    const alumno = await Alumno.create(req.body);
    res.status(201).json(alumno);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar un alumno por ID
const updateAlumno = async (req, res) => {
  try {
    const { id } = req.params;
    const alumno = await Alumno.findByIdAndUpdate(id, req.body, { new: true });

    if (!alumno) {
      return res.status(404).json({ message: "Alumno no encontrado" });
    }

    res.status(200).json(alumno);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Eliminar un alumno por ID
const deleteAlumno = async (req, res) => {
  try {
    const { id } = req.params;
    const alumno = await Alumno.findByIdAndDelete(id);

    if (!alumno) {
      return res.status(404).json({ message: "Alumno no encontrado" });
    }

    res.status(200).json({ message: "Alumno eliminado exitosamente" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAlumnos,
  getAlumnoById,
  createAlumno,
  updateAlumno,
  deleteAlumno,
};
