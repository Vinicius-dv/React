import { useState } from "react"
import Msg from "./Mensagem_enviada"
function Button(){
    const [mensagem,setMensagem] = useState('')
    const [enviada,setEnviada] = useState(false)
    const [mostrar_form,setForm] = useState(true)
    const [mensagem_quiz,setQuiz] = useState(false)
    function msg_enviada(){
        setEnviada(true)
        setForm(false)
    }
    function quiz_chevette(){
        if(mensagem === 'ohc'){
            setQuiz(true)
            setForm(false)
        }else{
            alert('Você errou')
        }
    }
    return(
        <div>
            {mostrar_form&&<input type="text" onChange={(e)=>setMensagem(e.target.value)} name="" id="" />}
            {mostrar_form&&<button onClick={msg_enviada} disabled={mensagem ===''}>Enviar</button>}
            {enviada&&<Msg mensagem={mensagem}/>}
            {mostrar_form&&<h1>Adivinhe o motor do chevette</h1>}
            {mostrar_form&&<textarea name="" onChange={(e)=>setMensagem(e.target.value)}></textarea>}
            {mostrar_form&&<button onClick={quiz_chevette}>Enviar</button>}
            {mensagem_quiz&&<Msg mensagem={'Você acertou'}/>}
        </div>
    )
}

export default Button