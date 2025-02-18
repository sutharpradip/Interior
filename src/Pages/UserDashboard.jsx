import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import Profile from "../Components/Dashboard/Profile";
import Orders from "../Components/Dashboard/Orders";

function UserDashboard() {
  return (
    <div className="section">
      <div className="container">
        <div className="flex  p-6 my-10 rounded-lg bg-gray-100">
          <Sidebar />

          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Navigate to="profile" replace />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/orders" element={<Orders />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
