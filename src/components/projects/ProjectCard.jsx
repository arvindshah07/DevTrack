import React from 'react'

function ProjectCard({title,status,id,deleteProject,editProject,}) {
  return (
    <div className='bg-white shadow-md p-6 rounded-xl m-2 hover:shadow-lg transition'>
      <h2 className='text-gray-800 text-xl font-semibold'>{title}</h2>
     <div className='flex justify-between items-center mt-4'>
       <p className={
        status==="Completed"? "bg-green-100 text-green-700 px-3 py-1 rounded-full inline-block mt-2":
        "bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full inline-block mt-2"
      }> {status}</p>
      <button
      onClick={()=>editProject(id)}
      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-3xl transition cursor-pointer"
      >Edit
      </button>
      <button 
      onClick={()=>deleteProject(id)}
      className='bg-red-600 rounded-3xl p-2 cursor-pointer text-red-300'>
        Delete
        </button>
     </div>
    </div>
  )
}

export default ProjectCard