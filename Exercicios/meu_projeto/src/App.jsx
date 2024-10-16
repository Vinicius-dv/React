import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom'
import { useState } from 'react'
import './App.css';
import Hello_word from './components/Hello_word'
import Meu_Nome from './components/Meu_Nome'
import Pessoa from './components/Pessoa';
import Frase from './components/Frase'
import List from './components/List'
import Evento from './components/Evento'
import Form from './components/Form'
import Condicional from './components/Condicional'
import List_itens from './components/List_itens'
import Seunome from './components/Seunome'
import Saudacao from './components/Saudacao'
import Home from './components/Home'
import Login from './components/Login'
import Fale from './components/Fale'
import Navbar from './components/Navbar'
import { FaBeer } from "react-icons/fa"
import { DiReact } from "react-icons/di"

function App() {
  const nome = 'Mario'


 function sum(a,b){
    return a+b
  }

  const url = 'https://via.placeholder.com/150'

  const meusItens = ['civic-si','chevette','bmw-m2']

  {/*Essa é a const do state lift*/}
  const [name,Setname] = useState()

  {/*Para adicionar uma class em um elemento não é class, e sim className*/}
  {/* Outra regra é que quando tem dois ou mais elementos 'lado a lado' precisamos definir um elemento pai para estes elementos 'soltos'*/}
  return (
    <div className="App">
      {/*Aqui eu estou chamando a minha const name*/}
      <h1 className = "meu_nome">Olá {nome}</h1>
      <p>soma: {sum(2,1)}</p>
      {/*Abaixo eu estou botanto uma imagem de forma dinamica no meu código */}
      <img src={url} alt="minha_imagem" />





    {/* Parte de props */}
      <Hello_word />
      < Meu_Nome nome = 'Vinicius'/>
      < Meu_Nome nome = 'Peixão'/>
      < Meu_Nome nome = {nome}/>
      < Pessoa nome = 'vinicius' idade = '15' foto = {url} profissão = 'Desenvolvedor Web' />
      {/* Fim Parte de props */}

      {/*Parte css modules*/}
      <Frase/>
      <Frase/>
       {/*Fim Parte css modules*/}

      {/*Aprendendo sobre o fragmentos*/}
      < List />
      {/*Fim Aprendendo sobre o fragmentos*/}



    {/*Eventos do react*/}
      <h1>Testando eventos</h1>
      <Evento numero='1'/>
      <Form/>
    {/*Fim Eventos do react*/}

    {/*Condicionais*/}
      <h1>Renderização condicional</h1>
      <Condicional/>
    {/*Fim condicionais*/}


    {/*Listas*/}
    <h1>Renderização de listas</h1>
    <List_itens itens={meusItens}/>
    <List_itens itens={[]}/>
    {/*Fim listas*/}


    {/*State lift*/}
     
      <h1>
        Aprendendo sobre o state lift
        <Seunome Setname={Setname}/>
        {name}

        <Saudacao name = {name}/>
      </h1>
    {/*Fim state lift*/}


    {/*Rotas em react*/}
    <Router>

        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login'element={<Login/>} />
          <Route path='/fale' element={<Fale/>} />
        </Routes>
      </Router>
   
    {/*Fim rotas em react*/}

    {/*Começo react-icons*/}
    <h1>Icon do react <DiReact/></h1>
    <FaBeer/>
    {/*Fim react-icons*/}

    
    </div>
 
   )}


export default App


