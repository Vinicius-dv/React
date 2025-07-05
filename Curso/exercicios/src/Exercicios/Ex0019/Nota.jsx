import {useState} from 'react'
import Resultado from './Resultado'
function Nota({props}){
    const [notas,set_notas] = useState(props)
    let soma = Number(notas[0].Nota_01+notas[0].Nota_02+notas[0].Nota_03)
    return(
        <>
        <label htmlFor="">Informe a nota:</label>
        <input type="Number" name="" id="" onChange={(e)=>set_notas(prev=>[...prev,prev[0].Nota_01 = Number(e.target.value)])}/>
        <input type="Number" name="" id="" onChange={(e)=>set_notas(prev=>[...prev,prev[0].Nota_02 = Number(e.target.value)])}/>
        <input type="Number" name="" id="" onChange={(e)=>set_notas(prev=>[...prev,prev[0].Nota_03 = Number(e.target.value)])}/>
        <Resultado props={soma}/>
        </>
    )
}

export default Nota
