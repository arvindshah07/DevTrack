import React from 'react'

function StatsCard({title,value}) {
  return (
    <div className="flex-1 bg-white rounded-xl shadow-md p-6">
    <h2 className='text-gray-500 text-lg'> {title}</h2>
     <h1 className='text-4xl font-bold mt-2'> {value}</h1>
    </div>
  )
}

export default StatsCard