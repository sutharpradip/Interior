import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import CartItemCard from "../Components/CartItemCard";
import { useCart } from "../Context/CartContext";

function Cart() {
  const { cart } = useCart();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true); // 👈 Loading state

  useEffect(() => {
    // Simulate loading effect
    const timer = setTimeout(() => {
      setIsLoading(false); // 🔄 Stop loading after fetching data
    }, 1000); // Adjust delay as needed

    return () => clearTimeout(timer); // Cleanup timer
  }, [cart]);

  const ProccedPayment = () => {
    if ((cart || []).length === 0) {
      toast.error("Your cart is empty");
    } else {
      navigate("/checkout");
    }
  };

  // Calculate totals
  const totalItems = (cart || []).reduce(
    (prev, item) => prev + item.quantity,
    0
  );

  const cartTotalPrice = (cart || []).reduce(
    (prev, item) => prev + item.price * item.quantity,
    0
  );

  const discount = cartTotalPrice > 100 ? cartTotalPrice * 0.1 : 0;
  const shipping = cartTotalPrice > 0 ? 20 : 0;
  const finalTotal = cartTotalPrice - discount + shipping;

  return (
    <section className="pt-10 pb-20">
      <div className="container">
        <div className="flex gap-10 justify-between flex-wrap">
          {/* Cart Items */}
          <div className="w-full md:w-3/5">
            <div className="flex flex-col gap-3">
              {isLoading ? (
                <div className="text-center py-10">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-green-800 mx-auto"></div>
                  <p className="text-gray-600 mt-4">Loading cart items...</p>
                </div>
              ) : (cart || []).length === 0 ? (
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
                    soldBy={item.soldBy}
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
                <button
                  onClick={ProccedPayment}
                  className="bg-green-800 text-white w-full p-2 inline-block rounded-md"
                >
                  Proceed to Checkout
                </button>

                <Link
                  to="/shop"
                  className="border-green-800 text-green-800 border w-full p-2 inline-block rounded-md"
                >
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
