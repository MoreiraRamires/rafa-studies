import React, { useState } from "react";
import style from './Lista.module.scss'
import ItemLista from "./Item";

function Lista(){
  const [tarefas,setTarefas] = useState([{
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
  }]);

  
  return(
    <aside className={style.listaTarefas}>
      <h2 onClick={()=> {
        setTarefas([...tarefas , {tarefa:"estudar estado",tempo:'00:10:00'}])
      }}>Estudos do dia</h2>
      <ul>
        {tarefas.map( (atributos,index) => (
         <ItemLista key={index} tarefa={atributos.tarefa} tempo={atributos.tempo}/>
        ))}
      </ul>
    </aside>
  )
}

export default Lista;