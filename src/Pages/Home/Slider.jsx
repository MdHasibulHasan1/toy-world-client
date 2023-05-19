import React, { useRef } from "react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { photos } from "../../assets/photo";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./slider.css";

// Install required modules
SwiperCore.use([Autoplay, Navigation, Pagination]);

export default function App() {
  const swiperRef = useRef(null);

  return (
    <>
      <Swiper
        ref={swiperRef}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }} // Set the autoplay delay here (in milliseconds)
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {photos.map((photo, index) => (
          <SwiperSlide key={index}>
            <div className="md:p-9 my-6 w-full h-full md:m-10 cursor-pointer">
              <img
                src={photo.src}
                alt="not"
                viewBox="0 0 24 24"
                className="rounded-full opacity-70 hover:opacity-100 h-5/6 p-3 w-10/12 mx-auto block border hover:border-dashed animate-spin-slow hover:border-black"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
