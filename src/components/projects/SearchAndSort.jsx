import React from 'react'

function SearchAndSort({
  searchTerm,
  setSearchTerm,
  sortOption,
  setSortOption
}) {
  return (
    <>
      <input
      type="text"
      placeholder="🔍 Search Projects..."
      value={searchTerm}
      onChange={(e)=>setSearchTerm(e.target.value)}
      className="w-full p-3 px-2 border rounded-lg mb-5 focus:outline-none focus:ring-2 focus:ring-blue-500"          
      />
      <div>
        <div className="w-48">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Sort by
            </label>

            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
            >
              <option value="Default">Default</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
              <option value="Completed">Completed First</option>
              <option value="Pending">Pending First</option>
            </select>
          </div>
      </div>
    
    </>
  )
}

export default SearchAndSort