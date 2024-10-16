import { useState } from 'react'


function Form(){
    function cadastro(e){
        console.log(`Cadastrou o usuario`)
        console.log(name)
        console.log(password)
        e.preventDefault()

    }

    const [name,Setname] = useState()
    const [password,Setpassword] = useState()

    return(
       <div>
        <form onSubmit = {cadastro}>
            <div>
                <input type="text" name="evt" id="evt"placeholder ="Digite aqui seu nome"  onChange = {e=> Setname(e.target.value)}/>
               
            </div>

            <div>
                <input type="password" name="senha" id="senha"placeholder ="Digite aqui sua senha" onChange={ e=> Setpassword(e.target.value)}/>
            </div>

            <div>                                   
                <input type="submit" value="Enviar" />                                      
            </div>
        </form>
       </div>
    )
}

export default Form