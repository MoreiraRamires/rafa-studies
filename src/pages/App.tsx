import React, { useState } from 'react';
import  Cronometro  from '../components/Cronometro';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import style from './App.module.scss'


function App() {
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
  
  return (
    <div className={style.AppStyle}>  
      <Formulario setTarefas={setTarefas}/>
      <Lista tarefas={tarefas}/>
      <Cronometro/>
    </div>
  );
}

export default App;
