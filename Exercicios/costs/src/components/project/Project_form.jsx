import {useState,useEffect} from "react"
import styles from './Project_form.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import Submit from '../form/Submit'

function Project_form({handleSubmit,btn_text,projectDados}){

    //a Set categories vai começar como um array vazio, assim como o categories, e depois o setcategories, vai atualizando o categories
    const [categories,Setcategories] = useState([])
    const [project,Setproject] = useState(projectDados || {})

    useEffect(()=>{
        fetch("http://localhost:5000/categories",{
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            }
        }).then((res)=> res.json())
        .then((dados)=>{
            //Os dados são as minhas categorias transformadas em json, e eu jogo elas no Setcategories que atuliza o categories
            Setcategories(dados)
        })
        .catch((err)=>{
            console.log('Deu algo errado'+err)
        })
    },[])

    const submit = (e)=>{
        e.preventDefault()
        //console.log(project)
        handleSubmit(project)
    }

    function handleChange(e){
        Setproject({...project,[e.target.name]:e.target.value})
      
    }

    function handleCategory(e){
        Setproject({...project,
            Category:{
            id:e.target.value,
            name:e.target.options[e.target.selectedIndex].text,
        },
    })

    }
   

  

    return(
        <form onSubmit={submit} className={styles.form} action="">
            <Input type="text" text="Nome do projeto" name="name" placeholder="Insira o nome do projeto" handleOnchange={handleChange} value={project.name ? project.name:''}/>

            <Input type="number" text="Orçamento do projeto" name="budget" placeholder="Insira o valor do projeto"  handleOnchange={handleChange} value={project.budget ? project.budget:''}/>

            <Select name="category_id" text="Selecione a categoria" options={categories} handleOnchange={handleCategory} value={project.Category ? project.Category.id:''}/>

            <Submit text={btn_text}/>
        </form>
    )
}

export default Project_form