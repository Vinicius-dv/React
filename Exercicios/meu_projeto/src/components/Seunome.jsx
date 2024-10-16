import { useState } from 'react'
function Seunome({Setname}){
    return(
        <>
        <p>Digite seu nome</p>
        <input type="text" name="name" id="name"placeholder='Digite seu nome aqui' onChange={(e)=>Setname(e.target.value)}/>
        </>
    )
}

export default Seunome