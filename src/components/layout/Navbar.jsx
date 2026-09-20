import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../context/UserContext";

function Navbar() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-between bg-blue-600 shadow-md h-16 px-6">
      
      {/* Logo */}
      <div className="text-3xl font-bold text-white">
        DevTrack
      </div>

      {/* User + Logout */}
      <div className="flex items-center gap-4">
        <div className="text-right text-white">
          <p className="text-lg font-bold">
            {user ? user.name : "Loading..."}
          </p>

          <p className="text-sm">
            {user ? user.role : ""}
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="px-3 py-2 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-600 transition cursor-pointer"
        >
          Logout
        </button>
      </div>

    </div>
  );
}

export default Navbar;