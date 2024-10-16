function Meu_Nome(props){
    return(
        <div>
            {/*Abaixo tenho uma props onde eu tenho um 'atributo' chamado nome dai quando eu importar a 
            função Meu_Nome para eu usar essa props, eu faço da seguinte maneira: < Meu_Nome nome = 'vinicius' /> 
            fazendo isso eu estou passando um valor para esse nome, la na onde eu importei*/}
            <p>Fala ai {props.nome},Suave?</p>
        </div>
    )
}

export default Meu_Nome