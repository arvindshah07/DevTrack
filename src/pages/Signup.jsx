import React from 'react'
import { useState } from 'react'
import Layout from '../components/layout/Layout';
import { Link } from 'react-router-dom';
function Signup() {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[confirmPassword,setConfirmPassword]=useState("");
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(password!==confirmPassword){
      alert("Password Doesn't match !")
      return ;
    }
    if(name.trim()==="" || email.trim()=="" || password.trim()===""
     || confirmPassword.trim()===""){
      alert("Please fill all fields");
      return ;
    }
    console.log(name,email,password);
   setName("");
   setEmail("");
   setPassword("");
   setConfirmPassword("");    

  }
  return (
      <Layout>
    <div className='flex justify-center bg-gray-100 rounded-lg shadow-md min-h-screen'>

      <form className='bg-white p-8 rounded-lg shadow-lg w-96'
      onSubmit={handleSubmit}
      >

<div className=''>
        <label className='  font-medium block mb-2' htmlFor='name'>Name</label>
        <input type="text" placeholder='Enter Your Name' 
         value={name} className='px-3 py-2 mb-3 border rounded-md w-full outline-none focus:ring-2 focus:ring-blue-500'
         id='name'
         onChange={(e)=>setName(e.target.value)}
         required
        />
        </div>
      <div>
         <label className='font-medium mb-2 block'>Email</label>
         <input type="email" placeholder='Enter Your Email' value={email}
         className='border w-full px-3 py-2 mb-3 outline-none rounded-md focus:ring-2 focus:ring-blue-500'
         onChange={(e)=>(setEmail(e.target.value))} 
         />
      </div>
      <div>
        
        <label className='font-bold block mb-2'>Password</label>
       <input type="password" placeholder='Password'
       value={password}
       className='border w-full px-3 py-2 mb-3 outline-none rounded-md focus:ring-2 focus:ring-blue-500'
       onChange={(e)=>{(setPassword(e.target.value))}}
       >

       </input>
       <input type="password" placeholder='Confirm Password'
       value={confirmPassword}
       onChange={(e)=>setConfirmPassword(e.target.value)}
       className='border w-full px-3 py-2 mb-3 outline-none rounded-md focus:ring-2 focus:ring-blue-500'></input>        
      </div>
      <div>
        <button className='bg-blue-600 w-full mb-2 text-white font-medium p-2 rounded-lg hover:bg-blue-700 cursor-pointer'
        type="submit"
        >Create Account</button>
      </div>

      <div className='flex'>
      <p>Already have an account ?</p>
      <Link to="/login" className='text-blue-600 font-medium hover:underline mx-3'>Login</Link>
      </div>


      </form>
        
    </div>      
      </Layout>
  )
}

export default Signup