import {useState} from 'react'
function Count(){
    const [dados,setDados] = useState([
        {user:'Clovis Barros',id:1,count:0},
        {user:'Spinoza',id:2,count:5},
        {user:'Emmanuel Kant',id:3,count:8}
    ])
    function filosofos_function(id_user){
        setDados(prev=>prev.map((itens,index)=>{
            if(itens.id === id_user){
                return{
                    ...itens,
                    count: itens.count +1
                }
            }
            return itens
        }))
    }
    return(
        dados.map((itens,index)=>(
            <div key={index}>
                <h1>{itens.user}</h1>
                <p>Pontos atual {itens.count}</p>
                <button onClick={()=>filosofos_function(itens.id)}>ponto</button>
            </div>
        ))
    )
}

export default Count