import {useState} from 'react'
function Main(){
    const [estado,setEstado] = useState(false)
    function flow(){
        setEstado(!estado)
    }
    return(
        <div>
            <button onClick={flow}>Clique para mostrar o texto</button>
            {estado&&<p>O filme flow é simplesmente perfeito</p>}
        </div>
    )
}

export default Main