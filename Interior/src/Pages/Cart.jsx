import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import CartItemCard from "../Components/CartItemCard";
import { useCart } from "../Context/CartContext";

function Cart() {
  const { cart } = useCart();
  console.log(cart);

  useEffect(() => {
    console.log("Cart Updated:", cart);
  });

  // Calculate total items
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Calculate cart total price
  const cartTotalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Apply coupon discount (Example: 10% off if cart > $100)
  const discount = cartTotalPrice > 100 ? cartTotalPrice * 0.1 : 0;

  // Fixed shipping cost
  const shipping = cartTotalPrice > 0 ? 20 : 0;

  // Final total after discount
  const finalTotal = cartTotalPrice - discount + shipping;

  return (
    <section className="pt-10 pb-20">
      <div className="container">
        <div className="flex justify-between flex-wrap">
          {/* Cart Items */}
          <div className="w-full md:w-3/5">
            <div className="flex flex-col gap-3">
              {cart.length === 0 ? (
                <p className="text-center text-gray-600">Your cart is empty</p>
              ) : (
                cart.map((item) => (
                  <CartItemCard
                    key={item.id}
                    id={item.id}
                    image={item.image}
                    name={item.name}
                    price={item.price}
                    quantity={item.quantity}
                    soldBy="Furni Store"
                  />
                ))
              )}
            </div>
          </div>

          {/* Cart Summary */}
          <div className="w-full md:w-1/3">
            <div className="cart-summary bg-gray-100 border p-5 rounded-lg">
              <h2 className="font-bold text-2xl mb-2">Cart Summary</h2>

              <div className="flex justify-between border-b-2 border-dashed py-2 mb-1">
                <p>Items in Cart</p>
                <span>{totalItems}</span>
              </div>

              <div className="flex justify-between py-2">
                <p>Cart total price</p>
                <span>${cartTotalPrice.toFixed(2)}</span>
              </div>

              <div className="flex justify-between py-2">
                <p>Coupon</p>
                <span className="text-red-600">-${discount.toFixed(2)}</span>
              </div>

              <div className="flex justify-between border-b-2 border-dashed py-2 mb-1">
                <p>Shipping</p>
                <span>${shipping.toFixed(2)}</span>
              </div>

              <div className="flex justify-between py-2 font-bold">
                <p>Total</p>
                <span>${finalTotal.toFixed(2)}</span>
              </div>

              <div className="flex flex-col gap-2 text-center mt-4">
                <Link className="bg-green-800 text-white w-full p-2 inline-block rounded-md">
                  Proceed to Checkout
                </Link>

                <Link className="border-green-800 text-green-800 border w-full p-2 inline-block rounded-md">
                  Return to Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
