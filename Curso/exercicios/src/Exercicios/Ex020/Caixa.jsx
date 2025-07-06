function Caixa(props){
    return(
        <>  
            <p>{props.site}</p>
            {/*COm props children eu consigo pegar os filhos desse componente e manipular eles*/}
            {props.children}
        </>
    )
}

export default Caixa