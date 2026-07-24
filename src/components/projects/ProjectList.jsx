import React from 'react'
import ProjectCard from './ProjectCard'

function ProjectList({
  sortedProjects,
  deleteProject,
  editProject
}) {
  return (
    <>
         <div className="flex flex-col gap-5">
        {sortedProjects.length === 0 ? (
          <p  className="text-center text-gray-500 text-lg">
            🔍 No projects found
          </p>
        ) :
        (
            sortedProjects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}            
            title={project.title}
            status={project.status}
            deleteProject={deleteProject}
            editProject={editProject}
          />
        ))
        )}
      </div>
    </>
  )
}

export default ProjectList