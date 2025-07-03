import {useState} from 'react'
function Main(){
   const [valor_p,set_valor] = useState('')
   const [carro,set_carro] = useState('')
   return(
    <div>
        <label htmlFor="f_nome">Digite seu nome</label>
        <input type="text" name="f_nome" id="f_nome" onBlur={(e)=>set_valor(e.target.value)}/>
        <p>{valor_p}</p>

        <select name="" id="" onClick={(e)=>set_carro(e.target.value)}>
            <option value="1">Carro 1</option>
            <option value="2">Carro 2</option>
            <option value="3">Carro 3</option>
            <option value="4">Carro 4</option>
        </select>
        <p>Carro selecionado foi: {carro}</p>
    </div>
   )
}

export default Main