import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";

function RegisterModal({ isRegisterOpen, onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async () => {
    setIsLoading(true);

    try {
      const response = await fetch("https://interior-db.onrender.com/users");
      const users = await response.json();

      const existingUser = users.find((user) => user.email === email);

      if (existingUser) {
        toast.error("This user already exists");
        setIsLoading(false);
        return;
      }

      // Generate avatar URL
      const avatarUrl = `https://api.dicebear.com/9.x/lorelei/svg`;

      // Create new user
      const newUser = {
        id: uuidv4(),
        name,
        email,
        phone,
        password,
        avatar: avatarUrl,
        gender,
        addresses: [],
        cart: [],
        orders: [],
      };

      // Save new user
      await fetch("https://interior-db.onrender.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      toast.success(`Registered as ${name}`);
      onClose();
    } catch (error) {
      toast.error("Registration failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    isRegisterOpen && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div
          className="bg-white p-6 rounded-lg shadow-lg w-96"
          data-aos="fade-down"
        >
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
            disabled={isLoading}
            className={`w-full py-2 rounded-md text-white transition ${
              isLoading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-800 hover:bg-green-700"
            }`}
          >
            {isLoading ? "Registering..." : "Register"}
          </button>

          <button
            onClick={onClose}
            className="w-full mt-3 bg-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-400 transition"
            disabled={isLoading}
          >
            Close
          </button>
        </div>
      </div>
    )
  );
}

export default RegisterModal;
