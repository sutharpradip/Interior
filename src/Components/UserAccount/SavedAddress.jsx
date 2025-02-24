import React, { useState } from "react";
import AddressCard from "./AddressCard";
import AddressForm from "./AddressForm";
import { useAddress } from "../../Context/AddressContext";
import { useAuth } from "../../Context/UserAuth";

function SavedAddress() {
  const { loggedInUser } = useAuth();
  const { addresses, addAddress, editAddress, removeAddress } = useAddress();
  const [AddrFormOpen, setAddrFormOpen] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);

  if (!loggedInUser)
    return (
      <div className="text-center py-10">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-green-800 mx-auto"></div>
        <p className="text-gray-600 mt-4">Loading cart items...</p>
      </div>
    );

  const handleAdd = () => {
    setEditingAddress(null);
    setAddrFormOpen(true);
  };

  const handleEdit = (address) => {
    setEditingAddress(address);
    setAddrFormOpen(true);
  };

  const handleRemove = (id) => {
    removeAddress(id);
  };

  return (
    <>
      <div className="ms-6 p-6 rounded-lg shadow-sm bg-gray-100">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-semibold mb-6">
            {addresses.length > 0 ? "Saved Addresses" : "No Saved Addresses"}
          </h2>
          <button
            onClick={handleAdd}
            className="bg-gray-200 hover:bg-[#3b5d50] text-gray-800 hover:text-white py-2 px-5 rounded-md"
          >
            Add New Address
          </button>
        </div>

        {addresses.length > 0 ? (
          <div className="flex flex-wrap justify-between">
            {addresses.map((address) => (
              <div key={address.id} className="w-full lg:w-[49%]">
                <AddressCard
                  address={address}
                  onEdit={handleEdit}
                  onRemove={handleRemove}
                />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">
            You don’t have any saved addresses yet.
          </p>
        )}
      </div>

      {/* Address Form */}
      <AddressForm
        existingAddress={editingAddress}
        onClose={() => setAddrFormOpen(false)}
        isFormOpen={AddrFormOpen}
        onSave={(address) => {
          editingAddress ? editAddress(address) : addAddress(address);
        }}
      />
    </>
  );
}

export default SavedAddress;
