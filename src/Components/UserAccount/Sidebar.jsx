import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../Context/UserAuth";

function Sidebar() {
  const { loggedInUser, logout } = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.warn(`${loggedInUser.name} is logged Out`);
    navigate("/account");
  };

  if (!loggedInUser) {
    return null;
  }

  return (
    <div className="w-72 h-fit flex-col flex bg-gray-100 shadow-sm py-6 px-3 rounded-md">
      {/* Profile Picture */}
      <div className="flex flex-col items-center">
        <img
          src={loggedInUser.avatar}
          alt="Profile"
          className="rounded-full w-20 h-20"
        />
        <h3 className="mt-3 font-semibold text-lg">{loggedInUser.name}</h3>
      </div>

      {/* Navigation Links */}
      <ul className="mt-6 space-y-3">
        {["Profile", "Orders", "Wishlist", "Saved Card", "Address"].map(
          (item) => (
            <li key={item}>
              <NavLink
                to={`/account/${item.toLowerCase()}`}
                end //
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 rounded-md text-gray-700 hover:bg-[#3b5d50] hover:text-white ${
                    isActive ? "bg-[#3b5d50] text-white" : "bg-white"
                  }`
                }
              >
                {item}
              </NavLink>
            </li>
          )
        )}
      </ul>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="w-full mt-6 py-2 bg-red-500 text-white rounded-md"
      >
        Logout
      </button>
    </div>
  );
}

export default Sidebar;
