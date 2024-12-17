import React from 'react'
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { useContext } from 'react';
import { authcontext } from '../context/Authcontextprovider';
import { Link } from 'react-router-dom';

function Cartinfo() {

  let {baseurl,getcartdata}= useContext(authcontext)

    let val= useParams()
    console.log(val)

     let [error,seterror] = useState(false)
       let [loading,setloading]= useState(false)
       let [card,setcards]= useState([])


        async function getproductinfo() {
            setloading(true)
            let data =await fetch(`${baseurl}/${val.userid}`)
            let actualdata = await data.json()  
            .catch((er)=>{
                seterror(true)
                console.log(er)
            }).finally(()=>{
               setloading(false)
              
            })
            setcards(actualdata)
        console.log(actualdata)

         
        }
    
    
        useEffect(()=>{
            getproductinfo()
        },[])

  return (
    <div className='cardinfo'>
         {loading && <h1>Loading...</h1>}
        <img src={card.image} alt="#" />
        <h1>Price: $ {card.price}</h1>
        <h3>{card.category}</h3>
        <h2>{card.title}</h2>
        <p>{card.description}</p>
        <Link to={"/cart"}><button onClick={()=>{
          getcartdata(val.userid)
        }} className='log'>Buynow</button></Link>
        {/* <p>{card.rating.rate}</p> */}
       

    </div>
  )
}

export default Cartinfo;