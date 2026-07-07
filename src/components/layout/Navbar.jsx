import React from 'react'

function Navbar() {
  return (
    <>
  <div className='flex  bg-blue-600 justify-between shadow-md'>
    <div className='h-16 text-white flex items-center px-6 text-3xl font-bold'>
       DevTrack
      </div>
      <h1 className="flex items-center pr-5 text-2xl font-bold text-white cursor-pointer hover:text-gray-200 transition">
        Arvind 
        </h1>
  </div>
    </>
  )
}

export default Navbar