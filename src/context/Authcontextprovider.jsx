import React, { useState } from 'react'
import { createContext } from 'react'

export const authcontext = createContext()




function Authcontextprovider({children}) {

let [isauth,setauth]=useState(false)

let login=()=>{
    setauth(true)
}

    
let logout=()=>{
    setauth(false)
}


  return (
     <authcontext.Provider value={{isauth,login,logout}}>
        {children}
     </authcontext.Provider>
  )
}

export default Authcontextprovider
