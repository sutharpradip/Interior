import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../../Context/UserAuth";

const EditProfileForm = ({ isOpen, closeModal }) => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    avatar: "",
  });

  const [userId, setUserId] = useState(null);
  const { setLoggedInUser } = useAuth();

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");

    if (storedUser) {
      const user = JSON.parse(storedUser);
      if (user?.id) {
        setUserId(user.id); // Set userId in state

        // Fetch user details
        fetch(`https://interior-db.onrender.com/users/${user.id}`)
          .then((response) => response.json())
          .then((data) => setUserData(data))
          .catch((error) => console.error("Error fetching user data:", error));
      }
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file); // Convert image to Base64
      reader.onloadend = () => {
        const base64Image = reader.result; // Get Base64 string
        setUserData((prevData) => ({ ...prevData, avatar: base64Image })); // Update state
      };
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!userId) {
      console.error("User ID is missing.");
      return;
    }

    fetch(`https://interior-db.onrender.com/users/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((updatedUser) => {
        console.log("User updated successfully:", updatedUser);
        localStorage.setItem("loggedInUser", JSON.stringify(updatedUser)); // Update localStorage
        setLoggedInUser(updatedUser);
        closeModal();
        toast.success("Profile Updated");
        // window.location.reload();
      })
      .catch((error) => console.error("Error updating user:", error));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed  z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div
        className="bg-white rounded-lg p-6 w-full max-w-2xl shadow-lg"
        data-aos="fade-down"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Edit Personal Information</h2>
          <button
            className="text-gray-600 w-7 h-7 rounded-md bg-gray-200 hover:bg-green-950 hover:text-white"
            onClick={closeModal}
          >
            <i className="fa-solid fa-times"></i>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              className="w-full mt-1 p-2 border rounded-md"
              placeholder="Enter your name"
              value={userData.name}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[200px]">
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                className="w-full mt-1 p-2 border rounded-md"
                placeholder="Enter email"
                value={userData.email}
                onChange={handleChange}
              />
            </div>
            <div className="flex-1 min-w-[200px]">
              <label className="block text-sm font-medium">Phone</label>
              <input
                type="text"
                name="phone"
                className="w-full mt-1 p-2 border rounded-md"
                placeholder="Enter Phone Number"
                value={userData.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[200px]">
              <label className="block text-sm font-medium">Gender</label>
              <select
                name="gender"
                className="w-full mt-1 p-2 border rounded-md"
                onChange={handleChange}
                value={userData.gender}
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="flex-1 min-w-[200px]">
              <label className="block text-sm font-medium">Avatar</label>
              <input
                type="file"
                accept="image/png, image/jpg, image/jpeg, image/svg+xml"
                className="w-full mt-1 p-2 border rounded-md"
                onChange={handleFileChange}
              />
              {userData.avatar && (
                <img
                  src={userData.avatar}
                  alt="Avatar Preview"
                  className="mt-2 w-16 h-16 rounded-full object-cover"
                />
              )}
            </div>
          </div>

          <div className="flex gap-4 mt-6">
            <button
              type="button"
              className="border border-[#3b5d50] text-[#3b5d50] px-4 py-2 rounded-md hover:bg-[#3b5d50] hover:text-white"
              onClick={closeModal}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-[#3b5d50] text-white px-4 py-2 rounded-md hover:bg-[#2f4a3f]"
            >
              Save changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfileForm;
