import React from 'react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { authcontext } from '../context/Authcontextprovider'

function Navbar() {


  let {isauth}=useContext(authcontext)

 

  let links = [
   {to:"/",page:"Home"},
   {to:"/cart",page:"Cart"},
   {to:"/about",page:"About"},
   {to:"/login",page:"Login"}

  ]

  return (
    <div className='navbar'>
       

        {/* <NavLink to={"/"}><h2>Home</h2></NavLink>
        <NavLink to={"/cart"}><h2>Cart</h2></NavLink>
        <NavLink to={"/about"}><h2>About</h2> </NavLink>
        <NavLink to={"/login"}><h2>Login</h2></NavLink> */}

       {links.map((el)=>{
          return <NavLink className={({isActive})=>{
            return isActive? "active":"notactive"
          }
        } to={el.to}
        key={el.page}
        
        
        ><h2>{el.page}</h2></NavLink>
       })}

       {isauth?<p>you are Logedin</p>:<p>Login to view Products</p>}

    </div>
  )
}

export default Navbar