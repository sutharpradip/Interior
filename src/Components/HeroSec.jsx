import React from "react";

function HeroSec({ heading = "Modern Interior Design Studio", headingSpan }) {
  return (
    <section
      className="home py-20 md:py-0"
      style={{ backgroundColor: "#3b5d50" }}
    >
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between items-center">
          <div className=" w-full md:w-2/5">
            <div className="hero-text">
              <h1 className="text-[3.3rem] font-inter mb-2 text-white font-bold leading-tight">
                {heading} <span className="block">{headingSpan}</span>
              </h1>
              <p className="font-inter text-sm text-gray-400 my-7">
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
              </p>
              <div className="flex gap-5">
                <button className="duration-200 py-3 px-7 bg-yellow-400 hover:bg-yellow-500 rounded-full font-medium">
                  Shop Now
                </button>
                <button className="duration-200 border-2 border-gray-400 hover:border-white px-7 py-3 rounded-full text-white font-medium">
                  Explore
                </button>
              </div>
            </div>
          </div>

          <div className=" w-full md:w-3/5 md:ps-20">
            <img className="" src="public/Hero_Couch.png" alt="couch" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSec;
