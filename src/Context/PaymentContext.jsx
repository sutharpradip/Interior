import { createContext, useContext, useState } from "react";
import { useAuth } from "./UserAuth";
import { toast } from "react-toastify";

const PaymentContext = createContext();

export const PaymentProvider = ({ children }) => {
  const { loggedInUser, setLoggedInUser } = useAuth();
  const [isPaymentLoading, setIsPaymentLoading] = useState(false);

  const handlePayment = async (totalPayable, onSuccess, selectedAddress) => {
    if (!loggedInUser) {
      toast.error("Please log in to proceed with payment.");
      return;
    }

    setIsPaymentLoading(true);

    try {
      // Fetch the latest user data from db.json
      const response = await fetch(
        `https://interior-db.onrender.com/users/${loggedInUser.id}`
      );
      if (!response.ok) {
        toast.error("Error fetching user data");
        return;
      }
      const latestUser = await response.json();

      if (!latestUser || latestUser.cart.length === 0) {
        toast.error("Your Cart Is Empty");
        return;
      }

      // Update the loggedInUser state with the latest cart data
      setLoggedInUser(latestUser);

      // Dynamically load Razorpay script
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      document.body.appendChild(script);

      script.onload = async () => {
        if (!window.Razorpay) {
          toast.error(
            "Failed to load Razorpay. Check your internet connection."
          );
          return;
        }

        // const totalAmount = latestUser.cart.reduce(
        //   (sum, item) => sum + item.price * item.quantity,
        //   0
        // );

        const options = {
          key: "rzp_test_isGXbfAS0kV5ai",
          amount: totalPayable * 100,
          currency: "INR",
          name: "Interior",
          description: "Test Transaction",
          image: "https://your-logo-url.com",
          handler: async function (response) {
            toast.success("Payment Successful!");

            const newOrder = {
              id: Date.now(),
              items: latestUser.cart,
              address: selectedAddress,
              totalAmount: totalPayable,
              paymentId: response.razorpay_payment_id,
              status: "Paid",
              date: new Date().toISOString(),
            };

            // Store order inside the user's orders array
            const updatedUser = {
              ...latestUser,
              cart: [], // Clear the cart after payment
              orders: [...(latestUser.orders || []), newOrder],
            };

            // Update user in db.json
            await fetch(
              `https://interior-db.onrender.com/users/${latestUser.id}`,
              {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updatedUser),
              }
            );

            // Save to local storage & update state
            localStorage.setItem("loggedInUser", JSON.stringify(updatedUser));
            setLoggedInUser(updatedUser);

            if (onSuccess) {
              onSuccess(); // Redirect after successful payment
            }
          },
          prefill: {
            name: latestUser.name,
            email: latestUser.email,
          },
          theme: { color: "#3399cc" },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
      };

      script.onerror = () => {
        toast.error("Razorpay script failed to load.");
      };
    } catch (error) {
      console.error("Error fetching user data:", error);
      toast.error("An error occurred while fetching user data.");
    } finally {
      setIsPaymentLoading(false);
    }
  };

  return (
    <PaymentContext.Provider value={{ handlePayment, isPaymentLoading }}>
      {children}
    </PaymentContext.Provider>
  );
};

// Custom hook to use PaymentContext
export const usePayment = () => useContext(PaymentContext);
