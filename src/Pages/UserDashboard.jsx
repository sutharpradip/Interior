import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Sidebar from "../Components/UserAccount/Sidebar";
import Profile from "../Components/UserAccount/Profile";
import Orders from "../Components/UserAccount/Orders";
import SavedAddress from "../Components/UserAccount/SavedAddress";

function UserDashboard() {
  return (
    <div className="section">
      <div className="container">
        <div className="flex flex-wrap my-10 rounded-lg">
          <Sidebar />

          <div className="flex-1 lg:ms-6 ms-0">
            <Routes>
              <Route path="/" element={<Navigate to="profile" replace />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/savedaddress" element={<SavedAddress />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
