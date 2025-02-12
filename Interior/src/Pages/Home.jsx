import React from "react";
import HeroSec from "../Components/HeroSec";
import Products from "../Components/Products";
import WhyChooseUs from "../Components/WhyChooseUs";
import ModernInterior from "../Components/ModernInterior";
import ReviewSlider from "../Components/ReviewSlider";
import BlogSec from "../Components/BlogSec";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <>
      <HeroSec />
      {/* <Outlet /> */}
      <Products />
      <WhyChooseUs />
      <ModernInterior />
      <ReviewSlider />
      <BlogSec />
    </>
  );
}

export default Home;
