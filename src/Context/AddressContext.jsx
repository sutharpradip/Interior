import React, { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./UserAuth";
import { toast } from "react-toastify";

const AddressContext = createContext();

export const AddressProvider = ({ children }) => {
  const [addresses, setAddresses] = useState([]);
  const { loggedInUser } = useAuth();

  // Fetch addresses from DB
  useEffect(() => {
    if (!loggedInUser) return;

    fetch(`https://interior-db.onrender.com/users/${loggedInUser.id}`)
      .then((response) => response.json())
      .then((data) => setAddresses(data.addresses || []))
      .catch((error) => console.error("Error fetching addresses:", error));
  }, [loggedInUser]);

  // Add New Address
  const addAddress = async (newAddress) => {
    if (!loggedInUser) return;

    try {
      const updatedAddresses = [...addresses, newAddress];
      await updateUserAddresses(updatedAddresses);
      toast.success("New address added!");
    } catch (error) {
      toast.error("Failed to add address.");
    }
  };

  // Edit Existing Address
  const editAddress = async (updatedAddress) => {
    if (!loggedInUser) return;

    try {
      const updatedAddresses = addresses.map((addr) =>
        addr.id === updatedAddress.id ? updatedAddress : addr
      );
      await updateUserAddresses(updatedAddresses);
      toast.success("Address updated successfully!");
    } catch (error) {
      toast.error("Failed to update address.");
    }
  };

  // Remove Address
  const removeAddress = async (id) => {
    if (!loggedInUser) return;

    try {
      const updatedAddresses = addresses.filter((addr) => addr.id !== id);
      await updateUserAddresses(updatedAddresses);
      toast.success("Address removed successfully!");
    } catch (error) {
      toast.error("Failed to remove address.");
    }
  };

  // Helper to Update DB
  const updateUserAddresses = async (updatedAddresses) => {
    const response = await fetch(
      `https://interior-db.onrender.com/users/${loggedInUser.id}`,
      {
        method: "PATCH", // ✅ Use PATCH instead of PUT
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          addresses: updatedAddresses, // Only update addresses
        }),
      }
    );

    if (!response.ok) throw new Error("Failed to update DB");
    setAddresses(updatedAddresses);
  };

  return (
    <AddressContext.Provider
      value={{ addresses, addAddress, editAddress, removeAddress }}
    >
      {children}
    </AddressContext.Provider>
  );
};

export const useAddress = () => useContext(AddressContext);
