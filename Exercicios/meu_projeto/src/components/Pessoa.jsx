//Aqui eu estou dizendo que as propriedades nome, idade e etc vai virar as variaveis que eu defini la na onde eu importei 
function Pessoa({nome,idade,profissão,foto}){
    return(
        <div>
            <img src={foto} alt="" />
            <h2>Nome: {nome}</h2>
            <p>Idade: {idade}</p>
            <p>Profissão:{profissão}</p>
        </div>
    )
}


export default Pessoa