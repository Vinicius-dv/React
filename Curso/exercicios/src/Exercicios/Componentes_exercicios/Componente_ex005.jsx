import Ex005 from '../Exercicios_em_si/Ex005'
function Componente_ex005(){
    function criar_texto(){
        return <h1>Fala peixe</h1>
    }
    return(
        <Ex005 texto={criar_texto}/>
    )
}

export default Componente_ex005