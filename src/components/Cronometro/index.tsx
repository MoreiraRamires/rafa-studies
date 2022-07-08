import Botao from "../Botao";
import Relogio from "./Relogio";
import style from './Cronometro.module.scss';
import { tempoParaSegundos } from "../../common/utils/time";
import { Itarefa } from "../../types/tarefa";
import { useState } from "react";

interface Props {
  selecionado: Itarefa | undefined
}

export default function Cronometro({selecionado}:Props) {
  const [tempo,setTempo] = useState<number>()
  if(selecionado?.tempo){
    setTempo(tempoParaSegundos(selecionado.tempo))
  }
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o Cronômetro</p>
      <div className={style.relogioWrapper}>
        <Relogio />
        Tempo: {tempo}
      </div>
      <Botao>
        Começar!
      </Botao>
    </div>
  )
}