
import Item from './Item'
function List(){
    return(
        <>
        <h1>Minha lista</h1>
        <p>Está é minha lista de carros favoritos:</p>
        <ul>
            <li>Civic-si 2008</li>
            <li>Chevette 1987</li>
            <li>Golf mk4 1.6</li>
            <li>Mazda-rx7</li>
            <Item carro = 'Maverick v8' lançamento={1968}/>
        </ul>

        </>
    )
}

export default List