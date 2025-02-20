import React, { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./UserAuth";
import { toast } from "react-toastify";

const AddressContext = createContext();

export const AddressProvider = ({ children }) => {
  const [addresses, setAddresses] = useState(null);

  const { loggedInUser } = useAuth();

  //   Fetch addresses from Db.json
  useEffect(() => {
    if (!loggedInUser) return;

    fetch(`http://localhost:5000/users/${loggedInUser.id}`)
      .then((response) => response.json())
      .then((data) => setAddresses(data.addresses || []))
      .catch((error) => console.error("Error fetching addresses:", error));
  }, [loggedInUser]);

  // add new or update address
  const addUpdateAddress = async (newAddress) => {
    if (!loggedInUser) return;

    try {
      const response = await fetch(
        `http://localhost:5000/users/${loggedInUser.id}`
      );
      const userData = await response.json();

      let updatedAddresses;
      const existingIndex = userData.addresses.findIndex(
        (addr) => addr.id === newAddress.id
      );

      if (existingIndex > -1) {
        // Update existing address
        updatedAddresses = [...userData.addresses];
        updatedAddresses[existingIndex] = newAddress;
        toast.success("Address updated successfully!"); // ✅ Show correct toast
      } else {
        // Add new address
        updatedAddresses = [...userData.addresses, newAddress];
        toast.success("Added new Address"); // ✅ Correct toast for new address
      }

      // Update db.json
      await fetch(`http://localhost:5000/users/${loggedInUser.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...userData, addresses: updatedAddresses }),
      });

      setAddresses(updatedAddresses);
    } catch (error) {
      console.error("Error updating address:", error);
      toast.error("Failed to update address.");
    }
  };

  const removeAddress = async (id) => {
    if (!loggedInUser) return;

    try {
      // Fetch the current user data
      const response = await fetch(
        `http://localhost:5000/users/${loggedInUser.id}`
      );
      const userData = await response.json();

      // Filter out the removed address
      const updatedAddresses = userData.addresses.filter(
        (addr) => addr.id !== id
      );

      // Update db.json
      await fetch(`http://localhost:5000/users/${loggedInUser.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...userData, addresses: updatedAddresses }),
      });

      // Update state
      setAddresses(updatedAddresses);
      toast.success("Address removed successfully!");
    } catch (error) {
      console.error("Error removing address:", error);
      toast.error("Failed to remove address.");
    }
  };

  return (
    <AddressContext.Provider
      value={{ addresses, addUpdateAddress, removeAddress }}
    >
      {children}
    </AddressContext.Provider>
  );
};

export const useAddress = () => useContext(AddressContext);
