import {useState} from "react"
import Style from "./Sistema.module.css"
function Sistemas_rewards(){
    const [pontos,setPontos] = useState(0)
    const [sumir_url,setUrl] = useState([
        {valor:'url 1', url:'https://www.facebook.com'},
        {valor:'url 2',url:'https://www.instagram.com'},
        {valor:'url 3',url:'https://www.whatsapp.com'}
    ])
    function click_pontos(index){
        
        setTimeout(()=>{
            alert('Você ganhou 3 pontos por clicar na url peixão')
            setPontos(prev_pontos => prev_pontos+3)
        },2000)
        setUrl(array=>array.filter((item,i)=> i!==index))
    }
    return(
        <>
            <h1>CLique nas urls para ganhar recompensas</h1>
            {sumir_url.map((itens,index)=>(
                <a key={index} target="_blank" className={Style.links} onClick={()=>click_pontos(index)} href={itens.url}>{itens.valor}</a>
            ))}
            <p>Seus Pontos {pontos}</p>
        </>
    )
}


export default Sistemas_rewards