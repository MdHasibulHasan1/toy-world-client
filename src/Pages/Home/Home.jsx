import React from "react";
import Banner from "./Banner";
import GalleryComponent from "./GalleryComponent";
import NewCollection from "./NewCollection";
import Slider from "./Slider";
import TabCom from "./TabCom";
import ToySection from "./ToySection";
const Home = () => {
  return (
    <div className="mt-20">
      <Banner></Banner>
      <NewCollection></NewCollection>

      <TabCom></TabCom>
      <GalleryComponent></GalleryComponent>
      <Slider></Slider>
      <ToySection></ToySection>
    </div>
  );
};

export default Home;
