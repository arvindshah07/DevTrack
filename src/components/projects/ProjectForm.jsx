import React from 'react'

function ProjectForm({projectName
  ,setProjectName,
  status,
  setStatus,
  editingId,
  addProject,
  updateProject}) {
  return (
    <>
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
      </>
      
  )
}

export default ProjectForm