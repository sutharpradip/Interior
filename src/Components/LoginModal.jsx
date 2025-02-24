import React, { useState } from "react";
import { useAuth } from "../Context/UserAuth";
import { toast } from "react-toastify";

function LoginModal({ isOpen, onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false); // 🔄 Loading state

  const { login } = useAuth();

  const handleLogin = async () => {
    setIsLoading(true); // Start loading

    try {
      const response = await fetch("https://interior-db.onrender.com/users");
      const users = await response.json();

      const user = users.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        login(user);
        onClose();
        toast.success(`Logged In as ${user.name}`);
      } else {
        toast.error("Invalid Email or Password");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    isOpen && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div
          className="bg-white p-6 rounded-lg shadow-lg w-96"
          data-aos="fade-down"
        >
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Login</h2>

          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            disabled={isLoading} // Disable during loading
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            disabled={isLoading} // Disable during loading
          />

          <button
            onClick={handleLogin}
            disabled={isLoading} // Disable button during loading
            className={`w-full text-white py-2 rounded-md transition ${
              isLoading
                ? "bg-green-400 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700"
            }`}
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-white mr-2"></div>
                Logging in...
              </div>
            ) : (
              "Login"
            )}
          </button>

          <button
            onClick={onClose}
            disabled={isLoading}
            className="w-full mt-3 bg-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-400 transition"
          >
            Close
          </button>
        </div>
      </div>
    )
  );
}

export default LoginModal;
