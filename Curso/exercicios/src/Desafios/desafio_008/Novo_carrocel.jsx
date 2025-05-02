import { useState } from "react"
import Img_01 from "./imagens/responsivo_celular.jpg"
import Img_02 from "./imagens/responsivo_notebook.jpg"
import Img_03 from "./imagens/responsivo_tablet.jpg"
import Styles from "./Novo_carrocel.module.css"

function Carrocel() {
  const [index, setIndex] = useState(0)
  const array_img = [Img_01, Img_02, Img_03]

  function anterior_img() {
    setIndex(index-1)
    if (index < 0) {
      setIndex(2)
    }
  }

  function prox_img() {
    setIndex(index+1)
    if (index>1) {
      setIndex(0)
    }
  }

  return (
    <div className={Styles.div_main}>
      <button onClick={anterior_img}>-</button>
      <div className={Styles.main_carrocel}>
        <div className={Styles.slider} style={{ transform: `translateX(-${index * 100}%)` }}>
        {array_img.map((img, i) => (
            <img key={i} src={img} className={Styles.img} alt={`Imagem ${i}`} />
        ))}
        </div>
      </div>
      <button onClick={prox_img}>+</button>
    </div>
  );
}

export default Carrocel
