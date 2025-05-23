
function Filho({listas,remover}){
   
    return(
        <>
        {listas.map((itens,index)=>(
            <div key={index}>
            <p>{itens.task}</p>
            <button onClick={()=>remover(index)}>Excluir</button>
            </div>
        ))}
        </>
    )
}


export default Filho