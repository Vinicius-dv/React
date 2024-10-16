import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom'
import Home from './components/Pages/Home';
import Company from './components/Pages/Company';
import Contato from './components/Pages/Contato';
import Projeto_novo from './components/Pages/Projeto_novo';
import Container from './components/layout/Container';
function App() {
  return (
    <Router>
    <div>
        <Link to='/'>Home</Link>
        <Link to='/Company'>Company</Link>
        <Link to='/Contato'>Contato</Link>
        <Link to='/Projeto_novo'>Projeto_novo</Link>
      </div>  
      <Container customClass="min-height">
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/Company' element={<Company/>}/>
        <Route exact path='/Contato' element={<Contato/>}/>
        <Route exact path='/Projeto_novo' element={<Projeto_novo/>}/>
      </Routes>
      </Container>
      <p>Footer</p>
    </Router>
   

  )
}

export default App;
