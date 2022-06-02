import "./styles.css";

import { Card } from "../../components/Card";

export function Home() {
  return (
    <div className="container">
      <h1>Lista de Presença</h1>
      <input type="text" placeholder="Digite o nome.."/>
      <button type="button">Adicionar</button>

      <Card nome="Matheus" horario="15:16"/>
      <Card nome="Lazinho" horario="17:01"/>

    </div>
  )
}
