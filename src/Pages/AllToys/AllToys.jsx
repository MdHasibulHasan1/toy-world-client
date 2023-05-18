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
    <div className="mt-20">
      <h1>all toys</h1>
    </div>
  );
};

export default AllToys;
