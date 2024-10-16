import {Link} from 'react-router-dom'

function Navbar(){
    return(
        <>
        <ul>
        <li>
          <Link to='/'>home</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/fale'>Fale-conosco</Link>  
        </li>
      </ul>     
        </>
    )
}


export default Navbar