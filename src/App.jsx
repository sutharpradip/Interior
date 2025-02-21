import React from "react";
import { useEffect } from "react";
import "./App.css";
import "aos/dist/aos.css";
import AOS from "aos";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Common_Components/Header/Header";
import Footer from "./Common_Components/Footer/Footer";
import AppRouter from "./Router/AppRouter";
import { CartProvider } from "./Context/CartContext";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "./Context/UserAuth";
import { PaymentProvider } from "./Context/PaymentContext";
import { AddressProvider } from "./Context/AddressContext";

AOS.init();

function App() {
  return (
    <UserProvider>
      <CartProvider>
        <PaymentProvider>
          <AddressProvider>
            <Router>
              <ToastContainer position="top-right" autoClose={1000} />
              <Header />
              <AppRouter />
              <Footer />
            </Router>
          </AddressProvider>
        </PaymentProvider>
      </CartProvider>
    </UserProvider>
  );
}

export default App;
