import React, { useState, useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import CreatableSelect from "react-select/creatable";
import useTitle from "../hooks/useTitle";
import Swal from "sweetalert2";

const AddToyForm = () => {
  const [subCategory, setSubCategory] = useState(null);
  const { user } = useContext(AuthContext);
  useTitle("Add A Toy");
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const pictureUrl = form.pictureUrl.value;
    const toyName = form.toyName.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    // const subCategory = form.subCategory;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const subCategory = form.subCategory.value;
    const data = {
      pictureUrl,
      toyName,
      sellerName,
      sellerEmail,
      price,
      rating,
      quantity,
      description,
      subCategory,
    };
    console.log(data);
    fetch("https://toy-marketplace-server-hasib7143-gmailcom.vercel.app/toys", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Toy Added Successfully",
            text: "The toy has been added successfully!",
          });
        }
      });
    // Reset the form fields
    form.reset();
  };

  // const options = [
  //   { value: "teddy bear", label: "teddy bear" },
  //   { value: "horse", label: "horse" },
  //   { value: "dinosaur", label: "dinosaur" },
  //   { value: "dogs", label: "dogs" },
  //   { value: "cats", label: "cats" },
  //   { value: "cows", label: "cows" },
  //   { value: "unicorn", label: "unicorn" },
  // ];
  return (
    <div className="container mx-auto w-11/12 md:w-8/12 lg:w-10/12 py-20 ">
      <h1 className="text-2xl  font-bold mb-4">Add A Toy</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid lg:grid-cols-2 gap-4">
          <div className="mb-4">
            <label
              htmlFor="pictureUrl"
              className="block text-gray-700 font-medium mb-2"
            >
              Picture URL of the toy
            </label>
            <input
              type="text"
              id="pictureUrl"
              name="pictureUrl"
              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="toyName"
              className="block text-gray-700 font-medium mb-2"
            >
              Toy Name
            </label>
            <input
              type="text"
              id="toyName"
              name="toyName"
              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="sellerName"
              className="block text-gray-700 font-medium mb-2"
            >
              Seller Name
            </label>
            <input
              type="text"
              id="sellerName"
              defaultValue={user?.displayName}
              name="sellerName"
              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="sellerEmail"
              className="block text-gray-700 font-medium mb-2"
            >
              Seller Email
            </label>
            <input
              type="email"
              id="sellerEmail"
              name="sellerEmail"
              readOnly
              defaultValue={user?.email}
              // onChange={handleInputChange}
              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="subCategory"
              className="block text-gray-700 font-medium mb-2"
            >
              Sub-category
            </label>
            <input
              type="text"
              id="subCategory"
              name="subCategory"
              // onChange={handleInputChange}
              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
            {/* <CreatableSelect
              className="w-75"
              defaultValue={subCategory}
              onChange={setSubCategory}
              options={options}
              isMulti
            /> */}
          </div>
          <div className="mb-4">
            <label
              htmlFor="price"
              className="block text-gray-700 font-medium mb-2"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="rating"
              className="block text-gray-700 font-medium mb-2"
            >
              Rating
            </label>
            <input
              type="number"
              id="rating"
              name="rating"
              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="quantity"
              className="block text-gray-700 font-medium mb-2"
            >
              Available Quantity
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </div>
          {/* <div className="mb-4">
          {" "}
          <CreatableSelect
            className="w-75"
            defaultValue={subCategory}
            onChange={setSubCategory}
            options={options}
            isMulti
          />
        </div> */}
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 font-medium mb-2"
          >
            Detail Description
          </label>
          <textarea
            id="description"
            name="description"
            className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:ring-blue-500"
            rows={4}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 block w-full hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md"
        >
          Add Toy
        </button>
      </form>
    </div>
  );
};

export default AddToyForm;
