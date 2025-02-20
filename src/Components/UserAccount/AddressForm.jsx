import React, { useState, useEffect } from "react";
import { useAddress } from "../../Context/AddressContext";
import { toast } from "react-toastify";

const AddressForm = ({ existingAddress, onClose, isFormOpen }) => {
  const { addAddress, editAddress } = useAddress();

  const initialAddress = {
    id: Date.now().toString(),
    name: "",
    type: "",
    fullAddress: "",
    country: "",
    state: "",
    city: "",
    pincode: "",
    phone: "",
    alternatePhone: "",
  };

  const [address, setAddress] = useState(initialAddress);

  useEffect(() => {
    if (existingAddress) {
      setAddress(existingAddress);
    } else {
      setAddress(initialAddress);
    }
  }, [existingAddress, isFormOpen]);

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleReset = () => {
    setAddress(initialAddress);
  };

  const handleSave = () => {
    if (
      !address.fullAddress ||
      !address.pincode ||
      !address.phone ||
      !address.name ||
      !address.type ||
      !address.country ||
      !address.state ||
      !address.city
    ) {
      toast.error("All fields are required");
      return;
    }

    if (existingAddress) {
      editAddress(address);
    } else {
      addAddress(address);
    }

    handleReset();
    onClose();
  };

  return (
    isFormOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-xl mx-auto">
          <div className="flex justify-between items-center border-b pb-3">
            <h2 className="text-lg font-semibold">
              {existingAddress ? "Edit Address" : "Add New Address"}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-red-500 text-xl"
            >
              &times;
            </button>
          </div>

          <div className="mt-4 space-y-4">
            <div className="flex items-center gap-2 rounded-md">
              <input
                type="text"
                name="name"
                value={address.name}
                onChange={handleChange}
                placeholder="Enter Name"
                className="w-full p-2 border rounded-md text-sm"
              />

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
            </div>

            <input
              type="text"
              name="fullAddress"
              value={address.fullAddress}
              onChange={handleChange}
              placeholder="Enter Full Address"
              className="w-full p-2 border rounded-md text-sm"
            />

            <div className="flex items-center gap-2 rounded-md">
              <input
                type="text"
                name="city"
                value={address.city}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                placeholder="City"
              />
              <input
                type="text"
                name="state"
                value={address.state}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                placeholder="State"
              />
              <input
                type="text"
                name="country"
                value={address.country}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                placeholder="Country"
              />
            </div>

            <div className="flex items-center gap-2 rounded-md">
              <input
                type="text"
                name="pincode"
                value={address.pincode}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                placeholder="Pincode"
              />
              <input
                type="text"
                name="phone"
                value={address.phone}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                placeholder="Phone"
              />
            </div>

            <input
              type="text"
              name="alternatePhone"
              value={address.alternatePhone}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              placeholder="Alternate Phone"
            />
          </div>

          <div className="mt-6 inline-flex gap-3 justify-between">
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
              {existingAddress ? "Update Address" : "Save Address"}
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default AddressForm;
