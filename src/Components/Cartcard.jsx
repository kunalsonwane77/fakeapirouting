import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { authcontext } from '../context/Authcontextprovider'



function Cartcard({id,image,title,price,}) {


    let {carts,setcarts,deletecart}=useContext(authcontext)

    let [quentity,setquentity]=useState(1)
    let [cprice,setcprice]=useState(price)

    function itemadd(){
      
        setquentity(quentity+1)
        setcprice(cprice+price)
      
    }
    function subitem(e){
      
      setquentity(quentity-1)
    
      if(quentity==1){
        let btnval= e.target.value
        let delcart=carts.filter((el)=>{
          return btnval!=el.id
        })
        setcarts(delcart)
      }

      setcprice(cprice-price)
    
    }



  return (
    
        <div key={id} className='cartcard'>
          <img src={image} alt="#" />
          <h1>{title}</h1>
          <h3>Price : $ {(cprice).toFixed(2)}</h3>

           <div>
            <button value={id} onClick={itemadd}>+</button>{quentity}<button value={id} onClick={subitem}>-</button>
          </div>

          <button>buynow</button>
          <button onClick={deletecart} value={id}>❌</button>
        
        </div>
    
  )
}

export default Cartcard