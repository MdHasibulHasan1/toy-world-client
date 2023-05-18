import React from "react";
import GalleryComponent from "./GalleryComponent";
import Slider from "./Slider";
const Home = () => {
  return (
    <div className="mt-20">
      <h1>this is home.</h1>
      <Slider></Slider>
      <GalleryComponent></GalleryComponent>
    </div>
  );
};

export default Home;
