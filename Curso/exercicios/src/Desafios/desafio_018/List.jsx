import {useState} from "react"
function List(){
    const [contador,setContador] = useState(0)
    const [hist_contator,setHist] = useState([])
    function clique(){
        setContador(prev=>prev+=1)
        setHist(prev=>[...prev,contador])
        console.log(hist_contator)
    }
    function resetar(){
        setContador(0)
        setHist([])
    }
    return(
        <div>
            <button onClick={clique}>Aumentar</button>
            <p>{contador}</p>
            <button onClick={resetar}>Resetar</button>
            <h1>Historico de numeros:</h1>
            {hist_contator.map((n,i)=>(
                <p key={i}>{n}</p>

            ))}
        </div>
    )
}


export default List