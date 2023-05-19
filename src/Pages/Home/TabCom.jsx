import React, { useState } from "react";

const TabCom = () => {
  const [activeTab, setActiveTab] = useState("Teddy Bear Toys");
  const data = {
    categories: [
      {
        name: "Teddy Bear Toys",
        subCategories: [
          {
            name: "Brown Bears",
            image:
              "https://i.ibb.co/RBZXJQ6/Teddy-Bear-PNG-Images-PSDs-for-Download-Pixel-Squid-S11177712-C.png",
            price: "$19.99",
            rating: 4.5,
          },
          {
            name: "Polar Bears",
            image: "https://i.ibb.co/4tDqLDr/517417-000-001.png",
            price: "$24.99",
            rating: 4.2,
          },
          {
            name: "Koala Bears",
            image:
              "https://i.ibb.co/NTNt3Nv/Australian-Fat-Funny-Baby-Koala-Bear-Stuffed-Plush-Koala-Stuffed-Animal-HD-Png-Download-kindpng.png",
            price: "$14.99",
            rating: 4.7,
          },
          {
            name: "Panda Bears",
            image:
              "https://i.ibb.co/nb3P47H/images-q-tbn-ANd9-Gc-Rq-ZRfi-Co0-Jj-SYzwcrvy-Deh-YPnnx-F49ntr-Dxw-usqp-CAU.jpg",
            price: "$29.99",
            rating: 4.4,
          },
        ],
      },
      {
        name: "Horse Toys",
        subCategories: [
          {
            name: "Plush Horses",
            image:
              "https://i.ibb.co/Vg600w0/images-q-tbn-ANd9-Gc-Rlt-A4-By-XJxin-X2pb-VNXN-6ec-V2-PEpew-G2-AXw-usqp-CAU.jpg",
            price: "$21.99",
            rating: 4.6,
          },
          {
            name: "Wooden Horses",
            image:
              "https://i.ibb.co/HrZXLMC/images-q-tbn-ANd9-Gc-Syg3-GPr0vu-Nbzw4dgy87-SRj-WTs-QCS3-Az-Hk6g-usqp-CAU.jpg",
            price: "$18.99",
            rating: 4.1,
          },
          {
            name: "Rocking Horses",
            image:
              "https://i.ibb.co/89kCQQk/images-q-tbn-ANd9-Gc-S8-X3-M2-Jak2-RJwh-WNS1v-KFDUGQu-RIJOLSb-KCg-usqp-CAU.jpg",
            price: "$34.99",
            rating: 4.3,
          },
        ],
      },
      {
        name: "Dinosaur Toys",
        subCategories: [
          {
            name: "T-Rex",
            image:
              "https://i.ibb.co/Z63gGx4/images-q-tbn-ANd9-Gc-Rkqam5-Pd-s-Jq3-Px-PNr-Mx9s-Wru-UZExbtnb4-XA-usqp-CAU.jpg",
            price: "$12.99",
            rating: 4.8,
          },
          {
            name: "Stegosaurus",
            image:
              "https://i.ibb.co/D10hbSm/images-q-tbn-ANd9-Gc-Rm2-Oul8-Luhzespswdgv-V-d-M7-Q7-T-g7iv-Wg-Jw-usqp-CAU.jpg",
            price: "$16.99",
            rating: 4.2,
          },
          {
            name: "Triceratops",
            image:
              "https://i.ibb.co/2YpXZMM/images-q-tbn-ANd9-Gc-Sjej7-EQ1-FUq-Bmp-F9k92c-XBWQCMLES1-I9-Zw6-Q-usqp-CAU.jpg",
            price: "$14.99",
            rating: 4.6,
          },
          {
            name: "Velociraptor",
            image:
              "https://i.ibb.co/3S90krk/images-q-tbn-ANd9-Gc-Rysykjta72fh-QXLa-Ry-Wc-D3-Yv-Giq-LGDgwb-Qo-Q-usqp-CAU.jpg",
            price: "$19.99",
            rating: 4.4,
          },
        ],
      },
    ],
  };

  const handleTabClick = (name) => {
    setActiveTab(name);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex mb-4">
        {data.categories.map((category, index) => (
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

      <div className="tab-content">
        {data.categories
          .find((category) => category.name === activeTab)
          ?.subCategories.map((subCategory, index) => (
            <div key={index} className="flex items-center">
              <img
                src={subCategory.image}
                alt={subCategory.name}
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <p>{subCategory.name}</p>
                <p>Price: {subCategory.price}</p>
                <p>Rating: {subCategory.rating}</p>
                <button className="text-blue-500 underline">
                  View Details
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TabCom;
