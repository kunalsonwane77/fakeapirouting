import React from 'react'
import { useContext } from 'react'
import { authcontext } from '../context/Authcontextprovider'


function Cart() {
let {carts,deletecart}=useContext(authcontext)
console.log(carts)

  return (
    
    <>
      {carts.map((el)=>{
        
      return  <div key={el.id} className='cartcard'>
          <img src={el.image} alt="#" />
          <h1>{el.title}</h1>
          <h3>Price : {el.price}</h3>
          <button>buynow</button>
          <button onClick={deletecart} value={el.id}>❌</button>
        
        </div>
      })}
    </>

  )
}

export default Cart