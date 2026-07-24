import React, { useState , useEffect } from "react";
import Layout from "../components/layout/Layout";
import ProjectCard from "../components/projects/ProjectCard";
import ProjectForm from "../components/projects/ProjectForm";
import SearchAndSort from "../components/projects/SearchAndSort";
import StatsSection from "../components/projects/StatsSection";
import ProjectList from "../components/projects/ProjectList";

function Projects() {
  const [projects, setProjects] = useState([
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

  const [projectName, setProjectName] = useState("");
  const [status, setStatus] = useState("Pending");
  const [editingId,setEditingId]=useState(null);
  const [searchTerm,setSearchTerm]=useState("");
  const [sortOption, setSortOption] = useState("Default");
  useEffect(()=>{
    const savedProjects=localStorage.getItem("projects");
    if(savedProjects){
      setProjects(JSON.parse(savedProjects));
    }
  },[]);
 
  const totalProjects=projects.length ;
  const completedProjects=projects.filter(
    (project)=> project.status === "Completed"
  ).length ;

  const pendingProjects=projects.filter(
    (project)=>project.status === "Pending"
  ).length ;
  
  const filteredProjects=projects.filter((project)=>
  project.title
  .toLowerCase()
  .includes(searchTerm.toLowerCase())
  );
  useEffect(()=>{
   localStorage.setItem("projects",JSON.stringify(projects));
  },[projects]) ;

  function addProject() {
    if (projectName.trim() === "") return;
      const projectExists = projects.some(
      (project)=>
        project.title.toLowerCase().trim()===
      projectName.toLowerCase().trim()
        );

    if (projectExists) {
    alert("Project already exists!");
    return;
    }

    setProjects([
      ...projects,
      {
        id: projects.length + 1,
        title: projectName,
        status
      },
    ]);

    setProjectName("");
    setStatus("Pending");
  }

  function deleteProject(id) {
  setProjects(
    projects.filter((project) => project.id !== id)
  );
  }

  function editProject(id) {

  const project = projects.find((project) => project.id === id);
  setEditingId(project.id);
  setProjectName(project.title);
  setStatus(project.status);
  }

  function updateProject() {
    setProjects(
      projects.map((project)=>{
        if(project.id === editingId){
          return{
            ...project,
            title:projectName,
            status:status,
          };
        }
        return project ;
      })
    );
    setEditingId(null);
    setProjectName("");
    setStatus("Pending");
  }
 
  const sortedProjects=[...filteredProjects];

    if(sortOption==="A-Z"){
       sortedProjects.sort((a,b)=>
       a.title.localeCompare(b.title)
       );
    }
    else if(sortOption==="Z-A"){
      sortedProjects.sort((a,b)=>
      b.title.localeCompare(a.title)
    )
    }
    else if(sortOption==="Completed"){
      sortedProjects.sort((a,b)=>
        a.status.localeCompare(b.status)
      )
    }
    else if (sortOption === "Pending"){
      sortedProjects.sort((a,b)=>
      b.status.localeCompare(a.status)
    )
    }        
  
  
  return (
    <Layout>
      {/* Header */}

     {/* form  */}
     <ProjectForm
      projectName={projectName}
      setProjectName={setProjectName}
      status={status}
      setStatus={setStatus}
      editingId={editingId}
      addProject={addProject}
      updateProject={updateProject}     
     />


{/* serach and sort project */}
     <SearchAndSort
     searchTerm={searchTerm}
     setSearchTerm={setSearchTerm}
     sortOption={sortOption}
     setSortOption={setSortOption}
     />

{/* statsSection */}
    <StatsSection
      totalProjects={totalProjects}
      completedProjects={completedProjects}
      pendingProjects={pendingProjects}
    />

      {/* Project List */}
      <ProjectList
      sortedProjects={sortedProjects}
      deleteProject={deleteProject}
      editProject={editProject}
      />

    </Layout>
  );
}

export default Projects;