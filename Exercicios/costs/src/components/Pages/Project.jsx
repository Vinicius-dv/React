import styles from './Project.module.css'
import { useParams } from 'react-router-dom'
import { useState,useEffect} from 'react'
import Loader from '../layout/Loader'
import Container from '../layout/Container'
import Project_form from '../project/Project_form'
import Message from '../layout/Message'
import Service_form from '../Service/Service_form'
import Service_card from '../Service/Service_card'
import {parse,v4 as uuidv4} from 'uuid'
function Project(){
    //Esse useParams serve para pegar apenas os parametros de uma url, como por exemplo: o id de uma url, ai quando eu clico em editar o projeto ele pega apenas o id do projeto
    const {id} = useParams()

    const [project,setProject] = useState([])
    const [services,setServices] = useState([])
    const [showProject_form,setshowProject_form] = useState(false)
    const [showService_form,setShowService_form] = useState(false)
    const [message,setMessage] = useState('')
    const [type,setType] = useState('success')
    useEffect(()=>{
        setTimeout(()=>{       
        fetch(`http://localhost:5000/project/${id}`,{
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            },
        })
        .then(res=>res.json())
        .then((dados)=>{
            //ENtão aqui eu pego os dados do projeto que foi clicado
            setProject(dados)
            setServices(dados.services)
        })
        .catch((err)=>{
            console.error('Deu algo errado',err)
        })
    },1000)
    },[id])

    function createService(project){
        //Desta forma eu consigo acessar o ultimo serviço adicionado
        const last_service = project.services[project.services.length -1]
        //Esse uuid cria um id unico para o ultimo service      
        last_service.id = uuidv4()

        const lastService_cost =  last_service.cost

        //Aqui eu pego o custo inteiro dos serviços adicionados
        const Newcost = parseFloat(project.costs) + parseFloat(lastService_cost)


        if(Newcost > parseFloat(project.budget)){
            setMessage('Orçamento ultrapassado,verifique o valor do serviço')
            setType('error')
            //Aqui eu tiro o serviço do projeto que passou do orçamento do cliente
            project.services.pop()
            setProject({ ...project })
            return false
        }

        project.costs = Newcost

        fetch(`http://localhost:5000/project/${project.id}`,{
            method:'PATCH',
            headers:
            {
                'Content-Type':'application/json',
            },
            body: JSON.stringify(project),
        })
        .then((res)=>res.json())
        .then((data)=>{
            setShowService_form(false)
        })
        .catch((err)=>{
            console.error('Deu algo errado',err)
        })

       
    }

    function removeService(id,cost){
        const serviceUpdtate = project.services.filter(
            //Então no filter só vai ficar os serviços que vai ser removido com base no id 
            (service) => service.id !==id
        )
        const projectUpdate = project
        //Então aqui eu atualizo o project que é onde contem os dados de todo os projetos com as novas informações
        projectUpdate.services = serviceUpdtate
        //Aqui eu atualizo os projetos com o novo cost
        projectUpdate.costs = parseFloat(projectUpdate.costs) - parseFloat(cost)

        fetch(`http://localhost:5000/project/${projectUpdate.id}`,{
            method:'PATCH',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(projectUpdate)
        })
        .then((res)=> res.json())
        .then((data)=>{
            setProject(projectUpdate)
            setServices(serviceUpdtate)
            setMessage('Serviço removido com sucesso')
        })
        .catch((err)=>{
            console.log(err)
        })

        
    }

    function toggleProject_form(){
        setshowProject_form(!showProject_form)
    }

    function toggleService_form(){
        setShowService_form(!showService_form)
    }



    function edit_post(project){

        setMessage('')
        if(project.budget <project.costs){
            setMessage('O orçamento não pode ser menor que o custo do projeto')
            setType('error')
            return false
        }

        fetch(`http://localhost:5000/project/${project.id}`,{
            method:'PATCH',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(project)
        })
        .then(res=>res.json())
        .then((data)=>{
            setProject(data)
            setshowProject_form(false)
            setMessage('Projeto editado com sucesso')
            setType('success')
           
        })
        .catch((err)=>{
            console.error('Deu algo errado',err)
        })
    }
    return(
        <>
        {project.name? (
            <div className={styles.project_details}>
               <Container customClass="column">
                    {message && <Message type={type} msg={message}/>}
                <div className={styles.details_container}>
                    <h1>Projeto: {project.name}</h1>
                    <button className={styles.btn} onClick={toggleProject_form}>{!showProject_form? 'Editar projeto':'Fechar'}</button>
                    {!showProject_form? (
                        <div className={styles.project_info}>
                            <p>
                                <span>Categoria:</span> {project.Category.name}
                            </p>

                            <p>
                                <span>Total do orçamento:</span> R${project.budget}
                            </p>

                            <p>
                                <span>Total utilizado:</span> R${project.costs}
                            </p>
                        </div>
                    ):(
                        <div className={styles.project_info}>
                            <Project_form handleSubmit={edit_post} btn_text='Editar' projectDados={project}/>
                        </div>
                    )}
                </div>

                <div className={styles.service_form_container}>
                    <h2>Adicione um serviço:</h2>
                    <button className={styles.btn} onClick={toggleService_form}>
                        {!showService_form ? 'Adicionar serviço':'Fechar'}
                    </button>

                    <div className={styles.project_info}>
                    {showService_form && (
                        <Service_form handleSubmit={createService} btn_text='Adicionar serviço' project_data={project}/>
                    )   
                    }

                </div>
            </div>

                <h2>Serviços</h2>

                <Container customClass='start'>
                  {services.length > 0 &&
                  services.map((service)=>(
                    <Service_card  id={service.id} nameVincius={service.nameVincius} cost={service.cost} description={service.description} key={service.id} handleRemove={removeService}/>
                  ))
                  }
                  {services.length ===0 &&
                    <p>Não a serviços cadastrados</p>
                  }
                </Container>



              </Container>
            </div>
        ):(
            <Loader/>
        )}
        </>
    )
}

export default Project