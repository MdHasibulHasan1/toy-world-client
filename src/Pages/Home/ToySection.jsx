import React from "react";
import { FaHeart } from "react-icons/fa";

const ToySection = () => {
  const sectionData = {
    title: "Featured Products",
    products: [
      {
        id: 1,
        title: "Panda",
        description:
          "Pandas, also known as giant pandas, are a unique species of bear native to the mountainous regions of central China. They are known for their distinct black and white markings and have captured the hearts of people around the world..",
        image:
          "https://i.ibb.co/wcZRcm8/images-q-tbn-ANd9-Gc-R5-N9-S2n-Mw-Kbkgd-Yi-Ea-OTbimr7-Sf4-Hot-RWq-AA-usqp-CAU.jpg",
        price: 19.99,
      },
      {
        id: 2,
        title: "Stuffed Animal",
        description:
          "White horses have a coat that appears white or very light in color. However, true white horses are relatively rare. Most white horses have a genetic condition called that causes their hair to progressively lose pigment over time, resulting in a white or grayish appearance.",
        image:
          "https://i.ibb.co/Sn3M9Vb/hipkids-white-ride-on-walking-toy-horse-unicorn-large-28420887380102-1000x-2x.jpg",
        price: 12.99,
      },
      {
        id: 3,
        title: "Building Blocks",
        description:
          "Pandas, also known as giant pandas, are a unique species of bear native to the mountainous regions of central China. They are known for their distinct black and white markings and have captured the hearts of people around the world.",
        image:
          "https://i.ibb.co/LRVY5dg/andalusian-stallion-167377-994x994.jpg",
        price: 24.99,
      },
      {
        id: 4,
        title: "Polar bears",
        description:
          "Polar bears primarily live in the Arctic regions of Canada, Alaska, Russia, Greenland, and Norway. They are well-adapted to life in the Arctic, with their thick fur, layer of blubber, and specialized physical features.",
        image: "https://i.ibb.co/4tDqLDr/517417-000-001.png",
        price: 24.99,
      },
      {
        id: 5,
        title: "Building Blocks",
        description:
          "Polar bears primarily live in the Arctic regions of Canada, Alaska, Russia, Greenland, and Norway. They are well-adapted to life in the Arctic, with their thick fur, layer of blubber, and specialized physical features.",
        image:
          "https://i.ibb.co/LRVY5dg/andalusian-stallion-167377-994x994.jpg",
        price: 24.99,
      },
      {
        id: 6,
        title: "Polar bears",
        description:
          "Polar bears primarily live in the Arctic regions of Canada, Alaska, Russia, Greenland, and Norway. They are well-adapted to life in the Arctic, with their thick fur, layer of blubber, and specialized physical features.",
        image: "https://i.ibb.co/4tDqLDr/517417-000-001.png",
        price: 24.99,
      },
    ],
  };

  const { title, products } = sectionData;

  return (
    <section className="py-12 bg-gray-100">
      <div className=" sm:mx-0 mx-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-yellow-500">{title}</h2>
          <p className="text-gray-700 text-lg">
            This innovative toy will engage your child's imagination and provide
            hours of fun and learning.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md p-6">
              <img
                src={product.image}
                alt={product.title}
                className="w-full  sm:h-52 sm:object-cover mb-4 rounded-lg"
              />
              <h3 className="text-xl font-bold mb-2">{product.title}</h3>
              <p className="text-gray-600">{product.description}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-gray-700 font-bold">
                  ${product.price}
                </span>
                <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg">
                  <FaHeart />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToySection;
