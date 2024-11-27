db = db.getSiblingDB("Colegio"); // Crea la base de datos 'Colegio'

db.createCollection("alumnos"); // Crea la colección 'alumnos'

// Inserta datos iniciales
db.alumnos.insertMany([
  { id: 1, nombre: "Juan Quiñones", edad: 23 },
  { id: 2, nombre: "Maycol Fuquene", edad: 20 },
  { id: 3, nombre: "Juan García", edad: 21 },
]);
