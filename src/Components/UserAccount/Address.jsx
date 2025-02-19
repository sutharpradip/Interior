import React from "react";

function Address() {
  return (
    <>
      <div className=" ms-6 p-6 rounded-lg shadow-sm bg-gray-100">
        <h2 className="text-3xl font-semibold mb-6">Saved Addresses</h2>

        <div className="flex flex-wrap md:flex-row flex-col justify-between">
          <div className="bg-white lg:w-[49%] shadow-md rounded-lg px-6 py-4 flex flex-col gap-3 border border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-2xl">Kartik Patel</h2>
              <span className="text-white bg-[#3b5d50] px-3 py-1 rounded-md text-xs">
                Home
              </span>
            </div>

            {/* Address Details */}
            <div className="text-gray-700 space-y-1">
              <div className="flex gap-4">
                <p className="font-semibold">Address:</p>
                <span>
                  A-605, Ship Aaron, Sindhu Bhawan Road, Ahmedabad gdagcfiubwg
                </span>
              </div>

              <div className="flex gap-4">
                <p className="font-semibold">Pincode:</p>
                <span>380059</span>
              </div>

              <div className="flex gap-7">
                <p className="font-semibold">Phone:</p>
                <span>+91 1234567890</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 mt-3">
              <button className="bg-[#3b5d50] text-white px-4 py-2 rounded-lg">
                Edit
              </button>
              <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg">
                Remove
              </button>
            </div>
          </div>

          <div className="bg-white lg:w-[49%] shadow-md rounded-lg px-6 py-4 flex flex-col gap-3 border border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-2xl">Kartik Patel</h2>
              <span className="text-white bg-[#3b5d50] px-3 py-1 rounded-md text-xs">
                Home
              </span>
            </div>

            {/* Address Details */}
            <div className="text-gray-700 space-y-1">
              <div className="flex gap-4">
                <p className="font-semibold">Address:</p>
                <span>
                  A-605, Ship Aaron, Sindhu Bhawan Road, Ahmedabad gdagcfiubwg
                </span>
              </div>

              <div className="flex gap-4">
                <p className="font-semibold">Pincode:</p>
                <span>380059</span>
              </div>

              <div className="flex gap-7">
                <p className="font-semibold">Phone:</p>
                <span>+91 1234567890</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 mt-3">
              <button className="bg-[#3b5d50] text-white px-4 py-2 rounded-lg">
                Edit
              </button>
              <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg">
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Address;
