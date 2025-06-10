import {useState} from 'react'
import Teste from './Teste'
function Main(){
    const [estado,setEstado] = useState(false)
    function comp_click(){
        setEstado(!estado)
    }
    return(
        <div>
            <button onClick={comp_click}>Mostrar componente meu peixe</button>
            {estado&&<Teste/>}
        </div>
    )
}


export default Main