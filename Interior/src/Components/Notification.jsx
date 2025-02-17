import React from "react";

function Notification({ notification, type }) {
  return (
    <div
      className={`fixed top-5 right-5 px-4 py-2 text-white rounded-md shadow-lg transition-opacity duration-300 
      ${type === "success" ? "bg-green-500" : "bg-red-500"}`}
    >
      {notification}
    </div>
  );
}

export default Notification;
