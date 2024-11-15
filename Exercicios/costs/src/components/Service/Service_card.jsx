import styles from '../project/Project_card.module.css'
import {BsFillTrashFill} from 'react-icons/bs'
function Service_card({id,nameVincius,cost,description,handleRemove}){
    
    const remove = (e)=>{
        e.preventDefault()
        handleRemove(id,cost)
    }

    return(
        <div className={styles.project_card}>
            <h4>{nameVincius}</h4>

            <p>
                <span>Custo total</span> R${cost}
            </p>

            <p>
                <span> {description}</span>
            </p>

            <div className={styles.project_card_actions}>
                <button onClick={remove}>
                    <BsFillTrashFill/>
                    Excluir
                </button>
            </div>
        </div>
    )
}


export default Service_card