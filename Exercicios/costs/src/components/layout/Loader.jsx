import styles from './Loader.module.css'
import loading from '../../img/loading.svg'

function Loader(){
    return(
        <div className={styles.loading_container}>
            <img className={styles.load} src={loading} alt="imagem de loading" />
        </div>
    )
}

export default Loader