function btn_componente({id,name,valor,click}){
    return(
        <button id={id} name={name} onClick={click}>{valor}</button>
    )
}

export default btn_componente