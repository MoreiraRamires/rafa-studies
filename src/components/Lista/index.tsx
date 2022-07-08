import style from './Lista.module.scss'
import ItemLista from "./Item";
import { Itarefa } from '../../types/tarefa';

interface Props {
  tarefas:Itarefa[],
  selecionaTarefa: (tarefaSelecionada:Itarefa)=> void, 
}


function Lista({tarefas,selecionaTarefa}:Props){
 
  return(
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map( (atributos) => (
         <ItemLista 
          key={atributos.id} 
          selecionaTarefa={selecionaTarefa}
          {... atributos}
        />
        ))}
      </ul>
    </aside>
  )
}

export default Lista;