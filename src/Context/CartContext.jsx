import React from "react";
import { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);

  // Load user from localStorage when app starts
  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      setLoggedInUser(JSON.parse(storedUser));
    }
  }, []);

  // Fetch cart from db.json when user logs in
  useEffect(() => {
    if (loggedInUser) {
      fetch(`http://localhost:5000/users/${loggedInUser.id}`)
        .then((response) => response.json())
        .then((user) => setCart(user.cart || []));
    }
  }, [loggedInUser]);

  // Update cart in db.json (debounced to prevent excessive requests)
  useEffect(() => {
    if (loggedInUser) {
      const timeout = setTimeout(() => {
        fetch(`http://localhost:5000/users/${loggedInUser.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ cart }),
        });
      }, 1000); // Wait 1 second before sending update

      return () => clearTimeout(timeout);
    }
  }, [cart, loggedInUser]);

  const addToCart = (product) => {
    if (!loggedInUser) {
      return alert("Please Login");
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

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // incresae items quantity in cart
  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // decrease items quantity in cart
  const decreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // clear cart
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
        setLoggedInUser,
        loggedInUser,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
