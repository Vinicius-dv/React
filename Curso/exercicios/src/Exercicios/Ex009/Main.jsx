import {useState} from 'react'
function Main(){
    const [estado,setEstado] = useState(false)
    function semafaro(){
        setEstado(!estado)
    }
        let p = ''
        if(estado == false){
            p = 'semafaro desligado'
        }else if(estado){
            p = 'semafaro ligado'
        }
    return(
        <div>
            <button onClick={semafaro}>Clique para ligar o semafaro</button>
            <p>{p}</p>
        </div>
    )
}

export default Main