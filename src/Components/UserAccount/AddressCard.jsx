import React, { useState } from "react";

function Address({ address, onEdit, onRemove }) {
  if (!address) return null;

  return (
    <>
      <div className="flex flex-wrap md:flex-row flex-col justify-between">
        <div className="bg-white w-full shadow-md rounded-lg px-6 py-4 flex flex-col gap-3 border border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-2xl">{address.name}</h2>
            <span className="text-white bg-[#3b5d50] px-3 py-1 rounded-md text-xs">
              {address.type}
            </span>
          </div>

          {/* Address Details */}
          <div className="text-gray-700 space-y-1">
            <div className="flex gap-4">
              <p className="font-semibold">Address:</p>
              <span>
                {address.fullAddress}, {address.city}, {address.state},{" "}
                {address.country}
              </span>
            </div>

            <div className="flex gap-4">
              <p className="font-semibold">Pincode:</p>
              <span>{address.pincode}</span>
            </div>

            <div className="flex gap-7">
              <p className="font-semibold">Phone:</p>
              <span>{address.phone}</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 mt-3">
            <button
              onClick={() => onEdit(address)}
              className="bg-[#3b5d50] text-white px-4 py-2 rounded-lg"
            >
              Edit
            </button>
            <button
              onClick={() => onRemove(address.id)}
              className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Address;
