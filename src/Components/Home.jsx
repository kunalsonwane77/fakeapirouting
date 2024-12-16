import React, { useEffect, useState } from 'react'
import Card from './Card'
import { Link, Navigate } from 'react-router-dom'
import { useContext } from 'react'
import { authcontext } from '../context/Authcontextprovider'


function Home() {
    

  let {isauth,getcartdata} = useContext(authcontext)

  


   let [error,seterror] = useState(false)
   let [loading,setloading]= useState(false)
   let [cards,setcards]= useState([])
    async function getproduct() {
        setloading(true)
        let data =await fetch("https://fakestoreapi.com/products")
        let actualdata = await data.json().catch((er)=>{
            seterror(true)
            console.log(er)
        }).finally(()=>{
           setloading(false)
        })

       setcards(actualdata)
      
    }


    useEffect(()=>{
        getproduct()
    },[])
    
    if(!isauth){
      return <Navigate to={"/login"}/>
    }

   



  return (
    <div className='container'>
      
         {/* {loading && <h1>Loading...</h1>} */}
         {loading?<h1>Loading...</h1>:""}
         {
            cards.map((el)=>{
             return <div className='cardmain' key={el.id}>
                  <Link to={`/${el.id}`} key={el.id}><Card key={el.id} category={el.category} price ={el.price} img={el.image} title={el.title} id={el.id}/></Link> 
                  <button onClick={()=>{
                    getcartdata(el.id)
                  }}>Add to cart</button>
                
             </div>
            })
         }
    </div>
  )
}

export default Home