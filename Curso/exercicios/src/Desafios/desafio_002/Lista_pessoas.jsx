function  Lista_pessoas({array}){
    return(
        <div>
            {array.map((elemento,index)=>(
                <h1 key={index}>{elemento.nome} - {elemento.idade}</h1>
            ))}
        </div>
    )
}

export default Lista_pessoas