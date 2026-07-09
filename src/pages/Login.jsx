import React,{useState} from 'react'
import Layout from '../components/layout/Layout'
import { Link } from 'react-router-dom';

function Login() {
const [email,setEmail]=useState("");
const[password,setPassword]=useState("");

const handleSubmit=(e)=>{
  e.preventDefault();
  console.log({
    email,password
  });
  
}

  return(
    <Layout>
      <div className='flex justify-center items-center min-h-screen bg-gray-100'>
      <form onSubmit={handleSubmit}
      className='bg-white p-8 rounded-lg shadow-lg w-96 '
      >
        <h2 className='text-2xl font-bold text-center mb-6'>
          Welcome Back
        </h2>
        <div className='space-y-6'>

        <div className='mb-6'>
        <label className='block mb-2 font-medium' htmlFor='email'
        >Email
        </label>
        <input type="email"
        placeholder='Enter your email'
         value={email}
        onChange={(e)=>setEmail(e.target.value)}
        className='w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500'
        required
        id='email'/>
        </div>
        
        <div className='mb-6'>
        <label htmlFor="password"
          className='block mb-2 font-medium'>
          Password
        </label>
        <input
        id='password' 
        type="password"
        required
        placeholder='Enter your password'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        className='w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500'
        />
        </div>

        </div>

        <button type="submit"
        className='w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 cursor-pointer'
        >Login</button>
        <p className='text-center mt-4'>
          Don't have an account ? {" "}
        <Link to="/signup"
        className='text-blue-600 font-medium hover:underline'
        >Sign Up</Link>
        </p>
      </form>      
      </div>
    </Layout>
  )
  
}

export default Login