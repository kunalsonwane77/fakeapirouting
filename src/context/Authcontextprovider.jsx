import React, { useState } from 'react'
import { createContext } from 'react'
import Card from '../Components/Card'

export const authcontext = createContext()




function Authcontextprovider({children}) {

  

let [isauth,setauth]=useState(false)

let login=()=>{
    setauth(true)
}

    
let logout=()=>{
    setauth(false)
}



 
   let [carts,setcarts]= useState([])

    async function getcartdata(id) {
      
        let data =await fetch(`https://fakestoreapi.com/products/${id}`)
        let actualdata = await data.json()

       setcarts([...carts,actualdata])
       
      
    }

    function deletecart(e){
      let delval= e.target.value
      let delitem= carts.filter((el)=>{
         return delval!=el.id
     })
     setcarts(delitem)
    }

 


  return (
     <authcontext.Provider value={{isauth,login,logout,getcartdata,carts,deletecart}}>
        {children}
     </authcontext.Provider>
  )
}

export default Authcontextprovider
