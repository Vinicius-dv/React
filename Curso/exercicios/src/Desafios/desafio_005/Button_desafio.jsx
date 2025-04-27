import {useState} from "react"
function Button_lamp(){
    const [estado_button,set_button] = useState(false)
    function button(){
        set_button(!estado_button)
    }
    let texto_p
    if(estado_button){
        texto_p = 'lampada ligada'
    }else{
        texto_p = 'lampada desligada'
    }
    return(
        <div>
            <button onClick={button}>Ligar ou desligar lampada</button>
            <p>{texto_p}</p>
        </div>
    )
}


export default Button_lamp