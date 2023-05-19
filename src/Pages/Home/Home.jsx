import React from "react";
import Banner from "./Banner";
import GalleryComponent from "./GalleryComponent";
import Slider from "./Slider";
import TabCom from "./TabCom";
const Home = () => {
  return (
    <div className="mt-20">
      <h1>this is home.</h1>
      {/* <Banner></Banner> */}
      <Slider></Slider>
      <TabCom></TabCom>
      <GalleryComponent></GalleryComponent>
    </div>
  );
};

export default Home;
