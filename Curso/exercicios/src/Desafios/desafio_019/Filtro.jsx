import {useState} from "react"
function Filtro(){
    const array_one = [
        {task:'Aprender react',status:'Pendente'},
        {task:'Aprender node js',status:'Concluido'},
        {task:'Aprender mongodb',status:'Concluido'},
        {task:'Aprender javascript',status:'Concluido'},
        {task:'Aprender php',status:'Pendente'},
        {task:'Aprender ts',status:'Pendente'}
    ]
    const [array_task,setTask] = useState(array_one)
    function retornar_task(index){
        setTask(array_one.filter((itens,i)=>itens.status==index))
    }
    return(
        <>
        <select onChange={(e)=>retornar_task(e.target.value)} name="" id="filtro">
            <option value="Pendente">Pendentes</option>
            <option value="Concluido">Concluidos</option>
        </select>
        {array_task.map((itens,index)=>(
            <div key={index}>
            <p> Nome da tarefa:{itens.task}</p>
            <p>Status da tarefa:{itens.status}</p>
            </div>
        ))}
        </>
    )
}

export default Filtro
