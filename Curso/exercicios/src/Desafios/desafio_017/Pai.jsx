import Filho from "./Filho"
import {useState} from "react"
function Pai(){
    const [lista_taks,setTask] = useState(
        [
            {task:'Estudar',horario:1430},
            {task:'Almoçar',horario:1200},
            {task:'Escola',horario:1300},
            {task:'Dormir',horario:2200},
        ]
    )
    function remover_task(index){
        setTask(prev=>prev.filter((itens,i)=>i!==index))
    }
    return(
        <>
            <Filho listas={lista_taks} remover={remover_task}/>
        </>
    )
}


export default Pai