import React, { useState, useEffect } from "react";
import { useAddress } from "../../Context/AddressContext";

const AddressForm = ({ existingAddress, onClose, isFormOpen }) => {
  const { addUpdateAddress } = useAddress(); // Get function from context

  const [address, setAddress] = useState({
    id: existingAddress?.id || Date.now().toString(), // Generate new ID for new address
    name: "",
    type: existingAddress?.type || "home",
    fullAddress: existingAddress?.fullAddress || "",
    country: existingAddress?.country || "",
    state: existingAddress?.state || "",
    city: existingAddress?.city || "",
    pincode: existingAddress?.pincode || "",
    phone: existingAddress?.phone || "",
    alternatePhone: existingAddress?.alternatePhone || "",
  });

  // Update state when editing an existing address
  useEffect(() => {
    if (existingAddress) {
      setAddress(existingAddress);
    } else {
      setAddress({
        id: Date.now().toString(),
        name: "",
        type: "home",
        fullAddress: "",
        country: "",
        state: "",
        city: "",
        pincode: "",
        phone: "",
        alternatePhone: "",
      });
    }
  }, [existingAddress, isFormOpen]);

  // Handle input changes
  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  // Reset form to default values
  const handleReset = () => {
    setAddress({
      type: "Home",
      fullAddress: "",
      country: "",
      state: "",
      city: "",
      pincode: "",
      phone: "",
      alternatePhone: "",
    });
  };

  // Save function with validation
  const handleSave = () => {
    if (!address.fullAddress || !address.pincode || !address.phone) {
      alert("Please fill all required fields!");
      return;
    }

    addUpdateAddress(address); // Save using context
    onClose(); // Close modal after saving
  };

  return (
    isFormOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center border-b pb-3">
            <h2 className="text-lg font-semibold">Edit Address</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-red-500 text-xl"
            >
              &times;
            </button>
          </div>

          {/* Address Type & Full Address */}
          <div className="mt-4">
            <div>
              <label className="text-sm font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={address.name}
                onChange={handleChange}
                className="w-full p-2 border rounded-md text-sm"
                placeholder="Enter Name"
              />
            </div>

            <label className="text-sm font-medium">Address</label>
            <div className="flex items-center gap-2 bg-gray-100 p-2 rounded-md">
              <select
                name="type"
                value={address.type}
                onChange={handleChange}
                className="bg-white p-2 border rounded-md text-sm"
              >
                <option value="">Select Address Type</option>
                <option value="Home">Home</option>
                <option value="Office">Office</option>
              </select>
              <input
                type="text"
                name="fullAddress"
                value={address.fullAddress}
                onChange={handleChange}
                placeholder="Enter full address"
                className="w-full p-2 border rounded-md text-sm"
              />
            </div>
          </div>

          {/* Country, State, City, Pincode */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="text-sm font-medium">Country</label>
              <select
                name="country"
                value={address.country}
                onChange={handleChange}
                className="w-full p-2 border rounded-md text-sm bg-white"
              >
                <option value="">Select Country</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium">State</label>
              <select
                name="state"
                value={address.state}
                onChange={handleChange}
                className="w-full p-2 border rounded-md text-sm bg-white"
              >
                <option value="">Select State</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Maharashtra">Maharashtra</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium">City</label>
              <select
                name="city"
                value={address.city}
                onChange={handleChange}
                className="w-full p-2 border rounded-md text-sm bg-white"
              >
                <option value="">Select City</option>
                <option value="Ahmedabad">Ahmedabad</option>
                <option value="Mumbai">Mumbai</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium">Pincode</label>
              <input
                type="text"
                name="pincode"
                value={address.pincode}
                onChange={handleChange}
                className="w-full p-2 border rounded-md text-sm"
                placeholder="Enter Pincode"
              />
            </div>
          </div>

          {/* Phone & Alternate Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="text-sm font-medium">Phone</label>
              <div className="flex items-center border p-2 rounded-md">
                <span className="text-gray-500 pr-2">+91</span>
                <input
                  type="text"
                  name="phone"
                  value={address.phone}
                  onChange={handleChange}
                  className="w-full text-sm"
                  placeholder="Enter Phone Number"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium">Alternate Phone</label>
              <div className="flex items-center border p-2 rounded-md">
                <span className="text-gray-500 pr-2">+91</span>
                <input
                  type="text"
                  name="alternatePhone"
                  value={address.alternatePhone}
                  onChange={handleChange}
                  className="w-full text-sm"
                  placeholder="Enter Alternate Number"
                />
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex justify-between">
            <button
              onClick={handleReset}
              className="border border-[#3b5d50] text-[#3b5d50] px-4 py-2 rounded-md"
            >
              Reset
            </button>
            <button
              onClick={handleSave}
              className="bg-[#3b5d50] text-white px-4 py-2 rounded-md"
            >
              Save Address
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default AddressForm;
