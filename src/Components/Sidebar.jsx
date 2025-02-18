import React from "react";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

function Sidebar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  if (!user) {
    return;
  }

  return (
    <div className="w-72 flex-col flex justify-between bg-white shadow-md p-6 rounded-md">
      {/* Profile Picture */}
      <div className="flex flex-col items-center">
        <img
          src={user.avatar}
          alt="Profile"
          className="rounded-full w-20 h-20"
        />
        <h3 className="mt-3 font-semibold text-lg">{user.name}</h3>
      </div>

      {/* Navigation Links */}
      <ul className="mt-6 space-y-3">
        {["Profile", "Orders", "Wishlist", "Saved Card", "Address"].map(
          (item) => (
            <li key={item}>
              <NavLink
                to={`/dashboard/${item.toLowerCase()}`}
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
        onClick={() => localStorage.removeItem("loggedInUser")}
        className="w-full mt-6 py-2 bg-red-500 text-white rounded-md"
      >
        Logout
      </button>
    </div>
  );
}

export default Sidebar;
