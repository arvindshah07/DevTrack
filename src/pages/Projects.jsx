import React, { useState , useEffect } from "react";
import Layout from "../components/layout/Layout";
import ProjectCard from "../components/projects/ProjectCard";

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
    console.log({
  editingId,
  projectName,
  status,
});
  }
  
  return (
    <Layout>
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-800">
            Projects
          </h1>
          
          <p className="text-gray-500 mt-1">
            Manage all your projects efficiently.
          </p>
        </div>
      </div>
      
      {/* Form */}
      <div className="bg-white shadow-md rounded-xl p-6 mb-8">
        <div className="flex gap-4 items-end">
          {/* Project Name */}
          <div className="flex-1">
  <label>Project Name</label>

  <input
    type="text"
    value={projectName}
    onChange={(e) => setProjectName(e.target.value)}
    className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
</div>

          {/* Status */}
          <div className="w-48">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Status
            </label>

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
          
          
        <button
      onClick={editingId === null ? addProject : updateProject}
      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-200"
    >
      {editingId === null ? "+ Add Project" : "Save Changes"}
        </button>

        </div>
      </div>

      <input
      type="text"
      placeholder="🔍 Search Projects..."
      value={searchTerm}
      onChange={(e)=>setSearchTerm(e.target.value)}
      className="w-full p-3 px-2 border rounded-lg mb-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div className="grid grid-cols-3 gap-4 ">
       <div className="bg-white rounded-xl shadow-md p-6 text-center">
        <h3 className="text-gray-500">Total Projects</h3>
        <p className="text-3xl font-bold text-blue-600"> {totalProjects}</p></div>
       <div className="bg-white rounded-xl shadow-md p-6 text-center">
        <h3 className="text-gray-500">Completed Projects</h3>
        <p className="text-3xl font-bold text-green-600"> {completedProjects}</p></div>
       <div className="bg-white rounded-xl shadow-md p-6 text-center">
        <h3 className="text-gray-500">Pending Projects</h3>
        <p className="text-3xl font-bold text-yellow-600"> {pendingProjects}</p></div>
      </div>

      {/* Project List */}
      <div className="flex flex-col gap-5">
        {filteredProjects.length === 0 ? (
          <p  className="text-center text-gray-500 text-lg">
            🔍 No projects found
          </p>
        ) :
        (
            filteredProjects.map((project) => (
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
    </Layout>
  );
}

export default Projects;