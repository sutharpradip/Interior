import React, { createContext, useContext, useState } from "react";
import { useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      setLoggedInUser(JSON.parse(storedUser));
    }
  }, []);

  // user Login

  const login = (user) => {
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    setLoggedInUser(user);
  };

  const logout = () => {
    localStorage.removeItem("loggedInUser");
    setLoggedInUser(null);
  };

  return (
    <UserContext.Provider
      value={{ setLoggedInUser, loggedInUser, login, logout }}
    >
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use AuthContext
export const useAuth = () => useContext(UserContext);
