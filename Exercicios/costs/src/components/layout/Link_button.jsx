import styles from './Link_button.module.css'
import {Link} from 'react-router-dom'

function Link_button({to,text}){
    return(
    <Link className={styles.btn} to={to}>
        {text}
    </Link>

    )
}

export default Link_button