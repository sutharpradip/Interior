import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Shop from "../Pages/Shop";
import Blog from "../Pages/Blogs";
import ContactUs from "../Pages/ContactUs";
import Cart from "../Pages/Cart";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="contact" element={<ContactUs />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}
