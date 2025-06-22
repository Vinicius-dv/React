import {useState} from "react"
function Main(){
    const [contador,setContador] = useState(0)
    return(
        <div>
            <h1>Vamos voltar a praticar react</h1>
            <button onClick={()=>{setContador(prev=> prev+=1)}}>Aumentar</button>
            <button onClick={()=>{setContador(prev=> prev-=1)}}>Diminuir</button>
            <button onClick={()=>{setContador(0)}}>Resetar</button>
            <p>{contador}</p>
        </div>
    )
}

export default Main
