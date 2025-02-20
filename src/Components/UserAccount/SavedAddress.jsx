import React, { useState } from "react";
import AddressCard from "./AddressCard";
import AddressForm from "./AddressForm";
import { useAddress } from "../../Context/AddressContext";
import { useAuth } from "../../Context/UserAuth";

function SavedAddress() {
  const { loggedInUser } = useAuth();
  const { addresses, addUpdateAddress, removeAddress } = useAddress();
  const [AddrFormOpen, setAddrFormOpen] = useState(false);

  if (!loggedInUser) return <div>Loading...</div>;

  const handleEdit = (address) => {
    addUpdateAddress(address);
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
            {addresses && addresses.length > 0
              ? "Saved Addresses"
              : "No Saved Addresses"}
          </h2>
          <button
            onClick={() => setAddrFormOpen(true)}
            className="bg-gray-200 hover:bg-[#3b5d50] text-gray-800 hover:text-white py-2 px-5 rounded-md"
          >
            Add New Address
          </button>
        </div>

        {addresses && addresses.length > 0 ? (
          <div className="flex flex-wrap justify-between">
            {addresses.map((address, index) => (
              <div key={index} className="w-full lg:w-[49%]">
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

      {/* Ensure AddressForm always renders */}
      <AddressForm
        isFormOpen={AddrFormOpen}
        onClose={() => setAddrFormOpen(false)}
      />
    </>
  );
}

export default SavedAddress;
