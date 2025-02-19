import React, { useState } from "react";
import EditProfileForm from "./EditProfileForm";
import { useAuth } from "../../Context/UserAuth";

function Profile() {
  const [editFormOpen, setEditFormOpen] = useState(false);

  const { loggedInUser } = useAuth();

  if (!loggedInUser) {
    return (
      <h2 className="text-center text-2xl font-semibold">please login...</h2>
    );
  }

  const openEditForm = () => {
    setEditFormOpen(true);
  };

  const closeEditForm = () => {
    setEditFormOpen(false);
  };

  return (
    <div className=" ms-6 p-6 rounded-lg shadow-sm bg-gray-100">
      <h2 className="text-3xl font-semibold mb-6">My Profile</h2>

      {/* Personal Information */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Personal Information</h3>
          <button
            className="text-white bg-[#3b5d50] px-4 py-1 rounded-md"
            onClick={openEditForm} // Added onClick event
          >
            Edit
          </button>
        </div>
        <div className="space-y-5">
          <div className="flex">
            <p className="font-semibold w-1/5">Name:</p>
            <span className="font-normal"> {loggedInUser.name}</span>
          </div>

          <div className="flex">
            <p className="font-semibold w-1/5">Mobile Number:</p>
            <span className="font-normal"> {loggedInUser.phone}</span>
          </div>
          <div className="flex">
            <p className="font-semibold w-1/5">Email:</p>
            <span className="font-normal">{loggedInUser.email}</span>
          </div>

          <div className="flex items-center">
            <p className=" font-semibold w-1/5">Gender:</p>
            <label className="flex items-center mr-4">
              <input
                type="radio"
                readOnly
                checked={loggedInUser.gender === "male"}
                className="form-radio text-[#3b5d50] mr-2"
              />
              Male
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                readOnly
                checked={loggedInUser.gender === "female"}
                className="form-radio text-[#3b5d50] mr-2"
              />
              Female
            </label>
          </div>
        </div>
      </div>

      {/* Login Details */}
      <div className="bg-white p-6 space-y-5 rounded-lg shadow-md mt-6">
        <h3 className="text-xl font-semibold mb-4">Login Details</h3>

        <div className="flex">
          <p className="w-1/5 font-semibold">Email:</p>
          <span> {loggedInUser.email}</span>
        </div>

        <div className="flex">
          <p className="w-1/5 font-semibold">Password:</p>
          <span>******</span>
        </div>

        <div className="mt-4 flex gap-3">
          <button className="text-white bg-[#3b5d50] px-4 py-1 rounded-md">
            Change
          </button>
        </div>
      </div>

      {/* Edit Profile Modal */}
      <EditProfileForm isOpen={editFormOpen} closeModal={closeEditForm} />
    </div>
  );
}

export default Profile;
