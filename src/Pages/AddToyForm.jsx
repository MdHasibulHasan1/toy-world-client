import React, { useState } from "react";

const AddToyForm = () => {
  const [formValues, setFormValues] = useState({
    pictureUrl: "",
    name: "",
    sellerName: "",
    sellerEmail: "",
    subCategory: "",
    price: "",
    rating: "",
    quantity: "",
    description: "",
  });
  console.log(formValues);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const pictureUrl = form.pictureUrl.value;
    const name = form.name.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const subCategory = form.subCategory.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    // Perform form submission or data handling here

    fetch("http://localhost:5000/toys", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formValues),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });

    // Reset the form fields
    form.reset();
  };

  return (
    <div className="container mx-auto w-6/12 mt-">
      <h1 className="text-2xl font-bold mb-4">Add A Toy</h1>
      <form onSubmit={handleSubmit}>
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
            value={formValues.pictureUrl}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 font-medium mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formValues.name}
            onChange={handleInputChange}
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
            name="sellerName"
            value={formValues.sellerName}
            onChange={handleInputChange}
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
            value={formValues.sellerEmail}
            onChange={handleInputChange}
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
            value={formValues.subCategory}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:ring-blue-500"
            required
          />
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
            value={formValues.price}
            onChange={handleInputChange}
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
            value={formValues.rating}
            onChange={handleInputChange}
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
            value={formValues.quantity}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:ring-blue-500"
            required
          />
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
            value={formValues.description}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:ring-blue-500"
            rows={4}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md"
        >
          Add Toy
        </button>
      </form>
    </div>
  );
};

export default AddToyForm;
