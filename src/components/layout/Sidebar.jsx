import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 min-h-screen bg-white border-r p-4">
      <div className="flex flex-col gap-3">
              <NavLink to="/dashboard"
      className={({isActive})=>isActive ? "bg-blue-200 text-white px-4 py-2 rounded-lg" :
       "bg-gray-200 text-black px-4 py-2 rounded-lg"}
      >
        Dashboard
      </NavLink>
      <NavLink to="/projects"
      className={({isActive})=>isActive ? "bg-blue-200 text-white px-4 py-2 rounded-lg" :
       "bg-gray-200 text-black px-4 py-2 rounded-lg"}
      >
        Projects
      </NavLink>
      <NavLink to="/notes"
      className={({isActive})=>isActive ? "bg-blue-200 text-white px-4 py-2 rounded-lg" :
       "bg-gray-200 text-black px-4 py-2 rounded-lg"}
      >
        Notes
      </NavLink>
      <NavLink to="/profile"
      className={({isActive})=>isActive ? "bg-blue-200 text-white px-4 py-2 rounded-lg" :
       "bg-gray-200 text-black px-4 py-2 rounded-lg"}
      >
        Profile
      </NavLink>
      <NavLink to="/settings"
      className={({isActive})=>isActive ? "bg-blue-200 text-white px-4 py-2 rounded-lg" :
       "bg-gray-200 text-black px-4 py-2 rounded-lg"}
      >
       Settings
      </NavLink>
      <NavLink to="/logout"
      className={({isActive})=>isActive ? "bg-blue-200 text-white px-4 py-2 rounded-lg" :
       "bg-gray-200 text-black px-4 py-2 rounded-lg"}
      >
        Logout
      </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;