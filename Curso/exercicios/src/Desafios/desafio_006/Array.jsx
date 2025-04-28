import {useState} from "react"
function Array(){
    const itens_array = ['item_01','item_02','item_03','item_04','item_05','item_06','item_07','item_08','item_09','item_10']
    const [index,set_index] = useState(0)
    function click_index(){
        set_index(index+1)
        if(index>8){
            set_index(0)
        }
    }
    let array_map = itens_array[index]
    return(
        <div>
            <button onClick={click_index}></button>
            <p>{array_map}</p>
        </div>
    )
}

export default Array