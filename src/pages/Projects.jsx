import React, { useState } from "react";
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
  // const[deleteProject,setDeleteProject]=useState(false);

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

  function editProject(id){
    const project=projects.find((project)=>project.id === id);
    setEditingId(project.id);
    setProjectName(project.title);
    setStatus(project.status);
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
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Project Name
            </label>

            <input
              type="text"
              placeholder="Enter Project Name"
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

          {/* Button */}
          <button
            onClick={addProject}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-200"
          >
            + Add Project
          </button>
        </div>
      </div>

      {/* Project List */}
      <div className="flex flex-col gap-5">
        {projects.map((project) => (
          <ProjectCard
            id={project.id}
            key={project.id}
            title={project.title}
            status={project.status}
            deleteProject={deleteProject}
          />
        ))}
      </div>
    </Layout>
  );
}

export default Projects;