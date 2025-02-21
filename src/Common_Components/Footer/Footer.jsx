import React from "react";
import "./footer.css";
import { Link, NavLink } from "react-router-dom";

function Footer() {
  const handleNewsSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <footer className="">
      <div className="container pt-20 mx-auto">
        <div className="flex flex-wrap justify-center  lg:justify-between relative">
          <div className="w-full md:w-7/12">
            <div className="flex gap-2  mb-2">
              <span className="text-gray-400">
                <i className="fa-solid fa-envelope"></i>
              </span>
              <h2 className="text-gray-500 text-lg font-normal">
                Subscribe to Newsletter
              </h2>
            </div>
            <form
              onSubmit={handleNewsSubmit}
              className="flex flex-wrap gap-3 mb-3"
            >
              <div className="name w-full md:w-[unset]">
                <input
                  className="border px-3 border-gray-300 w-full rounded-md py-2"
                  type="text"
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="email w-full md:w-[unset]">
                <input
                  className="border px-3 border-gray-300 w-full rounded-md py-2"
                  type="text"
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="submit w-full md:w-[unset] ">
                <button
                  className="border px-6 bg-[#3b5d50] border-gray- rounded-md py-2"
                  type="submit"
                >
                  <i className="fa-solid text-white fa-paper-plane"></i>
                </button>
              </div>
            </form>
          </div>

          <div className="w-full md:block hidden static lg:absolute right-0 lg:bottom-[-6rem] md:w-2/6 p-5">
            <img className="" src="public/footer-sofa.png" alt="" />
          </div>
        </div>

        <div className="flex  flex-wrap justify-between items-center md:my-10">
          <div className="w-full md:w-1/3 ">
            <Link to="/" className="text-2xl font-semibold text-[#3b5d50]">
              Interior
            </Link>

            <p className="my-5 text-gray-500">
              Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
              quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
              vulputate velit imperdiet dolor tempor tristique. Pellentesque
              habitant
            </p>

            <div className="icons ul flex gap-4">
              <li className="inline-block">
                <Link>
                  <i className="bg-gray-200 duration-300 text-[#3b5d50] hover:text-white hover:bg-[#3b5d50] p-3 rounded-full w-[40px] h-[40px] !flex justify-center fa-brands fa-facebook-f"></i>
                </Link>
              </li>

              <li className="inline-block ">
                <Link>
                  <i className="bg-gray-200 duration-300 text-[#3b5d50] hover:text-white hover:bg-[#3b5d50] p-3 rounded-full w-[40px] h-[40px] !flex justify-center fa-brands fa-x-twitter"></i>
                </Link>
              </li>

              <li className="inline-block ">
                <Link>
                  <i className="bg-gray-200 duration-300 text-[#3b5d50] hover:text-white hover:bg-[#3b5d50] p-3 rounded-full w-[40px] h-[40px] !flex justify-center fa-brands fa-instagram"></i>
                </Link>
              </li>

              <li className="inline-block ">
                <Link>
                  <i className="bg-gray-200 duration-300 text-[#3b5d50] hover:text-white hover:bg-[#3b5d50] p-3 rounded-full w-[40px] h-[40px] !flex justify-center fa-brands fa-linkedin-in"></i>
                </Link>
              </li>
            </div>
          </div>

          <div className="w-full md:w-2/3">
            <div className="flex flex-wrap gap-y-4 justify-center mt-5 ">
              <div className="w-full md:w-1/2 lg:w-1/4">
                <ul className="md:ms-14 ms-0">
                  <li className="my-3">
                    <Link className="hover:text-gray-500 py-1 duration-300 text-[#3b5d50]">
                      About Us
                    </Link>
                  </li>

                  <li className="my-3">
                    <Link className="hover:text-gray-500 py-1 duration-300 text-[#3b5d50]">
                      Services
                    </Link>
                  </li>

                  <li className="my-3">
                    <Link className="hover:text-gray-500 py-1 duration-300 text-[#3b5d50]">
                      Blog
                    </Link>
                  </li>

                  <li className="my-3">
                    <Link className="hover:text-gray-500 py-1 duration-300 text-[#3b5d50]">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="w-full md:w-1/2 lg:w-1/4">
                <ul className="md:ms-14 ms-0">
                  <li className="my-3">
                    <Link className="hover:text-gray-500 py-1 duration-300 text-[#3b5d50]">
                      Support
                    </Link>
                  </li>

                  <li className="my-3">
                    <Link className="hover:text-gray-500 py-1 duration-300 text-[#3b5d50]">
                      Knowledge base
                    </Link>
                  </li>

                  <li className="my-3">
                    <Link className="hover:text-gray-500 py-1 duration-300 text-[#3b5d50]">
                      Live chat
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="w-full md:w-1/2 lg:w-1/4">
                <ul className="md:ms-14 ms-0">
                  <li className="my-3">
                    <Link className="hover:text-gray-500 py-1 duration-300 text-[#3b5d50]">
                      Jobs
                    </Link>
                  </li>

                  <li className="my-3">
                    <Link className="hover:text-gray-500 py-1 duration-300 text-[#3b5d50]">
                      Our Team
                    </Link>
                  </li>

                  <li className="my-3">
                    <Link className="hover:text-gray-500 py-1 duration-300 text-[#3b5d50]">
                      Leadership
                    </Link>
                  </li>

                  <li className="my-3">
                    <Link className="hover:text-gray-500 py-1 duration-300 text-[#3b5d50]">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="w-full md:w-1/2 lg:w-1/4">
                <ul className="md:ms-14 ms-0">
                  <li className="my-3">
                    <Link className="hover:text-gray-500 py-1 duration-300 text-[#3b5d50]">
                      Nordic Chair
                    </Link>
                  </li>

                  <li className="my-3">
                    <Link className="hover:text-gray-500 py-1 duration-300 text-[#3b5d50]">
                      Kruzo Aero
                    </Link>
                  </li>

                  <li className="my-3">
                    <Link className="hover:text-gray-500 py-1 duration-300 text-[#3b5d50]">
                      Ergonomic Chair
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-5 md:justify-between md:text-start text-center border-t-2 py-5">
          <div className="w-full md:w-1/3">
            <p className="text-gray-600">
              Copyright ©2024. All Rights Reserved.
            </p>
          </div>

          <div className="w-full md:w-1/3 ">
            <div className="flex gap-5 md:justify-end justify-center">
              <Link className="hover:text-gray-500 py-1 duration-300 text-[#3b5d50]">
                Terms & Conditions
              </Link>

              <Link className="hover:text-gray-500 py-1 duration-300 text-[#3b5d50]">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
