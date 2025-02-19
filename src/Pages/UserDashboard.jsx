import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Sidebar from "../Components/UserAccount/Sidebar";
import Profile from "../Components/UserAccount/Profile";
import Orders from "../Components/UserAccount/Orders";
import Address from "../Components/UserAccount/Address";

function UserDashboard() {
  return (
    <div className="section">
      <div className="container">
        <div className="flex flex-wrap my-10 rounded-lg">
          <Sidebar />

          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Navigate to="profile" replace />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/address" element={<Address />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
