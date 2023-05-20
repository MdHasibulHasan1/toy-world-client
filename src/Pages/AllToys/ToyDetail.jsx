import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ToyDetail = () => {
  const { Id } = useParams();

  const [details, setDetails] = useState({});
  const toys = useLoaderData();
  console.log(toys);
  useEffect(() => {
    const found = toys.find((toy) => toy._id == Id);
    setDetails(found);
  }, [Id]);
  console.log(details);

  const {
    sellerName,
    description,
    pictureUrl,
    quantity,
    ratting,
    sellerEmail,
    toyName,
  } = details;
  return (
    <div className="pt-20">
      <div>
        <h3>{toyName}</h3>
        <p>Seller: {sellerName}</p>
        <p>Email: {sellerEmail}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ToyDetail;
