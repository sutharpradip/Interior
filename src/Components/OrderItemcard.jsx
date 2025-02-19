import React from "react";
import { Link } from "react-router-dom";

function OrderItemCard({
  id,
  image,
  name,
  price,
  quantity,
  soldBy,
  details,
  status,
  updates,
}) {
  return (
    <Link key={id} className="bg-white block p-6 rounded-lg shadow-md">
      <div className="inline-flex justify-between items-center space-x-5 mb-6">
        <div className="icon flex justify-center items-center text-[#3b5d50] bg-gray-200 p-2 rounded-full w-9 h-9">
          <i className="fa-solid fa-truck-fast"></i>
        </div>
        <p className="font-semibold">{updates}</p>
        <span className="bg-[#3b5d50] px-2 py-1 rounded text-white text-sm">
          {status}
        </span>
      </div>

      <div className="flex items-center gap-3">
        <div className="order-image w-1/4 bg-gray-100 rounded-md">
          <img className="" src={image} alt={name} />
        </div>

        <div className="order-item-details text-sm flex flex-col gap-2">
          <h3 className="font-bold text-lg">{name}</h3>
          <p className="">{details}</p>
          <span>
            Price: <strong>₹{price}</strong>
          </span>
          <span>
            Sold By: <strong>{soldBy}</strong>
          </span>
          <span>
            Quantity: <strong>{quantity}</strong>
          </span>
        </div>
      </div>
    </Link>
  );
}

export default OrderItemCard;
