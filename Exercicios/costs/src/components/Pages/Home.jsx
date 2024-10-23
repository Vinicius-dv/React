import styles from './Home.module.css'
import savings from'../../img/savings.svg'
import Link_button from '../layout/Link_button'

function Home(){
    return(
        <section className={styles.home_container}>
            <h1>Bem-vindo ao <span>Costs</span> </h1>
            <p>Comece a gerenciar os seus projetos agora mesmo!</p>
            <Link_button to="/Projeto_novo" text="Criar projeto"/>
            <img src={savings} alt="Costs" />
            <button/>
            
        </section>
    )
}

export default Home