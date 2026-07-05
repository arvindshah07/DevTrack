import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

function Layout({children}) {
  return (
    <>
      <Navbar/>
       <div className="flex">
         <Sidebar className="w-64"/>
         <main className="flex-1 p-6">
          {children}
         </main>
       </div>
      
    </>
  );
}

export default Layout ;