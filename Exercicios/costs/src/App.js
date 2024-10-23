import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './components/Pages/Home';
import Company from './components/Pages/Company';
import Contato from './components/Pages/Contato';
import Projeto_novo from './components/Pages/Projeto_novo';
import Container from './components/layout/Container';
import Nav_bar from './components/layout/Nav_bar';
import Footer from './components/layout/Footer';
import Projects from './components/Pages/Projects';
function App() {
  return (
    <Router>

      <Nav_bar/>
      <Container customClass="min-height">
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/Projects' element={<Projects/>}/>
        <Route exact path='/Company' element={<Company/>}/>
        <Route exact path='/Contato' element={<Contato/>}/>
        <Route exact path='/Projeto_novo' element={<Projeto_novo/>}/>
      </Routes>
      </Container>
      <Footer/>
    </Router>
   

  )
}

export default App;
