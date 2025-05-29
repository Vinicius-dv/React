import {useState} from 'react'
function Main(){
    const [color,setColor] = useState(['red','green','white'])
    const [index,setIndex] = useState(0)
    function color_att(){
        setIndex(prev=> prev+=1)
        if(index>=2){
            setIndex(0)
        }
    }
    return(
        <>
            <button onClick={color_att}>Alterar cor</button>
            <p>Cor atual: {color[index]}</p>
        </>
    )
}

export default Main