import React from "react";
import Botao from "../Botao";

class Formulario extends React.Component {
  render() {
    return(
      <form action="">
          <div className="">
            <label htmlFor="tarefa">Adicione um novo estudo</label>
            <input type="text" name="tarefa" id="tarefa" placeholder="O que vou estudar ..." required/>
          </div>
          <div className="">
            <label htmlFor="tempo"></label>
            <input type="time" step="1" nome="tempo" id="tempo" min="00:00:00" max="01:30:00" />
          </div>
          <Botao/>
      </form>
    )
  }
}

export default Formulario;