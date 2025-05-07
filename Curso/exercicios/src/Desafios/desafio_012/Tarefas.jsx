import { useState } from "react"
function tarefa(){
    const [nova_tarefa,set_nova_tarefa] = useState('')
    const [tarefa,setTarefa] = useState([])
    function add_task(){
        setTarefa(prev=>[...prev,nova_tarefa])
    }   
    return(
        <div>
            <label htmlFor="">Crie suas tarefas</label>
            <input type="text" name="" id="" onChange={(e)=>set_nova_tarefa(e.target.value)}/>
            <button onClick={add_task}>Adicionar tarefa</button>
            {tarefa.map((itens,index)=>(
                <p key={index}>{itens}</p>
            ))}
        </div>
    )
}
export default tarefa