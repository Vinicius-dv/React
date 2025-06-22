import {useState} from 'react'
function Main(){
    const [cor,set_cor] = useState(['green','red','black','blue'])
    const [index,setIndex] = useState(0)
    function mudar_cor(){
        setIndex(prev=>prev+=1)
        if(index>=3){
            setIndex(0)
        }
    }
    return(
        <>
          <button onClick={mudar_cor}>Mudar cor</button>
          <p style={{color:cor[index]}}>Mude a cor desse texto clicando no botão acima</p>
        </>
    )
}
export default Main