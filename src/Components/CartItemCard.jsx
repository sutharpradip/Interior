import React, { useState } from "react";
import { useCart } from "../Context/CartContext"; // Import cart functions

function CartItemCard({ id, image, name, price, quantity, soldBy }) {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  const handleDecrease = () => {
    if (quantity === 1) {
      removeFromCart(id); // Remove item if quantity is 1
    } else {
      decreaseQuantity(id);
    }
  };

  return (
    <>
      <div className="bg-gray-100 border p-5 rounded-lg">
        <div className="cart-item flex md:flex-row flex-col gap-8 justify-between ">
          {/* Product Details */}
          <div className="flex gap-3 md:w-1/3 w-full">
            <div className="cart-item-image rounded-md overflow-hidden w-[75px] h-[75px]">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="cart-item-details">
              <h2 className="font-semibold text-lg">{name}</h2>
              <h3 className="mt-3 text-gray-600 font-normal">
                Sold By:{" "}
                <span className="font-medium text-gray-800">{soldBy}</span>
              </h3>
            </div>
          </div>

          {/* Price */}
          <div className="cart-item-price md:w-1/5 w-full">
            <h2 className="font-semibold text-lg">Price</h2>
            <h3 className="mt-3 font-medium">${price}</h3>
          </div>

          {/* Quantity Controls */}
          <div className="cart-item-quantity md:w-1/5 w-full">
            <h2 className="font-semibold text-lg">Qty</h2>
            <div className="qty-btns mt-3 bg-gray-200 px-2 py-1 rounded inline-flex gap-x-3">
              <button
                onClick={handleDecrease}
                className="bg-white w-[25px] h-[25px] flex justify-center items-center rounded"
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                onClick={() => increaseQuantity(id)}
                className="bg-white w-[25px] h-[25px] flex justify-center items-center rounded"
              >
                +
              </button>
            </div>
          </div>

          {/* Total Price */}
          <div className="cart-item-total">
            <h2 className="font-semibold text-lg">Total</h2>
            <h3 className="mt-3 font-medium">
              ${(price * quantity).toFixed(2)}
            </h3>
          </div>
        </div>
        <button
          onClick={() => removeFromCart(id)}
          className="bg-red-600 px-3 py-1 rounded-md mt-4 text-white"
        >
          Remove
        </button>
      </div>
    </>
  );
}

export default CartItemCard;
