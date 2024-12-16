import React, { useEffect } from 'react'
import { useContext } from 'react'
import { authcontext } from '../context/Authcontextprovider'
import { Link } from 'react-router-dom'



function Card({img,category,price,title,id}) {


let {getcartdata}=useContext(authcontext)


  return (
    <div className='card'>
        <img src={img} alt="#" />
        <h1>{title}</h1>
        <p>{category}</p>
        <h2>price: $ {price}</h2>
    
    </div>
  )
}

export default Card