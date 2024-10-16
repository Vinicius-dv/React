function List_itens({itens}){
    return(
        <>
        <h3>Lista de alguns carros:</h3>
        { 
        //Aqui eu estou fazendo uma verificação
        itens.length> 0 ?(
        itens.map((itens,index)=>(
            <p key={index}>{itens}</p>
            //os : significa o else
        ))):(
            <p>Não a itens na lista</p>
        )
        }
        </>
    )
}

export default List_itens