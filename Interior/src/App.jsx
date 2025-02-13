import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Common_Components/Header/Header";
import Footer from "./Common_Components/Footer/Footer";
import AppRouter from "./Router/AppRouter";
import { CartProvider } from "./Context/CartContext"; // Check the correct path

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <AppRouter />
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
