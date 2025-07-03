import {useState} from 'react'
function Main(){
   const carros = ['Chevette','Civic si','Opala','Bmw m2','Caravan','Jetta gli','Rx7']
   function listar_car(){
    return carros.map((c,i)=>(
       <p key={i}>{c}</p>
    ))
   }
   /* {carros.map((item,index)=>(
            <p key={index}>{item}</p>
       ))}*/
   return(
      <div>
         {listar_car()}
      </div>
   )
}
export default Main