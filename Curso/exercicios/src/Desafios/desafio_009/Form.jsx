import {useImmer} from "use-immer"
import Style from "./Form.module.css"
function Form(){
    const [dados,setDados] = useImmer({
        nome:'vinicius',
        idade:15,
        exp:3
    })
    function nome_user(e){
        setDados((draft)=>{
            draft.nome = e.target.value
        })
    }
    function idade_user(e){
        setDados((draft)=>{
            draft.idade = e.target.value
        })
    }
    function exp_user(e){
        setDados((draft)=>{
            draft.exp = e.target.value
        })
    }
    //console.log(dados.nome = 'é o peixe')
    console.log(dados.nome)
    console.log(dados.idade)
    console.log(dados.exp)
    return (
        <>
        <form action="" className={Style.form}>
            <label htmlFor="nome">Seu nome:</label>
            <input type="text" name="nome" id="nome" onChange={nome_user} value={dados.nome}/>
            <label htmlFor="idade">Sua idade:</label>
            <input type="number" name="idade" id="idade" onChange={idade_user} value={dados.idade}/>
            <label htmlFor="exp">Sua Experiência em programação:</label>
            <input type="number" name="exp" id="exp" onChange={exp_user} value={dados.exp}/>
        </form>
        <p>{dados.nome}</p>
        <br/>
        <p>{dados.idade}</p>
        <br/>
        <p>{dados.exp}</p>
        </>
        
    )
}

export default Form