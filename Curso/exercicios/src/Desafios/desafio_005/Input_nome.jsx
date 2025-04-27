import {useState} from "react"
function Input_nome(){
    const [valor_nome,set_nome] = useState()
    function valor_input(e){
        set_nome(e.target.value)
    }
    return(
        <>
        <input onChange = {valor_input} type="text" name="" id=""/>
        <p>{valor_nome}</p>
        </>
    )
}

export default Input_nome