import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Common_Components/Header/Header";
import Footer from "./Common_Components/Footer/Footer";
import AppRouter from "./Router/AppRouter";
import { CartProvider } from "./Context/CartContext";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "./Context/UserAuth";
import { PaymentProvider } from "./Context/PaymentContext";

function App() {
  return (
    <UserProvider>
      <CartProvider>
        <PaymentProvider>
          <Router>
            <ToastContainer position="top-right" autoClose={1000} />
            <Header />
            <AppRouter />
            <Footer />
          </Router>
        </PaymentProvider>
      </CartProvider>
    </UserProvider>
  );
}

export default App;
