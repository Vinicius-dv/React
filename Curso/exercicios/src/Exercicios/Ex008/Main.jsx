import {useState} from 'react'
function Main(){
    const [estado,setEstado] = useState(20)
    function click(){
        setEstado(prev=>prev+=1)
    }
    return(
        <div>
        <p>Valor do estado: {estado}</p>
        <button onClick={click}>fala</button>
        </div>
    )
}

export default Main