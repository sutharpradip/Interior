import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Common_Components/Header/Header";
import Footer from "./Common_Components/Footer/Footer";
import AppRouter from "./Router/AppRouter";
import { CartProvider } from "./Context/CartContext";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <CartProvider>
      <Router>
        <ToastContainer position="top-right" autoClose={2000} />
        <Header />
        <AppRouter />
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
