import {useState} from 'react'
function Main(){
    const [local,set_local] = useState(false)
    function manipular_local(){
        set_local(!local)
        if(local){
            localStorage.setItem('Nome','vinicius')
        }else{
            localStorage.removeItem('Nome')
        }
    }
    function pegar_key(){
        console.log(localStorage.getItem('Nome'))
    }
    return(
        <>
            <h1>Fala peixe</h1>
            <button onClick={()=>manipular_local()}>Usar Localstorage</button>
            <button onClick={()=>pegar_key()}>Pegar item</button>
        </>
    )
}

export default Main