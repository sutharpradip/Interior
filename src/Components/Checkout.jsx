import React, { useState } from "react";
import AddressCard from "./UserAccount/AddressCard";
import { useAddress } from "../Context/AddressContext";
import { useAuth } from "../Context/UserAuth";
import AddressForm from "./UserAccount/AddressForm";

const Checkout = () => {
  const [selectedAddress, setSelectedAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [AddrFormOpen, setAddrFormOpen] = useState(false);

  const handlePayment = (event) => {
    setPaymentMethod(event.target.value);
  };

  return (
    <div className="flex flex-col lg:flex-row w-full max-w-7xl mx-auto p-4 lg:p-8">
      {/* Delivery Address Section */}
      <div className="w-full md:w-8/12 bg-gray-100 rounded-xl p-6 mb-6 lg:mb-0">
        <h2 className="text-xl font-semibold mb-4">Delivery Address</h2>
        <button onClick={() => setAddrFormOpen(true)}>Add New Address</button>

        <div className="flex flex-col gap-8">
          <div className="flex flex-wrap flex-col md:flex-row justify-between">
            <div
              className={`border w-full lg:w-[49%] rounded-lg cursor-pointer flex items-center justify-between ${
                selectedAddress === "home"
                  ? "border-[rgb(59,93,80)]"
                  : "border-gray-300"
              }`}
              onClick={() => setSelectedAddress("home")}
            >
              <AddressCard />
            </div>
          </div>

          {/* payment  */}
          <div className="payment-methods ">
            <h2 className="text-xl font-semibold mb-4">Payment Options</h2>

            <div className="flex flex-col gap-3">
              <div className="flex bg-white p-2 rounded gap-3">
                <input
                  name="payment"
                  id="cash"
                  value="cash"
                  type="radio"
                  checked={paymentMethod === "cash"}
                  onChange={handlePayment}
                />
                <label htmlFor="cash">Cash on delivery</label>
              </div>

              <div className="flex bg-white p-2 rounded gap-3">
                <input
                  name="payment"
                  id="razorpay"
                  value="razorpay"
                  type="radio"
                  checked={paymentMethod === "razorpay"}
                  onChange={handlePayment}
                />
                <label htmlFor="razorpay">RazorPay</label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Order Summary Section */}
      <div className=" w-full md:w-2/6 bg-white shadow-lg rounded-xl p-6 ml-0 lg:ml-6">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
        <div className="space-y-4">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b pb-2"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
                <p>Jugadi Vadapau</p>
              </div>
              <p className="font-semibold">$35.00</p>
            </div>
          ))}
        </div>

        <div className="mt-4 border-t pt-4">
          <div className="flex justify-between text-gray-700">
            <p>Subtotal</p>
            <p>$35.00</p>
          </div>
          <div className="flex justify-between text-gray-700">
            <p>Shipping</p>
            <p>$35.00</p>
          </div>
          <div className="flex justify-between text-gray-700">
            <p>Tax</p>
            <p>$35.00</p>
          </div>
          <div className="flex justify-between text-[rgb(59,93,80)] font-semibold">
            <p>Coupon</p>
            <p>-$35.00</p>
          </div>
        </div>

        <div className="mt-4 border-t pt-4 flex justify-between font-semibold text-lg">
          <p>Total Payable</p>
          <p>$35.00</p>
        </div>
        <button className="w-full mt-4 bg-[rgb(59,93,80)] text-white py-3 rounded-lg">
          Place Order
        </button>
      </div>

      <AddressForm
        isFormOpen={AddrFormOpen}
        onClose={() => setAddrFormOpen(false)}
      />
    </div>
  );
};

export default Checkout;
