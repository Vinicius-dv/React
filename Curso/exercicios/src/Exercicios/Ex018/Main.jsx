import {useState} from 'react'
function Main(){
    const [valor_input,set_valor] = useState([])
    const [mostrar,set_mostrar] = useState(false)
    function criar_task(){
        set_mostrar(true)
    }   
    return( 
        <>
            <label htmlFor="">Crie uma tarefa</label>
            <input type="text" name="" id="" onBlur={(e)=>set_valor(prev=>[...prev,e.target.value])}/>
            <button onClick={()=>criar_task()}>Criar</button>
            {mostrar&&valor_input.map((itens,index)=>(
                <p>{itens}</p>
            ))}
        </>
    )
}
export default Main 