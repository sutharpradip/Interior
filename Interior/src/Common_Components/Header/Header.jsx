import React from "react";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

import "./header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);

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

  return (
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
            isMenuOpen ? "h-[360px] md:h-0" : "h-0"
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
                to="/services"
                className={({ isActive }) =>
                  `inline-flex p-1 items-center font-medium ${
                    isActive ? "text-yellow-400 active" : "text-gray-400"
                  } hover:text-yellow-300 duration-200 md:text-sm relative`
                }
                onClick={LinkClick}
              >
                Services
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

          <ul className="flex  items-center mt-5 md:mt-0">
            <li>
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  `inline-flex items-center mr-10 text-sm font-semibold ${
                    isActive ? "text-white" : "text-white"
                  } hover:text-yellow-300 duration-200`
                }
                onClick={LinkClick}
              >
                <i class="fa-solid fa-user"></i>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  `inline-flex items-center text-sm font-semibold ${
                    isActive ? "text-white" : "text-white"
                  } hover:text-yellow-300 duration-200`
                }
                onClick={LinkClick}
              >
                <i class="fa-solid fa-cart-shopping"></i>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
