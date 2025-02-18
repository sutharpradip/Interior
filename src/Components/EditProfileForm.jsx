import React from "react";
import { FaTimes } from "react-icons/fa";

const EditProfileForm = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Edit Personal Information</h2>
          <button className="text-gray-600 hover:text-gray-800">
            <FaTimes size={20} />
          </button>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Full Name</label>
            <input
              type="text"
              className="w-full mt-1 p-2 border rounded-md"
              placeholder="Enter your name"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                className="w-full mt-1 p-2 border rounded-md"
                placeholder="Enter email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Phone</label>
              <input
                type="text"
                className="w-full mt-1 p-2 border rounded-md"
                placeholder="Enter Phone Number"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium">Address</label>
            <input
              type="text"
              className="w-full mt-1 p-2 border rounded-md"
              placeholder="Enter address"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Gender</label>
              <select className="w-full mt-1 p-2 border rounded-md">
                <option>Select</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium">Country</label>
              <select className="w-full mt-1 p-2 border rounded-md">
                <option>Select</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium">State</label>
              <select className="w-full mt-1 p-2 border rounded-md">
                <option>Select</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium">City</label>
              <select className="w-full mt-1 p-2 border rounded-md">
                <option>Select</option>
              </select>
            </div>
          </div>

          <div className="flex justify-between mt-4">
            <button className="border border-[#3b5d50] text-[#3b5d50] px-4 py-2 rounded-md hover:bg-[#3b5d50] hover:text-white">
              Cancel
            </button>
            <button className="bg-[#3b5d50] text-white px-4 py-2 rounded-md hover:bg-[#2f4a3f]">
              Save changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfileForm;
