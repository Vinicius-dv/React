import styles from '../project/Project_form.module.css'
import { useState } from 'react'
import Input from '../form/Input'
import Submit from '../form/Submit'

function Service_form({handleSubmit,btn_text,project_data}){
    const [service,setService] = useState([])

    
    function submit(e){
        e.preventDefault()
        //Então aqui eu vou botando mais serviços dentro de serviços,pq o usuario pode criar mais de um serviço
        project_data.services.push(service)
        handleSubmit(project_data)
        console.log(project_data)
    }

    function handleChange(e){
        //Então a cada digito que o usuario digitar no input eu pego o valor e jogo na propriedade name.
        setService({...service,[e.target.name]:e.target.value})
    }


    return(
      <form className={styles.form} onSubmit={submit}>
        <Input type='text' text='Nome do serviço' name='nameVincius' placeholder='Insira o nome do serviço' handleOnchange={handleChange}/>
        <Input type='number' text='Custo do serviço' name='cost' placeholder='Insira o valor total do projeto' handleOnchange={handleChange}/>
        <Input type='text' text='Nome do serviço' name='description' placeholder='Insira a descrição do projeto' handleOnchange={handleChange}/>
        <Submit  text={btn_text}/>
      </form>
    )
}


export default Service_form