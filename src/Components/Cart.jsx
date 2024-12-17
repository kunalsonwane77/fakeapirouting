import React, { useState } from 'react'
import { useContext } from 'react'
import { authcontext } from '../context/Authcontextprovider'
import Cartcard from './cartcard'


function Cart() {
let {carts}=useContext(authcontext)




  return (
    
    <>
    {console.log(carts)}
    {carts.length==0 && <h1>Your cart is Empty</h1>}
      {carts.map((el)=>{
        
      return <Cartcard key={el.id} id={el.id} image={el.image} price={el.price} title={el.title}/>})}
    </>

  )
}

export default Cart