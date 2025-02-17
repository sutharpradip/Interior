import React, { useState } from "react";

function LoginModal({ isOpen, onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notification, setNotification] = useState(null);

  const handleLogin = async () => {
    const response = await fetch("http://localhost:5000/users");
    const users = await response.json();

    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user)); // Store user in local storage

      setNotification({ message: "Login successful! 🎉", type: "success" });

      setTimeout(() => {
        setNotification(null);
      }, 3000);

      onClose(); // Close modal after successful login
    } else {
      setNotification({
        message: "Invalid username or password ❌",
        type: "error",
      });

      setTimeout(() => {
        setNotification(null);
      }, 3000);
    }
  };

  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Login</h2>
          <input
            type="text"
            placeholder="Username"
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
            onClick={handleLogin}
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
          >
            Login
          </button>
          <button
            onClick={onClose}
            className="w-full mt-3 bg-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-400 transition"
          >
            Close
          </button>
        </div>

        {/* Notification Component */}
        {notification && (
          <div
            className={`fixed top-5 right-5 px-4 py-2 text-white rounded-md shadow-lg transition-opacity duration-300 ${
              notification.type === "success" ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {notification.message}
          </div>
        )}
      </div>
    )
  );
}

export default LoginModal;
