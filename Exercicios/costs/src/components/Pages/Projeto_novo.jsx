import styles from './Projeto_novo.module.css'
import Project_form from '../project/Project_form'
import {useNavigate} from 'react-router-dom'
function Projeto_novo(){

    const Usenavigate =useNavigate()

    function createPost(project){
        project.costs = 0
        project.services = []

        fetch("http://localhost:5000/project",{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(project)
        })
        .then((res)=>res.json())
        .then((dados)=>{
            console.log(dados)
            Usenavigate('/projects', {state: { message: 'Projeto criado' }})
        })
        .catch((err)=>{
            console.log(err)
        })

    }  

    return(
        <div className={styles.Projeto_novo_container}>
            <h1>Criar projeto</h1>
            <p>Crie seu projeto para depois adicionar os seus serviços</p>
            <Project_form handleSubmit={createPost} btn_text="Criar projeto"/>
        </div>
    )
}

export default Projeto_novo