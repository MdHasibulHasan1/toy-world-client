import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetch(`https://toy-marketplace-server-xi.vercel.app/toys`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToys(data);
      });
  }, []);

  const handleSearch = () => {
    fetch(
      `https://toy-marketplace-server-xi.vercel.app/getToysByText/${searchText}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToys(data);
      });
  };
  console.log(toys);
  return (
    <div className="pt-20">
      <h1 className="text-center p-4">All Toys</h1>

      <div className="flex justify-center mb-2">
        <div>
          <input
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            className="border border-gray-300 px-3 py-2 rounded-l focus:outline-none focus:ring focus:border-blue-300 p-1 mx-auto"
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-r"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full lg:w-10/12 mx-auto">
          <thead>
            <tr>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>View Details</th>
            </tr>
          </thead>
          <tbody>
            {toys?.map((toy) => (
              <tr key={toy._id}>
                <td>{toy.sellerName}</td>
                <td>{toy.toyName}</td>
                <td>g</td>
                <td>{toy.price}</td>
                <td>{toy.quantity}</td>
                <td>
                  <Link className="block w-full" to={`/toy/${toy._id}`}>
                    <button className="btn btn-sm">View Details</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
