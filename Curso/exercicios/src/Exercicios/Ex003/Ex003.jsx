function TodoList() {
    const name = 'Gregorio Y. Zara'
    function ola(ola_mundo){
      return <h1>{ola_mundo}</h1>
    }
    return (
      <>
        <h1>{name}'s To Do List</h1>
        <div>
            {ola('fala meu amigo')}
        </div>
      </>
    )
  }


  export default TodoList
  