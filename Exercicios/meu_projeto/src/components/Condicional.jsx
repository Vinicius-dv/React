import { useState } from 'react'

function Condicional(){
    function enviarEmail(e){
        e.preventDefault()     
        setUserEmail(email)  
    }

    function limparEmail(){
        setUserEmail('')
    }

    const [email,SetEmail] = useState()
    const [userEmail,setUserEmail] = useState()
    return(
        <>
        <h2>Cadastra seu e-mail:</h2>
        <form>
            <input type="email" name="email" onChange={e=> SetEmail(e.target.value)} id="email"placeholder='Digite seu e-mail'/>
            <button type='submit' onClick={enviarEmail}>Enviar email</button>


            {/*Esse && significa: se o que estiver a esquerda dele for true ele executa o segundo valor que passarei para ele, agr se for false ele não executa nada*/}
            {userEmail && (
                <div>
                    <h1>O e-mail do usuario é:{userEmail}</h1>
                    <button onClick={limparEmail}>Limpar</button>
                </div>
            )}
        </form>
        </>
    )
}

export default Condicional