import {useState} from 'react'
function Main(){
    const [estado,setEstado] = useState(0)
    setInterval(()=>{
        setEstado(prev=>prev+=1)
    },4000)
    return(
        <>
        <p>
            hora: {estado&&new Date().toLocaleTimeString()}
        </p>
        </>
    )
}

export default Main