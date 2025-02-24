import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Shop from "../Pages/Shop";
import Blog from "../Pages/Blogs";
import ContactUs from "../Pages/ContactUs";
import Cart from "../Pages/Cart";
import UserDashboard from "../Pages/UserDashboard";
import Profile from "../Components/UserAccount/Profile";
import Checkout from "../Components/Checkout";
import OrderPlaced from "../Components/OrderPlaced";
import OrderDetails from "../Components/UserAccount/OrderDetails";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="contact" element={<ContactUs />} />

      <Route path="/cart/*" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/orderplaced" element={<OrderPlaced />} />
      <Route path="/account/orders/:orderId" element={<OrderDetails />} />

      <Route path="/account/*" element={<UserDashboard />}>
        <Route path="profile" element={<Profile />} />
        <Route path="orders" element={<Profile />} />
        <Route path="wishlist" element={<Profile />} />
        <Route path="address" element={<Profile />} />
        <Route path="savedCard" element={<Profile />} />
      </Route>
    </Routes>
  );
}
