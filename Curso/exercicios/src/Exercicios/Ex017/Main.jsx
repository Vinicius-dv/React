import {useState} from 'react'
function Main(){
    const [form,set_form] = useState([{Nome:''},{Curso:''},{Ano:''}])
    return(
        <>
        <label htmlFor="">Nome:</label>
        <input type="text" name="" id="" onBlur={(e)=>set_form(Prev=>[...Prev,Prev[0].Nome = e.target.value])} />
        <label htmlFor="">Curso:</label>
        <input type="text" name="" id="" onBlur={(e)=>set_form(Prev=>[...Prev,Prev[1].Curso = e.target.value])} />
        <label htmlFor="">Ano:</label>
        <input type="text" name="" id="" onBlur={(e)=>set_form(Prev=>[...Prev,Prev[2].Ano = e.target.value])} />
        <p>Nome digitado:{form[0].Nome}</p>
        <p>Curso digitado:{form[1].Curso}</p>
        <p>Ano digitado:{form[2].Ano}</p>
        </>
    )
}

export default Main