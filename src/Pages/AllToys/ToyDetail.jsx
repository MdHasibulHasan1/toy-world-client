import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const ToyDetail = () => {
  const { Id } = useParams();
  const { toys } = useLoaderData();
  useTitle("Toy detail");
  console.log(Id);
  const [details, setDetails] = useState({});
  console.log(toys);
  useEffect(() => {
    const found = toys.find((toy) => toy._id == Id);
    setDetails(found);
  }, [Id, details]);
  console.log(details);
  const {
    sellerName,
    description,
    pictureUrl,
    quantity,
    rating,
    sellerEmail,
    toyName,
  } = details || {};

  return (
    <div className="pt-20">
      <div className="max-w-3xl mx-auto px-4">
        <h3 className="text-3xl font-bold mb-4">{toyName}</h3>
        <p className="text-gray-600 mb-2">Seller: {sellerName}</p>
        <p className="text-gray-600 mb-2">Email: {sellerEmail}</p>
        <p className="mb-6">{description}</p>

        <div className="flex items-center">
          <img
            src={pictureUrl}
            alt={toyName}
            className="w-40 h-40 rounded-lg mr-4"
          />
          <div>
            <p className="text-gray-600 mb-2">Quantity: {quantity}</p>
            <p className="text-gray-600 mb-2">Rating: {rating}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetail;
