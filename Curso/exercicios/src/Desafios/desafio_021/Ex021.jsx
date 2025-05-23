import './Ex021.css'
import {useState} from 'react'
function Ex021(){
    const [class_div,setDiv] = useState('main_div')
    const [class_img,setImg] = useState('main_img')
    function click(e){
        if(e.target.tagName === 'IMG'){
            e.stopPropagation()
            if(class_img === 'active_img'){
                setImg('main_img')
            }else{
                setImg('active_img')
            }
        }else if(e.target.tagName ==='DIV'){
            if(class_div === 'active'){
                setDiv('main_div')
            }else{
                setDiv('active')
            }
        }
    }
    return(
        <div className={class_div} onClick={click}>
            <img className={class_img} onClick={click} src="https://i.imgur.com/5qwVYb1.jpeg" alt="" />
        </div>
    )
}

export default Ex021