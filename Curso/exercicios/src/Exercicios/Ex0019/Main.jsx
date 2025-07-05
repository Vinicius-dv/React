import {useState} from 'react'
import Nota from './Nota'

function Main(){
    const [notas,set_notas] = useState([{Nota_01 : 0,Nota_02 : 0,Nota_03 : 0}])
    return(
        <>
            <Nota props={notas}/>
        </>
    )
}

export default Main

/*<Resultado props={soma}/>
            <p>{res}</p>*/