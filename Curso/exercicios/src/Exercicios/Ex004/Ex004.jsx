import styles from '../Estilos_exercicios/Ex004.module.css'
function aprofundamento_props({type, id,name,placeholder}){
    return(
        <form className={styles.form} action="">
            <label htmlFor={id}>Digite um numero abaixo</label>
            <input type={type} id={id} name={name} placeholder={placeholder} />
        </form>
    )
}

export default aprofundamento_props