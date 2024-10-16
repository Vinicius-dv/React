import PropTypes from 'prop-types'
function Item({carro = 'Civic-si turbão',lançamento = 'Descubra peixão'}){   
    return(
        <>
        <li>{carro} - {lançamento}</li>
        </>
    )
}


Item.propTypes = {
    carro: PropTypes.string.isRequired,
    lançamento:PropTypes.number
}
export default Item