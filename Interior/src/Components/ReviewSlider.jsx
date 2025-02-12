import React, { useRef, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Reviews } from "../Data";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// Import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function ReviewSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && prevRef.current && nextRef.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <section className="py-20 bg-gray-100">
      <h2 className="text-gray-800 text-center mb-5 text-3xl font-semibold">
        Testimonials
      </h2>
      <div className="container mx-auto relative">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
            type: "bullets",
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Navigation, Pagination, Autoplay]}
          className="mySwiper swiper-container h-full py-20 mt-10 md:w-3/5 w-full mx-auto"
        >
          {Reviews.map((review, index) => (
            <SwiperSlide
              key={index}
              className="m-0 text-center flex items-center justify-center"
            >
              <blockquote className="text-center mb-10 text-gray-500 font-normal leading-loose">
                {review.review}
              </blockquote>
              <div className="author">
                <figure className="mb-4">
                  <img
                    className="rounded-full mx-auto max-w-[80px]"
                    src={review.userimage}
                    alt={review.username}
                  />
                </figure>
                <h3 className="text-sm text-center font-bold text-gray-800 py-1">
                  {review.username}
                </h3>
                <span className="font-normal text-gray-600 text-md">
                  {review.designation}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute top-1/2 transform -translate-y-1/2 w-full justify-between px-4 mx-auto md:block hidden">
          <button
            ref={prevRef}
            className="duration-300 static swiper-button-prev hover:bg-[#3b5d50] bg-gray-200 after:text-gray-800 hover:text-white p-6 rounded-full"
          ></button>
          <button
            ref={nextRef}
            className="duration-300 static swiper-button-next hover:bg-[#3b5d50] bg-gray-200 after:text-gray-800 hover:text-white p-6 rounded-full"
          ></button>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
}
