import React from "react";
import useTitle from "../../hooks/useTitle";
import Banner from "./Banner";
import GalleryComponent from "./GalleryComponent";
import NewCollection from "./NewCollection";
import Slider from "./Slider";
import TabCom from "./TabCom";
import ToySection from "./ToySection";
const Home = () => {
  useTitle("Home");
  return (
    <div className="pt-20 mx-auto">
      <Banner></Banner>
      <NewCollection></NewCollection>
      <Slider></Slider>

      <TabCom></TabCom>
      <GalleryComponent></GalleryComponent>
      <ToySection></ToySection>
    </div>
  );
};

export default Home;
