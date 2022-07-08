import style from './Lista.module.scss'
import ItemLista from "./Item";
import { Itarefa } from '../../types/tarefa';




function Lista({tarefas}:{tarefas:Itarefa[]}){
 
  return(
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map( (atributos,index) => (
         <ItemLista key={index} tarefa={atributos.tarefa} tempo={atributos.tempo}/>
        ))}
      </ul>
    </aside>
  )
}

export default Lista;