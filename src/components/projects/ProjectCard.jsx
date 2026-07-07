import React from 'react'

function ProjectCard({title,status}) {
  return (
    <div className='bg-white shadow-md p-6 rounded-xl m-2'>
      <h2 className='text-gray-800 text-xl font-semibold'>{title}</h2>
      <p className={
        status==="Completed"? "bg-green-100 text-green-700 px-3 py-1 rounded-full inline-block mt-2":
        "bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full inline-block mt-2"
      }> {status}</p>
    </div>
  )
}

export default ProjectCard