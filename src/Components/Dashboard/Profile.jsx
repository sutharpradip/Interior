import React, { useEffect, useState } from "react";
import EditProfileForm from "../EditProfileForm";

function Profile() {
  const [user, setUser] = useState(null);
  const [editFormOpen, setEditFormOpen] = useState(false); // Correct state name

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  if (!user) {
    return <p>Loading...</p>;
  }

  const openEditForm = () => {
    setEditFormOpen(true);
  };

  const closeEditForm = () => {
    setEditFormOpen(false);
  };

  return (
    <div className="ps-6 bg-gray-100">
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
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Mobile Number:</strong> {user.phone}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <div className="flex items-center">
            <strong className="mr-2">Gender:</strong>
            <label className="flex items-center mr-4">
              <input
                type="radio"
                readOnly
                checked={user.gender === "male"}
                className="form-radio text-[#3b5d50] mr-2"
              />
              Male
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                readOnly
                checked={user.gender === "female"}
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
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Password:</strong> ******
        </p>
        <div className="mt-4 flex gap-3">
          <button
            onClick={openEditForm}
            className="text-white bg-[#3b5d50] px-4 py-1 rounded-md"
          >
            Edit
          </button>
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
