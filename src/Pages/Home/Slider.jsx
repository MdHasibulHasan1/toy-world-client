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
    <div className="px-4">
      <div>
        <h2 className="text-3xl font-bold mb-4 text-yellow-500">
          Experience the Magic of Toys
        </h2>
        <p className="text-gray-700">
          Step into a world of wonder and excitement with Toy World. Our
          extensive collection of toys is carefully curated to ignite
          imagination, foster creativity, and provide endless hours of fun. From
          classic toys that evoke nostalgia to innovative gadgets that push
          boundaries, we have something for children of all ages and interests.
          Explore our selection and embark on unforgettable playtime adventures!
        </p>
        {/* Add your swiper content here */}
      </div>
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
            <div className=" my-6 w-full h-full md:m-10 cursor-pointer">
              <img
                src={photo.src}
                alt="not"
                viewBox="0 0 24 24"
                className="rounded-full image-full  opacity-70 hover:opacity-100 md:p-0 lg:p-3   p-3  mx-auto block border hover:border-dashed hover:border-black"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
