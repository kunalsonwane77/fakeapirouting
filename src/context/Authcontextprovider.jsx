import React, { useState } from 'react'
import { createContext } from 'react'
import Card from '../Components/Card'
import { Navigate } from 'react-router-dom'

export const authcontext = createContext()




function Authcontextprovider({children}) {

  

let [isauth,setauth]=useState(false)

let login=()=>{
    setauth(true)
    alert("YOu are login")
    
}

    
let logout=()=>{
    
    setauth(false)
    alert("Login to continew")
}

let baseurl=(`http://localhost:3000/products`)


 
   let [carts,setcarts]= useState([])

    async function getcartdata(id) {
        

       let exist = carts.filter((el)=>{
         return el.id==id
       })
        console.log(exist)
       if(exist.length>0){
         alert("item alredy exist in cart")
         return
       }

        let data =await fetch(`${baseurl}/${id}`)
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
     <authcontext.Provider value={{isauth,login,logout,getcartdata,carts,setcarts,deletecart,baseurl}}>
        {children}
     </authcontext.Provider>
  )
}

export default Authcontextprovider
