import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";

function RegisterModal({ isRegisterOpen, onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");

  const handleRegister = async () => {
    const response = await fetch("http://localhost:5000/users");
    const users = await response.json();

    // check existing user

    const existingUser = users.find((user) => user.email === email);

    if (existingUser) {
      toast.error("This user is already exist");
      return;
    }

    // Generate avatar URL (using a random avatar generation service)
    const avatarUrl = `https://api.dicebear.com/9.x/lorelei/svg`;

    // create new user
    const newUser = {
      id: uuidv4(),
      name,
      email,
      phone,
      password,
      avatar: avatarUrl,
      gender,
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
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-3 py-2 border rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <div className="mb-3">
            <label className="block text-gray-700">Gender</label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
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
