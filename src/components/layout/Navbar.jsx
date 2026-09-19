import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import UserContext from '../../context/UserContext'


function Navbar() {
  const navigate=useNavigate();
  const {user}=useContext(UserContext);
  const handleLogout=()=>{
    localStorage.removeItem("token");
    navigate("/login");
  }
  return (
    <>
  <div className='flex  bg-blue-600 justify-between shadow-md'>
    <div className='h-16 text-white flex items-center px-6 text-3xl font-bold'>
       DevTrack
      </div>
      <h1 className="flex items-center pr-5 text-2xl font-bold text-white cursor-pointer hover:text-gray-200 transition">
        {user ? user.name : "Loading..."}
      </h1>
  </div>
      <button
       onClick={handleLogout}
       className='px-3 py-2 ml-2 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-600 transition cursor-pointer'
      >
        Logout
      </button>
    </>
  )
}

export default Navbar