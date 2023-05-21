import React, { useState, useEffect, useContext } from "react";
import StarsRating from "react-awesome-stars-rating";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import "./TabCom.css"; // Import the CSS file for custom styles and animations
import toast from "react-hot-toast";
const TabCom = () => {
  const [activeTab, setActiveTab] = useState("Teddy Bear Toys");
  const [categories, setCategories] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(
      `https://toy-marketplace-server-hasib7143-gmailcom.vercel.app/sub-categories`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data[0].categories);
        setCategories(data[0].categories);
      });
  }, []);

  const handleTabClick = (name) => {
    setActiveTab(name);
  };
  const handleNotification = () => {
    if (!user) {
      toast.success("You have to log in first to view details!");
    }
  };
  return (
    <div>
      <h1 className="text-4xl font-extrabold text-center text-yellow-500">
        Show By Category
      </h1>
      <div className="flex flex-col my-10 items-center ">
        <div className="flex mb-4">
          {categories?.map((category, index) => (
            <button
              key={index}
              className={`tab-item ${
                activeTab === category.name
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-black"
              } hover:bg-blue-500 hover:text-white mx-2 p-2 rounded`}
              onClick={() => handleTabClick(category.name)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="flex justify-center">
          <div className="tab-content w-full animate-pulse grid mx-4 sm:grid-cols-2 md-w-full md:grid-cols-4 gap-4">
            {categories
              ?.find((category) => category.name === activeTab)
              ?.subCategories.map((subCategory, index) => (
                <div
                  key={index}
                  className="card py-3 bg-white rounded shadow-md hover:scale-105 transform transition-transform duration-300"
                >
                  <img
                    src={subCategory.image}
                    alt={subCategory.name}
                    className="w-full h-40 object-cover rounded-t"
                  />
                  <div className="p-4">
                    <p className="font-bold">{subCategory.name}</p>
                    <p>Price: {subCategory.price}</p>

                    <div className="-ml-2 flex">
                      <StarsRating
                        value={subCategory.rating}
                        size={20}
                        isHalf={true}
                        className="flex ml-1 pointer-events-none"
                      />
                      ({subCategory.rating})
                    </div>

                    <Link
                      onClick={() => handleNotification()}
                      className="block w-full"
                      to={`/subCategories/${subCategory._id}`}
                    >
                      <button className="text-blue-500 underline">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabCom;
