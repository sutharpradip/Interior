import React, { useEffect, useState } from "react";
import { useAuth } from "../../Context/UserAuth";
import { Link } from "react-router-dom";
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
          localStorage.setItem("loggedInUser", JSON.stringify(updatedUser));
          setLoggedInUser(updatedUser);
          setUserOrders(updatedUser.orders || []);
        }
      } catch (error) {
        console.error("Failed to fetch updated user data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUpdatedUser();
  }, [loggedInUser?.id]);

  if (!loggedInUser) {
    return (
      <p className="text-center text-gray-600">
        Please log in to view your orders.
      </p>
    );
  }

  return (
    <div className="p-6 rounded-lg shadow-sm bg-gray-100">
      <h2 className="text-xl font-semibold mb-4">My Orders</h2>
      <div className="flex flex-col gap-5">
        {loading ? (
          <div className="text-center py-10">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-green-800 mx-auto"></div>
            <p className="text-gray-600 mt-4">Loading your orders...</p>
          </div>
        ) : userOrders.length > 0 ? (
          userOrders.map((order) => (
            <Link key={order.id} to={`/account/orders/${order.id}`}>
              <OrderItemCard
                image={order.items[0]?.image || ""}
                name={order.items[0]?.name || "Unknown Item"}
                price={order.totalAmount}
                quantity={order.items.length}
                soldBy={order.items[0]?.soldBy || "N/A"}
                details={order.items[0]?.details || ""}
                status={order.status}
                updates={`Order ID: ${order.id}`}
              />
            </Link>
          ))
        ) : (
          <p>No orders placed yet.</p>
        )}
      </div>
    </div>
  );
}

export default Orders;
