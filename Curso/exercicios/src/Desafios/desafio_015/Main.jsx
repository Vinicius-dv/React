import { useState } from "react"
function Main(){
    const [dados,setDados] = useState(0)
    function add_valor(){
        setDados(prev=>prev+=1)
        if(dados>=10){
            alert('Chegou ao máximo')
            return setDados(0)
        }
    }
    function dim_valor(){
        setDados(prev=>prev-=1)
        if(dados<=0){
            alert('Você chegou ao minímo')
            return setDados(0)
        }
    }
    return(
        <>
        <button onClick={add_valor}>Aumentar valor</button>
        <button onClick={dim_valor}>Diminuir valor</button>
        <p>{dados}</p>
        </>
    )
}


export default Main