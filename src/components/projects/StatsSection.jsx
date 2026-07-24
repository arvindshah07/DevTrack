import React from 'react'

function StatsSection({
  totalProjects,
  completedProjects,
  pendingProjects
}) {
  return (
    <>
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
    </>
  )
}

export default StatsSection