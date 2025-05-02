import {useState,useRef} from "react"
import Img_01 from "./imagens/responsivo_celular.jpg"
import Img_02 from "./imagens/responsivo_notebook.jpg"
import Img_03 from "./imagens/responsivo_tablet.jpg"
import Styles from "./Carrocel.module.css"


function Carrocel(){
    const [index,setIndex] = useState(0)
    const imgRef = useRef(null)
    const array_img = [Img_01,Img_02,Img_03]
    let imagem_atual = array_img[index]
    if(index>2){
        setIndex(1)

    }else if(index <0){
        setIndex(2)
    }
    function anterior_img(){
        setIndex(index-1)
        if (imgRef.current) {
            imgRef.current.style.transition = "transform 0.5s ease-in-out";
            imgRef.current.style.transform = `translateX(-10%)`;
          }
        setTimeout(()=>{
            if (imgRef.current) {
                imgRef.current.style.transform = "translateX(0px)";
              }
        },500)    
    }
    function prox_img(){
        setIndex(index+1)
        if (imgRef.current) {
            imgRef.current.style.transition = "transform 0.5s ease-in-out";
            imgRef.current.style.transform = `translateX(10%)`;
          }
        setTimeout(()=>{
            if (imgRef.current) {
                imgRef.current.style.transform = "translateX(0px)";
              }
        },500)    
    }
    return(
        <div className={Styles.div_main}>
            <button onClick={anterior_img}>-</button>
            <div className={Styles.main_carrocel}>
                <img ref={imgRef} className={Styles.img} src={imagem_atual} alt="Imagem do Carrossel" />
            </div>
            <button onClick={prox_img}>+</button>
        </div>
    )
}

export default Carrocel