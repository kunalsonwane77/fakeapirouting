import React from 'react'
import { useContext } from 'react'
import { authcontext } from '../context/Authcontextprovider'


function Login() {

  let {login,logout}= useContext(authcontext)

     



  return (
    <div>
        <h1>Login page</h1>
        <button onClick={()=>{
          login()
        }}>Login</button>
        <button onClick={()=>{
          logout()
        }}>Logout</button>
    </div>
  )
}

export default Login