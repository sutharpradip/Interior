import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Common_Components/Header/Header";
import Footer from "../Common_Components/Footer/Footer";
import Home from "../Pages/Home";
import About from "../Pages/About";

// export default function router() {
//   return (
//     <>
//       <Header />
//       <Outlet />
//       <Footer />
//     </>
//   );
// }

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
