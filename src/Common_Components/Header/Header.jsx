import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./header.css";
import LoginModal from "../../Components/LoginModal";
import RegisterModal from "../../Components/RegisterModal";
// import { useCart } from "../../Context/CartContext";
import { toast } from "react-toastify";
// import { ToastContainer, toast } from "react-toastify";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      setLoggedInUser(JSON.parse(storedUser)); // Parse and set the logged-in user
    }
  }, [isLoginModalOpen]);

  // Handle logout
  const handleLogout = () => {
    toast.warn(`${loggedInUser.name} is logged Out`);
    localStorage.removeItem("loggedInUser");
    setLoggedInUser(null);
    setIsDropdownOpen(false);
    window.location.reload();
  };

  // useEffect(() => {}, [loggedInUser]);

  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
    setIsDropdownOpen(false);
  };

  const handleRegisterClick = () => {
    setIsRegisterModalOpen(true);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 600) {
        setHeaderFixed(true);
      } else {
        setHeaderFixed(false);
      }
      if (window.scrollY > 1) {
        setIsMenuOpen(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const LinkClick = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* <ToastContainer /> */}
      <header
        className={`${
          headerFixed ? "header-fixed" : ""
        } transition-all duration-300 relative flex items-center py-4`}
        style={{ backgroundColor: "#3b5d50" }}
      >
        <div className="container-fluid lg:px-10 px-2 flex-wrap mx-auto flex justify-between items-center">
          <div className="logo">
            <Link className="text-white text-3xl font-semibold" to="/">
              <span>Interior</span>
            </Link>
          </div>

          <div className="btn">
            <button className="nav-btn md:hidden block">
              <i
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`inline-block fa-solid text-2xl text-gray-300 ${
                  isMenuOpen ? "fa-xmark" : "fa-bars"
                }`}
              ></i>
            </button>
          </div>

          <nav
            className={`md:flex basis-full grow md:basis-auto duration-300 ease-out overflow-hidden md:overflow-visible ${
              isMenuOpen ? "h-[525px] md:h-0" : "h-0"
            }`}
          >
            <ul className="flex md:flex-row mt-5 md:mt-0 gap-y-5 flex-col md:items-center justify-center ms-auto mr-10">
              <li className="lg:mx-4 mx-0 ">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `inline-flex p-1 items-center font-medium ${
                      isActive ? "text-yellow-400 active" : "text-gray-400"
                    } hover:text-yellow-300 duration-200 md:text-sm relative`
                  }
                  onClick={LinkClick}
                >
                  Home
                </NavLink>
              </li>

              <li className="lg:mx-4 mx-0 ">
                <NavLink
                  to="/shop"
                  className={({ isActive }) =>
                    `inline-flex p-1 items-center font-medium ${
                      isActive ? "text-yellow-400 active" : "text-gray-400"
                    } hover:text-yellow-300 duration-200 md:text-sm relative`
                  }
                  onClick={LinkClick}
                >
                  Shop
                </NavLink>
              </li>

              <li className="lg:mx-4 mx-0 ">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `inline-flex p-1 items-center font-medium ${
                      isActive ? "text-yellow-400 active" : "text-gray-400"
                    } hover:text-yellow-300 duration-200 md:text-sm relative`
                  }
                  onClick={LinkClick}
                >
                  About Us
                </NavLink>
              </li>

              <li className="lg:mx-4 mx-0 ">
                <NavLink
                  to="/blogs"
                  className={({ isActive }) =>
                    `inline-flex p-1 items-center font-medium ${
                      isActive ? "text-yellow-400 active" : "text-gray-400"
                    } hover:text-yellow-300 duration-200 md:text-sm relative`
                  }
                  onClick={LinkClick}
                >
                  Blog
                </NavLink>
              </li>

              <li className="lg:mx-4 mx-0 ">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `inline-flex p-1 items-center font-medium ${
                      isActive ? "text-yellow-400 active " : "text-gray-400"
                    } hover:text-yellow-300 duration-200 md:text-sm relative`
                  }
                  onClick={LinkClick}
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>

            <ul className="flex items-center mt-5 md:mt-0 relative">
              <li className="">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="text-white text-sm font-semibold hover:text-yellow-300 duration-200"
                >
                  <i className="fa-solid fa-user"></i>
                </button>
                {isDropdownOpen && (
                  <div
                    ref={dropdownRef}
                    className="absolute right-0 mt-2 w-full md:w-40 bg-white rounded-lg shadow-lg overflow-hidden z-50"
                  >
                    <ul>
                      <li className="px-4 py-2 text-gray-700 font-medium">
                        {loggedInUser
                          ? `Welcome, ${loggedInUser.name}`
                          : "Please login"}
                      </li>

                      {!loggedInUser ? (
                        <>
                          <li>
                            <button
                              className="block w-full text-start px-4 py-2 text-gray-700 hover:bg-gray-200"
                              onClick={handleLoginClick}
                            >
                              Login
                            </button>
                          </li>
                          <li>
                            <button
                              className="block w-full text-start px-4 py-2 text-gray-700 hover:bg-gray-200"
                              onClick={handleRegisterClick}
                            >
                              Register
                            </button>
                          </li>
                        </>
                      ) : (
                        <li>
                          <button
                            className="block w-full text-start px-4 py-2 text-gray-700 hover:bg-gray-200"
                            onClick={handleLogout}
                          >
                            Logout
                          </button>
                        </li>
                      )}
                    </ul>
                  </div>
                )}
              </li>

              <li className="ml-5">
                <NavLink
                  to="/cart"
                  className={({ isActive }) =>
                    `inline-flex items-center text-sm font-semibold ${
                      isActive ? "text-yellow-400" : "text-white"
                    } hover:text-yellow-300 duration-200`
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    if (loggedInUser) {
                      // window.location.href = "/cart";
                      navigate("/cart");
                    } else {
                      setIsLoginModalOpen(true);
                    }
                  }}
                >
                  <i className="fa-solid fa-cart-shopping"></i>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Login Modal */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />

      {/* Register Modal */}
      <RegisterModal
        isRegisterOpen={isRegisterModalOpen}
        onClose={() => setIsRegisterModalOpen(false)}
      />
    </>
  );
}

export default Header;
