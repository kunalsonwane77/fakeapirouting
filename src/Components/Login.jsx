import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { authcontext } from '../context/Authcontextprovider'
import { Navigate } from 'react-router-dom'


function Login() {

  let { login, logout, isauth } = useContext(authcontext)

  let [logindata, setlogindata] = useState("")
  let [passdata,setpassdata]=useState("")
  let [userdata, setuserdata] = useState([])

  let [islogin, setislogin] = useState(true)



  async function getuserdata() {
    let data = await fetch("http://localhost:3000/users")
    let actualdata = await data.json()
    setuserdata(actualdata)
  }


  useEffect(() => {
    getuserdata()
  }, [])



  function handlesignin() {

   let check= false

    userdata.map((el) => {
      if(el.email==logindata && el.password == passdata){
        login()
        check=true
        return;
      }
     
    })

    if(!check){
      alert("Please Enter correct email and password or Signup")
    }

    setlogindata("")
    setpassdata("")

  }




  //signup 

  let intialval ={
    name:"",
    email:"",
    password:"",

  }
let [signupdata,setsignupdata]=useState(intialval)


function handlechange(e){

  let data = e.target.value
  setsignupdata({...signupdata,[e.target.name]:data})
 }


 async function hadlesignup(){
  console.log(signupdata)
   await fetch ("http://localhost:3000/users",{
    method:"POST",
    body:JSON.stringify(signupdata),
    headers:{
      "Contenst-Type": "application/json"
    }
   })
   

   setsignupdata(intialval)

 }
    



  return (
    <div>

      <div className='logindata' style={{ display: islogin ? "block" : "none" }}>
        <input type="text" name="" id="" placeholder='enter email to login' onChange={(e) => setlogindata(e.target.value)} value={logindata}/>
        <input type="text" name="" id="" placeholder='enter password' onChange={(e)=>setpassdata(e.target.value)} value={passdata} />
        <div><button onClick={handlesignin}>submit</button></div>

      </div>


      <div style={{ display: islogin ? "none" : "block" }} className='logindata'>
          <input type="text" name="name" id="" placeholder='enter full name' onChange={handlechange} value={signupdata.name}/>
          <input type="text" name="email" id="" placeholder='enter email ' onChange={handlechange} value={signupdata.email}/>
          <input type="text" name="password" id="" placeholder='enter password' onChange={handlechange} value={signupdata.password}/>
          <button onClick={hadlesignup}>submit</button>
        
      </div>

      <div className='sign'><button onClick={() => setislogin(true)}>sign in</button>
        <button onClick={() => setislogin(false)}>signup</button></div>







      <h1>Login page</h1>
      <button onClick={() => {
        login()
      }} className='log'>Login</button>
      <button onClick={() => {
        logout()
      }} className='log'>Logout</button>
    </div>
  )
}

export default Login