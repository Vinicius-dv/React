
import Conteudo from "./Conteudo_button"
import {useState } from "react"
function Button(){
    const [mostrar_conteudo,set_conteudo] = useState(false)
    console.log(mostrar_conteudo)
    function render_cont(){
        set_conteudo(true)
    }
    return(
        <div>
        <button onClick={render_cont}>Clique para renderizar um componente</button>
        {mostrar_conteudo && <Conteudo/>}
        </div>
    )
}

export default Button