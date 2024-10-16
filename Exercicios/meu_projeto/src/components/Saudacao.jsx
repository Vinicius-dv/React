function Saudacao({name}){

    function gerarSaudacao(algum_nome){
        return `Olá ${algum_nome}`
    }
    return(
        <>
        {/*Aqui ele vai fazer a verificação se ja foi digitado um nome ou eu estou digitando ele mpstra na tela a mensagem, agr se nada fo digitado ele não mostra undefined, pq o && quando ele é false ele não mostra nada */}
        {name &&<p>{gerarSaudacao(name)}</p>}
        </>
    )
}

export default Saudacao