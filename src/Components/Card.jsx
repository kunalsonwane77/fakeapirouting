import React from 'react'

function Card({img,category,price,title}) {
  return (
    <div className='card'>
        <img src={img} alt="#" />
        <h1>{title}</h1>
        <p>{category}</p>
        <h2>price: $ {price}</h2>
        <button>Add to cart</button>
    </div>
  )
}

export default Card