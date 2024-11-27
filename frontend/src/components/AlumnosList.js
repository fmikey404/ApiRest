import React from "react";

function AlumnosList({ alumnos }) {
  return (
    <div>
      <h2>Listado de Alumnos</h2>
      <ul>
        {alumnos.map((alumno) => (
          <li key={alumno.id}>
            {alumno.nombre} - {alumno.edad} años
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AlumnosList;
