import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './components/Pages/Home';
import Company from './components/Pages/Company';
import Contato from './components/Pages/Contato';
import Projeto_novo from './components/Pages/Projeto_novo';
import Container from './components/layout/Container';
import Nav_bar from './components/layout/Nav_bar';
import Footer from './components/layout/Footer';
import Projects from './components/Pages/Projects';
import Project from './components/Pages/Project';

function App() {
  return (
    <Router>

      <Nav_bar/>
      <Container customClass="min-height">
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route  path='/Projects' element={<Projects/>}/>
        <Route  path='/Company' element={<Company/>}/>
        <Route  path='/Contato' element={<Contato/>}/>
        <Route  path='/Projeto_novo' element={<Projeto_novo/>}/>
        <Route  path='/project/:id' element={<Project/>}/>
      </Routes>
      </Container>
      <Footer/>
    </Router>
   

  )
}

export default App;
