import {useState} from 'react'
import './Main.css'
function Main(){
    const [valor_text,setValor] = useState('')
    const [status,setStatus] = useState('vazio')
    console.log(status)
    function quiz_car(){
        console.log(valor_text)
        if(valor_text === 'civic si'){
            setStatus('success')
            setTimeout(()=>{
                setStatus('vazio')
                setValor('')
            },2000)
        }else{
            setStatus('error')
            setTimeout(()=>{
                setStatus('vazio')
                setValor('')
                
                
            },2000)
        }
        console.log(status)
    }
    return(
        <div>
            <h1>Acerte o carro com as dicas</h1>
            <h2>Ano:2008</h2>
            <h2>Marca:Honda</h2>
            <h2>Aspirado</h2>
            <h2>Potencia:192cv</h2>
            <textarea name="" id="valor" value={valor_text}  disabled={status === 'success'} onChange={(e)=>{
                setValor(e.target.value)
                setStatus('digitando')
            }}></textarea>
            <button disabled={status==='vazio'} onClick={quiz_car}>Enviar</button>
            {status ==='success'&&<p className='success'>Você acertou!!!</p>}
            {status === 'error'&&<p className='error'>Você errou seu panaca</p>}
        </div>
    )
}

export default Main