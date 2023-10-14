"use client"
import React, { useState } from "react";

const ProductForm = () => {
  const [product, setProduct] = useState({
    name: "",
    category: "",
    previousPrice: "",
    currentPrice: "",
    imageSrc: "",
    availableQuantity: "",
    description: "",
    size: "", 
  });

  const [errors, setErrors] = useState({
    name: "",
    category: "",
    previousPrice: "",
    currentPrice: "",
    imageSrc: "",
    availableQuantity: "",
    description: "",
    size: "", 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Perform validation for required fields
    if (!product.name) {
      newErrors.name = "Product Name is required.";
    }
    if (!product.category) {
      newErrors.category = "Category is required.";
    }
    if (!product.previousPrice) {
      newErrors.previousPrice = "Previous Price is required.";
    }
    if (!product.currentPrice) {
      newErrors.currentPrice = "Current Price is required.";
    }
    if (!product.imageSrc) {
      newErrors.imageSrc = "Image Source is required.";
    }
    if (!product.availableQuantity) {
      newErrors.availableQuantity = "Available Quantity is required.";
    }
    if (!product.description) {
      newErrors.description = "Description is required.";
    }

    if (product.category === "Shoes" && !product.size) {
      newErrors.size = "Size is required for Shoes.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted with data:", product);
    }
  };

  return (
    <div className="container text-black mx-auto pt-10">
      <form
        onSubmit={handleSubmit}
        className="max-w-md md:max-w-screen-xl mx-auto p-4 bg-white shadow-md rounded-md"
      >
        <h2 className="text-4xl text-center font-semibold my-4">Update Form</h2>

        <label htmlFor="name" className="block mt-2 font-semibold">
          Product Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={product.name}
          onChange={handleChange}
          required
          className={`w-full px-3 py-2 border rounded-md ${
            errors.name ? "border-red-500" : ""
          }`}
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name}</p>
        )}

        <div className="md:flex gap-2 mt-2">
          <div className="w-1/2">
            <label htmlFor="category" className="block font-semibold">
              Category
            </label>
            <select
              id="category"
              name="category"
              value={product.category}
              onChange={handleChange}
              required
              className={`w-full px-3 py-2 border rounded-md ${
                errors.category ? "border-red-500" : ""
              }`}
            >
              <option value="">Select a category</option>
              <option value="Shoes">Shoes</option>
              <option value="Bags">Bags</option>
              <option value="Belt">Belt</option>
              <option value="Wallets">Wallets</option>
              <option value="Jacket">Jacket</option>
              <option value="Watch">Watch</option>
              <option value="Loafers">Loafers</option>
              <option value="Sandals">Sandals</option>
              <option value="Bracelet">Bracelet</option>
            </select>
            {errors.category && (
              <p className="text-red-500 text-sm mt-1">{errors.category}</p>
            )}
          </div>
          <div className="w-1/2">
            <label htmlFor="availableQuantity" className="block font-semibold">
              Available Quantity
            </label>
            <input
              type="text"
              id="availableQuantity"
              name="availableQuantity"
              value={product.availableQuantity}
              onChange={handleChange}
              required
              className={`w-full px-3 py-2 border rounded-md ${
                errors.availableQuantity ? "border-red-500" : ""
              }`}
            />
            {errors.availableQuantity && (
              <p className="text-red-500 text-sm mt-1">
                {errors.availableQuantity}
              </p>
            )}
          </div>
        </div>

        {/* Conditionally show the "Size" field for Shoes */}
        {product.category === "Shoes" && (
          <div className="md:flex gap-2 mt-2">
            <div className="w-1/2">
              <label htmlFor="size" className="block font-semibold">
                Size
              </label>
              <select
                id="size"
                name="size"
                value={product.size}
                onChange={handleChange}
                required
                className={`w-full px-3 py-2 border rounded-md ${
                  errors.size ? "border-red-500" : ""
                }`}
              >
                <option value="">Select a size</option>
                <option value="36">36</option>
                <option value="37">37</option>
                <option value="38">38</option>
                <option value="39">39</option>
                <option value="40">40</option>
                <option value="41">41</option>
                <option value="42">42</option>
              </select>
              {errors.size && (
                <p className="text-red-500 text-sm mt-1">{errors.size}</p>
              )}
            </div>
          </div>
        )}

        {/* Conditionally show the "Size" field for Jacket */}
        {product.category === "Jacket" && (
          <div className="md:flex gap-2 mt-2">
            <div className="w-1/2">
              <label htmlFor="size" className="block font-semibold">
                Size
              </label>
              <select
                id="size"
                name="size"
                value={product.size}
                onChange={handleChange}
                required
                className={`w-full px-3 py-2 border rounded-md ${
                  errors.size ? "border-red-500" : ""
                }`}
              >
                <option value="">Select a size</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="2XL">2XL</option>
              </select>
              {errors.size && (
                <p className="text-red-500 text-sm mt-1">{errors.size}</p>
              )}
            </div>
          </div>
        )}

        <label htmlFor="imageSrc" className="block font-semibold">
          Image
        </label>
        <input
          type="file"
          id="imageSrc"
          name="imageSrc"
          value={product.imageSrc}
          onChange={handleChange}
          required
          className={`w-full px-3 py-2 border rounded-md ${
            errors.imageSrc ? "border-red-500" : ""
          }`}
        />
        {errors.imageSrc && (
          <p className="text-red-500 text-sm mt-1">{errors.imageSrc}</p>
        )}

        <div className="md:flex gap-2 mt-2">
          <div className="w-1/2">
            <label htmlFor="previousPrice" className="block font-semibold">
              Previous Price
            </label>
            <input
              type="text"
              id="previousPrice"
              name="previousPrice"
              value={product.previousPrice}
              onChange={handleChange}
              required
              className={`w-full px-3 py-2 border rounded-md ${
                errors.previousPrice ? "border-red-500" : ""
              }`}
            />
            {errors.previousPrice && (
              <p className="text-red-500 text-sm mt-1">
                {errors.previousPrice}
              </p>
            )}
          </div>
          <div className="w-1/2">
            <label htmlFor="currentPrice" className="block font-semibold">
              Current Price
            </label>
            <input
              type="text"
              id="currentPrice"
              name="currentPrice"
              value={product.currentPrice}
              onChange={handleChange}
              required
              className={`w-full px-3 py-2 border rounded-md ${
                errors.currentPrice ? "border-red-500" : ""
              }`}
            />
            {errors.currentPrice && (
              <p className="text-red-500 text-sm mt-1">{errors.currentPrice}</p>
            )}
          </div>
        </div>

        <label htmlFor="description" className="block font-semibold mt-2">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={product.description}
          onChange={handleChange}
          required
          className={`w-full px-3 py-2 border rounded-md ${
            errors.description ? "border-red-500" : ""
          }`}
        />
        {errors.description && (
          <p className="text-red-500 text-sm mt-1">{errors.description}</p>
        )}

        <div className="flex justify-between mt-4">
          <button
            type="button"
            className="bg-gray-300 hover-bg-gray-400 text-gray-700 px-4 py-2 rounded-md"
          >
            Close
          </button>
          <button
            type="submit"
            className="bg-blue-500 hover-bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
