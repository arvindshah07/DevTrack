import React from 'react'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/projects">Projects</Link>
    </div>
  )
}

export default Home