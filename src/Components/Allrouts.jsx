import React from 'react'
import { Route,Routes, } from 'react-router-dom'
import App from '../App'
import About from './About'
import Login from './Login'
import Cart from './Cart'
import Home from './Home'
import Cartinfo from './cartinfo'

function Allrouts() {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
           <Route path='/cart' element={<Cart/>}/>
           <Route path='/about' element={<About/>}/>
           <Route path='/login' element={<Login/>}/>
           <Route path='/:userid' element={<Cartinfo/>}/>
          
        </Routes>
    </div>
  )
}

export default Allrouts