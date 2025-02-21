import React, { useEffect, useState } from "react";
import { useAuth } from "../../Context/UserAuth";
import OrderItemCard from "../OrderItemcard";

function Orders() {
  const { loggedInUser, setLoggedInUser } = useAuth();
  const [userOrders, setUserOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUpdatedUser = async () => {
      if (!loggedInUser) return;

      try {
        const response = await fetch(
          `https://interior-db.onrender.com/users/${loggedInUser.id}`
        );
        if (response.ok) {
          const updatedUser = await response.json();
          localStorage.setItem("loggedInUser", JSON.stringify(updatedUser)); // Sync local storage
          setLoggedInUser(updatedUser);
          setUserOrders(updatedUser.orders || []); // Store orders separately
        }
      } catch (error) {
        console.error("Failed to fetch updated user data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUpdatedUser();
  }, [loggedInUser?.id]); // Fetch data when user ID changes

  if (!loggedInUser) {
    return (
      <p className="text-center text-gray-600">
        Please log in to view your orders.
      </p>
    );
  }

  return (
    <div className=" p-6 rounded-lg shadow-sm bg-gray-100">
      <h2 className="text-xl font-semibold mb-4">My Orders</h2>
      <div className="flex flex-col gap-5">
        {loading ? (
          <p>Loading...</p>
        ) : userOrders.length > 0 ? (
          userOrders.map((order) => (
            <OrderItemCard
              key={order.id}
              image={order.items[0]?.image || ""}
              name={order.items[0]?.name || "Unknown Item"}
              price={order.totalAmount}
              quantity={order.items.length}
              soldBy={order.items[0]?.soldBy || "N/A"}
              details={order.items[0]?.details || ""}
              status={order.status}
              updates={`Order ID: ${order.id}`}
            />
          ))
        ) : (
          <p>No orders placed yet.</p>
        )}
      </div>
    </div>
  );
}

export default Orders;
