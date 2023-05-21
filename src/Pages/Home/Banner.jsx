import React, { useEffect } from "react";
import "./banner.css";
import Lottie from "react-lottie";
import bannerAnimation from "../../assets/bannerAnimation.json";
import AOS from "aos";
import "aos/dist/aos.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Marquee from "react-fast-marquee";

const Banner = () => {
  const carouselData = [
    {
      imageUrl:
        "https://i.ibb.co/wr1SwQ3/group-stuffed-animals-sit-floor-1340-36109.jpg",
    },
    {
      imageUrl:
        "https://img.freepik.com/free-photo/group-stuffed-animals-are-lined-up-front-blue-background_1340-35290.jpg?size=626&ext=jpg&ga=GA1.2.995326630.1683021393&semt=ais",
    },
    {
      imageUrl:
        "https://i.ibb.co/5cJLxHD/fluffy-toy-texture-close-up-23-2149686884.jpg",
    },
    {
      imageUrl:
        "https://i.ibb.co/wr1SwQ3/group-stuffed-animals-sit-floor-1340-36109.jpg",
    },
    {
      imageUrl:
        "https://img.freepik.com/free-photo/group-stuffed-animals-are-lined-up-front-blue-background_1340-35290.jpg?size=626&ext=jpg&ga=GA1.2.995326630.1683021393&semt=ais",
    },
  ];

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
    <div className="py-0 mx-auto w-11/12" data-aos="fade-up">
      <div className="mx-auto grid items-center lg:grid-cols-2">
        <div className="mt-4 pb-10" data-aos="fade-left">
          <div className="relative">
            <div className="flex justify-between">
              <div className="relative w-28 h-28 pt-4 rounded-full bg-yellow-500">
                <Lottie options={lottieOptions} height={90} width={90} />
              </div>
              <div className="bg-yellow-500 w-full my-10 p-2">
                <Marquee className="font-bold" pauseOnHover={true} speed={30}>
                  Welcome to Toy World!
                </Marquee>
              </div>

              <div className="relative w-28 h-28 pt-4 rounded-full bg-yellow-500">
                <Lottie options={lottieOptions} height={90} width={90} />
              </div>
            </div>
            <div className="mt-4 pb-10">
              <h1 className="text-4xl font-bold text-black">
                <span className="text-yellow-500">Welcome to Toy World!</span>
              </h1>

              <p className="text-xl text-gray-600 mt-4">
                Explore a world of imagination and fun with our extensive
                collection of toys for all ages.
              </p>
              <p className="text-gray-600 mt-4">
                We believe in the power of play and its ability to inspire,
                educate, and bring joy to children of all ages. Our carefully
                curated selection of toys encourages creativity, exploration,
                and learning. Whether you're looking for educational toys,
                interactive games, or classic favorites, Toy World has something
                for everyone.
              </p>
              <button className="bg-yellow-400 text-black py-2 px-4 mt-6 rounded-full hover:bg-yellow-500">
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden">
          <div className="w-full h-full mx-auto">
            <div className="w-11/12 mx-auto">
              <Carousel>
                {carouselData.map((item, index) => (
                  <div key={index}>
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full opacity-90 hover:opacity-100 object-cover"
                    />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
