import React from 'react'
import { useState } from 'react';
import Layout from '../components/layout/Layout'
import ProjectCard from '../components/projects/ProjectCard'
function Projects() {
  const [projects,setProjects] = useState([
  {
    id: 1,
    title: "DevTrack Dashboard",
    status: "Completed",
  },
  {
    id: 2,
    title: "Portfolio Website",
    status: "Pending",
  },
  {
    id: 3,
    title: "Weather App",
    status: "Completed",
  },
]);
function addProject(){
 setProjects([
  ...projects,{
    id:4,
    title:"Chat Application",
    status:"Pending",
  },
 ]); 
}
  return (
    <Layout>
   <div className="flex justify-between items-center mb-6">
   <div>
      <h1 className="text-3xl font-bold">Projects</h1>
      <p className="text-gray-500">
      Manage all your projects
      </p>
    </div>

  <button
    onClick={addProject}
    className="bg-blue-600 text-white px-4 py-2 rounded-lg"
  >
    + Add Project
  </button>
</div>
      <div className='flex flex-col gap-4 '>
        {projects.map((project)=>(
          <ProjectCard
          key={project.id}
          title={project.title}
          status={project.status}
          />
        ))}
      </div>

    </Layout>
  )
}

export default Projects