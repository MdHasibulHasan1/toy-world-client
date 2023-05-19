import React, { useState, useEffect } from "react";

const AllToys = () => {
  const [allToys, setAllToys] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:5000/toys`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllToys(data);
      });
  }, []);

  console.log(allToys);
  return (
    <div className="mt-20 grid md:grid-cols-3 gap-5 sm:grid-cols-2">
      {allToys?.map((toy) => (
        <div key={toy._id} className="">
          <div className="">
            <h1>{toy.toyName}</h1>
            <img className="w-full" src={toy.pictureUrl} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllToys;
