import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./header.css";
import LoginModal from "../../Components/LoginModal";
import RegisterModal from "../../Components/RegisterModal";
import { toast } from "react-toastify";
import { useAuth } from "../../Context/UserAuth";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false); // 🔄 Logout loading state

  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const { logout, loggedInUser } = useAuth();

  // Handle logout with loading
  const handleLogout = async () => {
    setIsLoggingOut(true); // Start loading

    setTimeout(() => {
      toast.warn(`${loggedInUser.name} is logged Out`);
      logout();
      setIsDropdownOpen(false);
      setIsLoggingOut(false); // Stop loading
    }, 1500); // Simulate API delay
  };

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
      setHeaderFixed(window.scrollY > 600);
      if (window.scrollY > 1) setIsMenuOpen(false);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const LinkClick = () => setIsMenuOpen(false);

  return (
    <>
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
              {["/", "/shop", "/about", "/blogs", "/contact"].map(
                (path, idx) => (
                  <li className="lg:mx-4 mx-0" key={idx}>
                    <NavLink
                      to={path}
                      className={({ isActive }) =>
                        `inline-flex p-1 items-center font-medium ${
                          isActive ? "text-yellow-400 active" : "text-gray-400"
                        } hover:text-yellow-300 duration-200 md:text-sm relative`
                      }
                      onClick={LinkClick}
                    >
                      {["Home", "Shop", "About Us", "Blog", "Contact Us"][idx]}
                    </NavLink>
                  </li>
                )
              )}
            </ul>

            <ul className="flex items-center mt-5 md:mt-0 relative">
              <li className="mr-5">
                <NavLink
                  to="/cart"
                  className={({ isActive }) =>
                    `inline-flex items-center text-sm font-semibold ${
                      isActive ? "text-yellow-400" : "text-white"
                    } hover:text-yellow-300 duration-200`
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    loggedInUser
                      ? navigate("/cart")
                      : setIsLoginModalOpen(true);
                  }}
                >
                  <i className="fa-solid fa-cart-shopping"></i>
                </NavLink>
              </li>

              <li>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="text-white text-sm font-semibold hover:text-yellow-300 duration-200"
                >
                  {loggedInUser ? (
                    <div className="avatar flex object-cover w-7 h-7 rounded-full overflow-hidden">
                      <img
                        className="block"
                        src={loggedInUser.avatar}
                        alt={loggedInUser.name}
                      />
                    </div>
                  ) : (
                    <i className="fa-solid fa-user"></i>
                  )}
                </button>

                {isDropdownOpen && (
                  <div
                    ref={dropdownRef}
                    className="absolute right-0 mt-2 w-full md:w-40 bg-white rounded-lg shadow-lg overflow-hidden z-50"
                  >
                    <ul>
                      <li className="px-4 py-2 text-gray-700 font-medium">
                        {loggedInUser ? (
                          <NavLink to="/account">{loggedInUser.name}</NavLink>
                        ) : (
                          "Please Login"
                        )}
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
                            disabled={isLoggingOut}
                          >
                            {isLoggingOut ? (
                              <div className="flex items-center">
                                <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-gray-600 mr-2"></div>
                                Logging out...
                              </div>
                            ) : (
                              "Logout"
                            )}
                          </button>
                        </li>
                      )}
                    </ul>
                  </div>
                )}
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
