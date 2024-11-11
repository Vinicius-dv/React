import { useLocation } from "react-router-dom"
import styles from "./Projects.module.css"
import Message from "../layout/Message"
import Link_button from "../layout/Link_button"
import Container from '../layout/Container'
import Project_card from "../project/Project_card"
import { useState,useEffect} from 'react'
import Loader from "../layout/Loader"
function Projects(){

  const [projects,setProjects] = useState([])
  const [removeloading,setremoveLoading] = useState(false)
  const [projectMessage,setprojectMessage] = useState('')
    const location = useLocation()
    let message = ''
    if(location.state){
        message = location.state.message
    }
    useEffect(()=>{
      setTimeout(()=>{
        fetch('http://localhost:5000/project',{
          method:'GET',
          headers:{
            'Content-Type':'application/json',
          },
        })
        .then((resp)=>resp.json())
        .then((data)=>{
          console.log(data)
          setProjects(data)
          setremoveLoading(true)
        })
        .catch((err)=>{
          console.error('Deu algo errado',err)
        })
      },1000)
    },[])

    function Remove_project(id){
      fetch(`http://localhost:5000/project/${id}`,{
        method:'DELETE',
        headers:{'Content-Type':'application/json'},
      })
      .then((res)=>res.json())
      .then((data)=>{
        //Então aqui eu filtro todos os projetos,  ai quando eu clicar no botão de remover, eu pego o id do projeto que vai ser removido, e checo no banco de dados este array ai todos os projetos que tiver o mesmo id que o passado para a url é excluido
        setProjects(projects.filter((project)=>project.id !==id))
        setprojectMessage('Projeto removido com sucesso')
      })
      .catch((err)=>{
        console.error('Deu algo errado',err)
      })

    }
    return(
        <div className={styles.project_container}>
          <div className={styles.title_container}>
            <h1>Meus projetos</h1>
            <Link_button to="/Projeto_novo" text="Criar projeto"/>
          </div>
          {message && < Message type='success'   msg={message}/>}
          {projectMessage && < Message type='success'   msg={projectMessage}/>}
            <Container customClass="start">
            {projects.length>0 &&
            projects.map((project)=>(
              <Project_card 
              id={project.id}
              budget={project.budget}
              category={project.Category.name}
              name={project.name}
              key={project.id}
              handleRemove={Remove_project}
              />
            ))}
            {!removeloading && <Loader/>}

            {!removeloading && projects.length===0 &&(
              <p>Não tem nenhum projeto cadastrado</p>
            )}
            </Container>
        </div>
    )
}


export default Projects