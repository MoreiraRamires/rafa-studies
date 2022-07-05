import React from "react";
import './style.scss'
import tarefas from './'

function Lista(){
  const tarefas = [
    {
      tarefa:'Javascript',
      tempo:'01:30:00'
    },
    {
      tarefa:'React',
      tempo:'00:30:00'
    },
    {
      tarefa:'VUE',
      tempo:'00:45:00'
    },

  ]
  return(
    <aside className="listaTarefas">
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map( (item,index) => (
          <li key={index} className='item'>
            <h3>{item.tarefa}</h3>
            <span>{item.tempo}</span>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Lista;