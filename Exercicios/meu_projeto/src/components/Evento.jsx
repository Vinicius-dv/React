import Button from './Button'

function Evento({numero}){

    function meuEvento(){
        console.log(`Opa fui ativado ${numero}`)
        
    }

    function meuEvent(){
        console.log('Ativando primeiro evento')
    }
    function meuEvent2(){
        console.log('Ativando segundo evento')
    }

    return(
        <>
        <Button evento={meuEvent} text="Primeiro evento"/>
        <Button evento={meuEvent2} text="Segundo evento"/>
        <p>Clique no botão para ativar:</p>
        <button onClick={meuEvento}>Ativar</button>
        </>
    )
}

export default Evento