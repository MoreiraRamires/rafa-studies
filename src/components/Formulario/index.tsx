import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React from "react";
import Botao from "../Botao";
import style from './Formulario.module.scss'




class Formulario extends React.Component {

  state ={
    tarefa:'hello',
    tempo:'00:00:00'
  }
  render() {
    return(
      <form action="" className={style.novaTarefa}>
          <div className={style.inputContainer}>
            <label htmlFor="tarefa">Adicione um novo estudo</label>
            <input type="text" name="tarefa" id="tarefa" placeholder="O que vou estudar ..." value={this.state.tarefa} onChange={evento => this.setState({...this.state , tarefa:evento.target.value})} required/>
          </div>
          <div className={style.inputContainer}>
            <label htmlFor="tempo">Tempo</label>
            <input type="time" step="1" name="tempo" id="tempo" min="00:00:00" max="01:30:00"  value={this.state.tempo} onChange={(evento)=> this.setState({...this.state, tempo:evento.target.value  })}/>
          </div>
            <Botao>
            Adicionar
            </Botao>
      </form>
    )
  }
}

export default Formulario;