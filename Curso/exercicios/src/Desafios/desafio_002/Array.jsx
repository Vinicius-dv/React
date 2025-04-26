import Lista_pessoas from "./Lista_pessoas"
function Array(){
    const pessoas = [
        {nome:'Ana',idade:24},
        {nome:'vinicius',idade:15},
        {nome:'Leonardo',idade:32}
    ]
    return(
        <Lista_pessoas array={pessoas}/>
    )
}


export default Array