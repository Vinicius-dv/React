import {useState,useEffect} from 'react'
function Main(){
    const [contador,set_contador] = useState(0)
    useEffect(
        ()=>{console.log('Fala peixe')}
    )
    function aumentar_cont(){
        set_contador(prev=>prev+=1)
    }
    return(
        <>
            <button onClick={()=>aumentar_cont()}>Aumentar Contagem</button>
            <p>{contador}</p>
        </>
    )
}
export default Main