import React, { useEffect } from "react";
import "./banner.css";
import Lottie from "react-lottie";
import bannerAnimation from "../../assets/bannerAnimation.json";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: bannerAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    AOS.init({ once: true }); // Initialize AOS with options
  }, []);

  return (
    <div className="py-0" data-aos="fade-up">
      <div className="container mx-auto lg:flex items-center">
        <div className="lg:w-6/12 rounded-lg">
          <div className="w-full h-full">
            <Lottie
              options={lottieOptions}
              isClickToPauseDisabled
              height="80vh"
              width="100%"
            />
          </div>
        </div>
        <div className="lg:w-6/12 mt-4 pl-8">
          <h1 className="text-4xl font-bold text-black">
            <span className="">Toy World -</span> Where Imagination Comes to
            Life!
          </h1>
          <p className="text-xl text-black mt-4">
            Discover a world of endless fun and adventure with our wide range of
            toys for all ages.
          </p>
          <button className="bg-yellow-400 text-black py-2 px-4 mt-6 rounded-full hover:bg-yellow-500">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
