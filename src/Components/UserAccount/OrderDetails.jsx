import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useAuth } from "../../Context/UserAuth";

function OrderDetails() {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  const { loggedInUser } = useAuth();

  useEffect(() => {
    const fetchOrderDetails = async () => {
      setLoading(true); // Ensures loading starts when fetching

      if (!loggedInUser?.id) {
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `https://interior-db.onrender.com/users/${loggedInUser.id}`
        );

        if (response.ok) {
          const userData = await response.json();
          const foundOrder = userData.orders.find(
            (order) => String(order.id) === orderId
          );

          console.log(orderId);

          setOrder(foundOrder);
        } else {
          console.error("Failed to fetch order details");
        }
      } catch (error) {
        console.error("Error fetching order details:", error);
      } finally {
        setLoading(false); // End loading after fetch completes
      }
    };

    fetchOrderDetails();
  }, [orderId, loggedInUser?.id]);

  // ⏳ Loading State
  if (loading) {
    return (
      <div className="text-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-[#3b5d50] mx-auto"></div>
        <p className="text-gray-600 mt-4">Loading order details...</p>
      </div>
    );
  }

  // ❌ Order Not Found
  if (!order) {
    return <p className="text-center text-gray-600 py-20">Order not found.</p>;
  }

  return (
    <div className="p-6  my-10 rounded-lg shadow-sm bg-gray-100 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-[#3b5d50]">
        Order Details
      </h2>

      {/* Order Summary */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <p className="text-lg font-semibold">Order ID: {order.id}</p>
        <p>
          Status: <span className="text-[#3b5d50]">{order.status}</span>
        </p>
        <p>
          Total Amount:{" "}
          <span className="font-semibold">${order.totalAmount}</span>
        </p>
        <p>Placed On: {new Date(order.date).toLocaleDateString()}</p>
      </div>

      {/* Order Items */}
      <h3 className="text-xl font-semibold mb-3 text-[#3b5d50]">Items</h3>
      <div className="space-y-4">
        {order.items.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded"
              />
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-600">{item.details}</p>
                <p className="text-sm">Sold By: {item.soldBy}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold">${item.price}</p>
              <p className="text-sm">Qty: {item.quantity}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Back to Orders Button */}
      <Link
        to="/account/orders"
        className="inline-block mt-6 bg-[#3b5d50] text-white py-2 px-4 rounded hover:bg-[#2f4a40]"
      >
        Back to Orders
      </Link>
    </div>
  );
}

export default OrderDetails;
