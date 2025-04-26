import {useState} from "react"
import Conteudo from "./Conteudo_contador"
function Contador(){
    const [mostrar_contador,set_contador] = useState(true)
    const [valor_contador,set_valor_contador] = useState(0)
    function render_cont(){
        set_contador(false)
    }
    return(
        <div>
            <h1>Use o contador, aumenta, ou diminua</h1>
            <button onClick={()=>set_valor_contador(valor_contador+1)}>Aumentar contador</button>
            <button onClick={()=>set_valor_contador(valor_contador-1)}>Diminuir contador</button>
            <button onClick={()=>set_valor_contador(0)}>Zerar contador</button>
            <button onClick={render_cont}>Esconder contador</button>
            {mostrar_contador && <Conteudo valor={valor_contador}/>}
        </div>
    )
}

export default Contador