import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import useTitle from "../hooks/useTitle";
import StarsRating from "react-awesome-stars-rating";
const SubCategories = () => {
  const { id } = useParams();
  const categories = useLoaderData();
  //   console.log(category[0].categories);
  useTitle("sub category detail");
  //   console.log(id);
  const [details, setDetails] = useState({});

  useEffect(() => {
    for (const category of categories) {
      // console.log(category);
      for (const allSubCategories of category.categories) {
        //   console.log(allSubCategories.subCategories);
        for (const subCategory of allSubCategories.subCategories) {
          // console.log(subCategory);
          if (subCategory._id === id) {
            console.log(subCategory);
            setDetails(subCategory);
          }
        }
      }
    }
  }, [details]);
  console.log(details);
  const { image, name, rating, price } = details;
  return (
    <div className="flex flex-col items-center mb-4 pt-20">
      <img src={image} alt={name} className="w-48 h-48 object-cover mb-2" />
      <h2 className="text-lg font-bold mb-1">{name}</h2>
      <div className="-ml-2 flex">
        <StarsRating
          value={rating}
          size={20}
          isHalf={true}
          className="flex ml-1 pointer-events-none"
        />
        <span className="ml-1">({rating})</span>
      </div>
      <p className="mb-1">Price: {price}</p>
    </div>
  );
};

export default SubCategories;
