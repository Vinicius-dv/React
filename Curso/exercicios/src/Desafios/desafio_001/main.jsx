import BtnComponente from "./comp_btn"
function main(){
    let valor_desafio = 0
    
    function btn_add(){
        valor_desafio +=1
        document.getElementById('p_valor').innerText = valor_desafio
    }
    function btn_rem(){
        if(valor_desafio == 0){
            alert('não da para diminuir')
            return
        }
        valor_desafio -=1
        document.getElementById('p_valor').innerText = valor_desafio
    }
    return(
        <main>
            <div>
                <h1>Fala meu querido, aumente ou diminua o valor abaixo!</h1>
                <BtnComponente id="btn_add" name="btn_add" valor="Clique para aumentar o valor" click={btn_add}/>
                <BtnComponente id="btn_rem" name="btn_rem" valor="Clique para diminuir o valor" click={btn_rem}/>
                <p id="p_valor">0</p>
            </div>
        </main>
    )
}

export default main