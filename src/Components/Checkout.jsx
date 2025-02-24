import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import AddressCard from "./UserAccount/AddressCard";
import { useAddress } from "../Context/AddressContext";
import AddressForm from "./UserAccount/AddressForm";
import { useCart } from "../Context/CartContext";
import { usePayment } from "../Context/PaymentContext";
import { toast } from "react-toastify";

const Checkout = () => {
  const [selectedAddress, setSelectedAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [AddrFormOpen, setAddrFormOpen] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // 👈 Loading state

  const { cart, clearCart } = useCart();
  const { addresses, removeAddress, editAddress } = useAddress();
  const { handlePayment } = usePayment();

  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    if (!selectedAddress) {
      toast.error("Please select a delivery address!");
      return;
    }
    if (!paymentMethod) {
      toast.error("Please select a payment method!");
      return;
    }
    if (cart.length === 0) {
      toast.error("Your cart is empty!");
      return;
    }

    if (paymentMethod === "cash") {
      toast.success("Order placed successfully!");
      clearCart();
      setTimeout(() => navigate("/orderplaced"), 1000);
      return;
    } else if (paymentMethod === "razorpay") {
      setIsLoading(true); // Start loading

      handlePayment(
        totalPayable,
        () => {
          setIsLoading(false); // Stop loading on success
          navigate("/orderplaced");
          clearCart();
        },
        selectedAddress,
        () => {
          setIsLoading(false); // Stop loading on failure
          toast.error("Payment failed. Please try again.");
        }
      );
    }
  };

  const { subtotal, shipping, tax, coupon, totalPayable } = useMemo(() => {
    const subtotal = cart?.reduce(
      (prev, item) => prev + item.price * item.quantity,
      0
    );

    const shipping = subtotal > 0 ? 20 : 0;
    const tax = +(subtotal * 0.1).toFixed(2); // 10% tax
    const coupon = subtotal > 50 ? 5 : 0; // $5 off if subtotal > $50
    const totalPayable = subtotal + shipping + tax - coupon;

    return { subtotal, shipping, tax, coupon, totalPayable };
  }, [cart]);

  return (
    <section className="pb-20">
      <div className="flex flex-col lg:flex-row w-full max-w-7xl mx-auto p-4 lg:p-8">
        {/* Delivery Address Section */}
        <div className="w-full md:w-8/12 bg-gray-100 rounded-xl p-6 mb-6 lg:mb-0 border">
          <div className="flex justify-between mb-7">
            <h2 className="text-xl font-semibold">Delivery Address</h2>
            <button
              className="border border-[#3b5d50] px-5 py-2 hover:bg-[#3b5d50] hover:text-white transition-all rounded-md"
              onClick={() => setAddrFormOpen(true)}
            >
              Add New Address
            </button>
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex flex-wrap flex-col md:flex-row justify-between">
              {addresses.map((addr, index) => (
                <div
                  key={index}
                  className={`border w-full lg:w-[49%] rounded-lg cursor-pointer flex items-center justify-between transition-all ${
                    selectedAddress === addr
                      ? "border-[rgb(59,93,80)] scale-105"
                      : "border-gray-300"
                  }`}
                  onClick={() => setSelectedAddress(addr)}
                >
                  <AddressCard
                    address={addr}
                    onEdit={() => setEditingAddress(addr)}
                    onRemove={() => removeAddress(addr.id)}
                  />
                </div>
              ))}
            </div>

            {/* Payment Options */}
            <div className="payment-methods">
              <h2 className="text-xl font-semibold mb-4">Payment Options</h2>

              <div className="flex flex-col gap-3">
                <div className="flex bg-white p-2 rounded gap-3">
                  <input
                    name="payment"
                    id="cash"
                    value="cash"
                    type="radio"
                    checked={paymentMethod === "cash"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
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
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <label htmlFor="razorpay">RazorPay</label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary Section */}
        <div className="w-full md:w-2/6 bg-gray-100 border rounded-xl p-6 ml-0 lg:ml-6">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="space-y-4">
            {cart?.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between border-b pb-5"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-lg">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <p>{item.name}</p>
                </div>
                <p className="font-semibold">${item.price}</p>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <div className="flex justify-between text-gray-700">
              <p>Subtotal</p>
              <p>${subtotal.toFixed(2)}</p>
            </div>
            <div className="flex justify-between text-gray-700">
              <p>Shipping</p>
              <p>${shipping.toFixed(2)}</p>
            </div>
            <div className="flex justify-between text-gray-700">
              <p>Tax (10%)</p>
              <p>${tax.toFixed(2)}</p>
            </div>
            <div className="flex justify-between text-[rgb(59,93,80)] font-semibold">
              <p>Coupon</p>
              <p>-${coupon.toFixed(2)}</p>
            </div>
          </div>

          {/* 🧾 Total Payable */}
          <div className="mt-4 border-t pt-4 flex justify-between font-semibold text-lg">
            <p>Total Payable</p>
            <p>${totalPayable.toFixed(2)}</p>
          </div>

          <button
            onClick={handlePlaceOrder}
            className={`w-full mt-4 py-3 rounded-lg flex justify-center items-center gap-2 ${
              isLoading
                ? "bg-gray-400 cursor-not-allowed"
                : !selectedAddress || !paymentMethod
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[rgb(59,93,80)] text-white"
            }`}
            disabled={!selectedAddress || !paymentMethod || isLoading}
          >
            {isLoading ? (
              <>
                <span className="loader border-2 border-t-transparent rounded-full w-5 h-5 animate-spin"></span>
                Processing...
              </>
            ) : (
              "Place Order"
            )}
          </button>
        </div>

        <AddressForm
          existingAddress={editingAddress}
          onClose={() => setAddrFormOpen(false)}
          isFormOpen={AddrFormOpen}
          onSave={(address) => {
            editingAddress ? editAddress(address) : addAddress(address);
          }}
        />
      </div>
    </section>
  );
};

export default Checkout;
