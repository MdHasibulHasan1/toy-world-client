import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faCartPlus } from "@fortawesome/free-solid-svg-icons";

const NewCollection = () => {
  const [newCollection, setNewCollection] = useState([]);
  const [hoveredCartIndex, setHoveredCartIndex] = useState(null);

  useEffect(() => {
    fetch("newCollection.json")
      .then((res) => res.json())
      .then((data) => {
        setNewCollection(data);
      });
  }, []);

  const handleCartHover = (index) => {
    setHoveredCartIndex(index);
  };

  const handleCartLeave = () => {
    setHoveredCartIndex(null);
  };

  return (
    <div className="pt-20 px-3 text-center text-black bg-slate-100">
      <h1 className="text-4xl font-extrabold text-yellow-500">
        New Collection
      </h1>
      <h3 className="text-2xl ">
        Customers' favorite products this week. What's so special?{" "}
        <span className="font-extrabold">Check it out!</span>
      </h3>
      <div className="my-6 flex justify-center">
        <div className="grid my-9 mx-4 sm:mx-5 items-center sm:grid-cols-2 gap-4 md:grid-cols-4 w-full">
          {newCollection?.map((collection, index) => (
            <div
              key={collection.id}
              className="shadow-lg text-left mb-4  px-4 py-2 rounded-sm bg-white text-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              onMouseEnter={() => handleCartHover(index)}
              onMouseLeave={handleCartLeave}
            >
              <div className="relative">
                <img className="w-full" src={collection.image} alt="" />
                {hoveredCartIndex === index && (
                  <div className="absolute inset-x-0 bottom-0 origin-bottom duration-1000 flex justify-center items-center">
                    <button className="w-full h-full font-bold py-2 px-2 rounded">
                      <FontAwesomeIcon icon={faCartPlus} className="mr-2" />
                      <br />
                      Add to Cart
                    </button>
                    <button className="w-full h-full font-bold py-2 px-2 text-center rounded">
                      <FontAwesomeIcon icon={faEye} className="mr-2" />
                      <br />
                      <span className="mx-auto block text-center">View</span>
                    </button>
                  </div>
                )}
              </div>
              <div>
                <h1>{collection.name}</h1>
                <h1 className="line-through">{collection.originalPrice}</h1>
                <h1>{collection.discountedPrice}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewCollection;
