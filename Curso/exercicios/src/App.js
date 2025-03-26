//import Ex001 from '../src/Exercicios/Ex001'
function App() {
    const user = {
        nome:'vinicius',
        desc:'fala meu brother'
    }
  return(
    <section>
        <h1>{user.nome}</h1>
        <p>{user.desc}</p>
    </section>
  )
}

export default App
