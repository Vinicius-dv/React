import styles from './Frase.module.css'

function Frase(){
    return(
    <div className={styles.fraseContainer}>
        <p className ={styles.fraseContent}>Esta frase é foda</p>
    </div>
    )
}

export default Frase