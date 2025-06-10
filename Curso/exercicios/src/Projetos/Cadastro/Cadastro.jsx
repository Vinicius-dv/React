import {useState} from 'react'
function Cad(){
    const [nome_user,setNome] = useState('')
    const [email_user,setEmail] = useState('')
    const [senha_user,setSenha] = useState('')

    async function cad(){
        try {
            const req = await fetch('http://localhost:5000/cad',{
                headers:{
                    'Content-Type':'application/json'
                },
                method:'post',
                body:JSON.stringify({nome:nome_user,email:email_user,senha:senha_user})
            })
            const res = await req.json()
            console.log(res)
            alert(res.message)
        } catch (error) {
            console.log('erro interno '+error)
        }
    }
    return(
        <div>
            <div>
                <form action="">
                    <label htmlFor="">Nome</label>
                    <input type="text" name="" id="" onChange={(e)=>setNome(e.target.value)}/>
                    <label htmlFor="">Email</label>
                    <input type="text" name="" id="" onChange={(e)=>setEmail(e.target.value)}/>
                    <label htmlFor="">Senha</label>
                    <input type="text" name="" id="" onChange={(e)=>setSenha(e.target.value)}/>
                    <button onClick={cad}>Cadastrar</button>
                </form>
            </div>
        </div>
    )
}

export default Cad