import {useState} from "react"
function Array(){
    const [nome,setNome] = useState('')
    const [dados,setDados] = useState([])
    function valor_user(e){
        setNome(e.target.value)
    }

    function add_nome(){
        setDados([
            ...dados,
            {nome:nome}
        ])
    }

    return(
        <>
            <input onChange={valor_user} type="text" placeholder="digite seu nome"/>
            <button onClick={add_nome}>Add</button>
            {dados.map((itens,index)=>(
                <li key={index}>{itens.nome}</li>
            ))}
        </>
    )
}

export default Array