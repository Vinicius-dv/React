import {useState} from "react"
function Carrinho(){
    const [itens,setItem] = useState([
        {produto:'Celular',preço:1400,add_produto:'Adicionar Produto',key:'ola',key_02:'peixe'},
        {produto:'Controle xbox',preço:450,add_produto:'Adicionar Produto'},
        {produto:'Salgadinho',preço:5,add_produto:'Adicionar Produto'},
        {produto:'Refrigerante',preço:3.50,add_produto:'Adicionar Produto'}
    ])
    const [preço,setPreço] = useState(0)
    const [historico_itens,setHisto] = useState([])
    function gerenciar_car(index,preço,produto){
        setItem(array=> array.filter((item,i)=>i!==index))
        setHisto(prev=>[...prev,{prod:produto,preço:preço}])
        setPreço(prev=> prev+=preço)
    }
    function zerar_car(){
        setPreço(0)
    }
    return(
        <div>
            {itens.map((i,index)=>(
                <div key={index}>
                <h1>{i.produto}</h1>
                <p> valor: R${i.preço}</p>
                <button onClick={()=>gerenciar_car(index,i.preço,i.produto)}>{i.add_produto}</button>
                </div>
            ))}
            <p>Valor carrinho:{preço}</p>
            <button onClick={zerar_car}>Zerar carrinho</button>
            <div>
                <h1>Histórico de compras:</h1>
                {historico_itens.map((i,index)=>(
                    <div key={index}>
                    <h1>Nome do produto:{i.prod}</h1>
                    <p> valor da compra: R${i.preço}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}


export default Carrinho