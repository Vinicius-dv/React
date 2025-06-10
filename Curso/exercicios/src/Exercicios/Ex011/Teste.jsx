import {useState} from 'react'
function Teste(){
    const [teste,setTeste] = useState(['civic si','chevette sl','marea 2.0'])
    const [index,setIndex] = useState(0)
    function carros_br(){
        setIndex(prev=> prev+=1)
        if(index==2){
            setIndex(0)
        }
    }
    return(
        <div>
            <h1>Olá, você utilizou a renderização condicional</h1>
            <button onClick={carros_br}>Mostrar carros</button>
            <p>Carros selecionados {teste[index]}</p>
        </div>
    )
}

export default Teste