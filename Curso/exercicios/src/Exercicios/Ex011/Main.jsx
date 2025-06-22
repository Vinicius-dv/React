import {useState} from "react"
function Main(){
    const array_one = [
        {task:'Aprender react',status:'Pendente'},
        {task:'Aprender node js',status:'Concluido'},
        {task:'Aprender mongodb',status:'Concluido'},
        {task:'Aprender javascript',status:'Concluido'},
        {task:'Aprender php',status:'Pendente'},
        {task:'Aprender ts',status:'Pendente'}
    ]
    const [task,SetTask] = useState(array_one)
    function selecionar_task(index){
        SetTask(array_one.filter((itens,i)=>itens.status==index))
    }

    return(
        <>
        <select name="" id="" onClick={(e)=>selecionar_task(e.target.value)}>
            <option value="Pendente">Pendente</option>
            <option value="Concluido">Concluido</option>
        </select>
        {task.map((itens,index)=>(
            <div>
            <p key={index}>Nome:{itens.task}</p>
            <p key={index}>Status:{itens.status}</p>
            </div>
        ))}
        </>
    )
} 
export default Main