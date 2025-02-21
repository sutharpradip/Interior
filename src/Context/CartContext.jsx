import React, { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./UserAuth";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { loggedInUser } = useAuth();
  const [cart, setCart] = useState([]);

  // Fetch cart from db.json when user logs in
  useEffect(() => {
    if (loggedInUser) {
      fetch(`http://localhost:5000/users/${loggedInUser.id}`)
        .then((response) => response.json())
        .then((user) => setCart(user.cart || []))
        .catch((error) => console.error("Error fetching cart:", error));
    } else {
      setCart([]);
    }
  }, [loggedInUser]);

  useEffect(() => {
    if (loggedInUser && cart.length > 0) {
      const timeout = setTimeout(() => {
        fetch(`http://localhost:5000/users/${loggedInUser.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ cart }),
        }).catch((error) => console.error("Error updating cart:", error));
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [cart, loggedInUser]);

  // Function to add item to cart
  const addToCart = (product) => {
    if (!loggedInUser) {
      alert("Please login to add items to the cart.");
      return;
    }
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Function to remove item from cart
  const removeFromCart = (id) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== id);

      // ✅ Update db.json after removing the item
      if (loggedInUser) {
        fetch(`http://localhost:5000/users/${loggedInUser.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ cart: updatedCart }),
        }).catch((error) => console.error("Error updating cart:", error));
      }

      return updatedCart;
    });
  };

  // Increase item quantity in cart
  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrease item quantity in cart
  const decreaseQuantity = (id) => {
    setCart(
      (prevCart) =>
        prevCart
          .map((item) =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item
          )
          .filter((item) => item.quantity > 0) // ✅ Remove items with quantity 0
    );
  };

  // Clear cart
  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use CartContext
export const useCart = () => useContext(CartContext);
