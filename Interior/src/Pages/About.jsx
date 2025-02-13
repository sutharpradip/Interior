import React from "react";
import HeroSec from "../Components/HeroSec";
import WhyChooseUs from "../Components/WhyChooseUs";
import ReviewSlider from "../Components/ReviewSlider";

function About() {
  return (
    <>
      <HeroSec heading="About Us" />
      <WhyChooseUs />
      <ReviewSlider />
    </>
  );
}

export default About;
