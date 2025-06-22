import {useState} from 'react'
function Main(){
    const [log,Set_log] = useState(false)
    function msg_logado(){
        return `Você está logado` 
    }
    function msg_logado_off(){
        return `Favor logar` 
    }
    const comprimento = ()=>{
        const hora = new Date().getHours
        if(hora>=0&&hora<13){
            return <p>Bom dia</p>
        }else if(hora>13&&hora<=17){
            return <p>Boa tarde</p>
        }else{
            return <p>boa noite</p>
        }
    }
    comprimento()
    return(
        <div>
           <h1>CFB Cursos</h1>
           {comprimento()}
           <button style={{color:log?'red':'green'}}  onClick={()=>Set_log(!log)}>{log?'deslogar':'logar'}</button>
           <p>{log?msg_logado():msg_logado_off()}</p>
        </div>
    )
}


export default Main