import React, { useState, useEffect } from "react";
import "./App.css";
import AlumnosList from "./components/AlumnosList.js";

function App() {
  const [alumnos, setAlumnos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/alumnos") // Endpoint del backend
      .then((response) => response.json())
      .then((data) => setAlumnos(data))
      .catch((error) => console.error("Error al cargar alumnos:", error));
  }, []);

  return (
    <div className="App">
      <h1>Gestión de Alumnos</h1>
      <AlumnosList alumnos={alumnos} />
    </div>
  );
}

export default App;
