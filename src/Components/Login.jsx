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
        }}className='log'>Login</button>
        <button onClick={()=>{
          logout()
        }} className='log'>Logout</button>
    </div>
  )
}

export default Login