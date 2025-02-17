import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";

function RegisterModal({ isRegisterOpen, onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    const response = await fetch("http://localhost:5000/users");
    const users = await response.json();

    // check existing user

    const existingUser = users.find((user) => user.email === email);

    if (existingUser) {
      toast.error("This user is already exist");
      return;
    }

    // create new user
    const newUser = {
      id: uuidv4(),
      name,
      email,
      password,
      cart: [],
    };

    // save new user
    await fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });

    onClose();
    toast.success(`Registred as ${name}`);
  };

  return (
    isRegisterOpen && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Register</h2>
          <input
            type="text"
            placeholder="Username"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            onClick={handleRegister}
            className="w-full bg-green-800  text-white py-2 rounded-md hover:bg-green-700 transition"
          >
            Register
          </button>
          <button
            onClick={onClose}
            className="w-full mt-3 bg-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-400 transition"
          >
            Close
          </button>
        </div>
      </div>
    )
  );
}

export default RegisterModal;
