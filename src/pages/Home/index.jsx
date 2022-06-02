import React, { useState, useEffect } from "react";
import "./styles.css";

import { Card } from "../../components/Card";

export function Home() {
  const [studentName, setStudentName] = useState("");
  const [students, setStudents] = useState([]);

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleDateString("pt-br", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })
    };

    setStudents(prevState => [...prevState, newStudent]);
  }

  useEffect(() => {
    console.log("foi chamado");
  }, [students]);

  return (
    <div className="container">
      <header>
        <h1>Lista de Presença</h1>
        <div>
          <strong>Matheus</strong>
          <img src="https://github.com/matheuscostadesign.png" alt="Foto" />
        </div>
      </header>

      <input 
        type="text" 
        placeholder="Digite o nome.."
        onChange={e => setStudentName(e.target.value)}
      />

      <button type="button" onClick={handleAddStudent}>
        Adicionar
      </button>

      {
        students.map(student => (
          <Card 
            key={student.time} // unique "key" prop.
            name={student.name} 
            time={student.time} 
          />
        ))
      }

    </div>
  )
}
