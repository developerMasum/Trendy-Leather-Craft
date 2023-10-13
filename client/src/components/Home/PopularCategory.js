"use client"
import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Heading from "../Shared/Heading";
import PopularCard from "./PopularCard";
import Card from "../Categories/Card";
import Modal from "../Categories/Modal";


const PopularCategory = () => {
  const PopularProducts = [
    {
      name: "Classic Leather Shoes",
      id: 1,
      imageSrc: "https://i.ibb.co/TwHxZbf/bag-1.jpg",
      previousPrice: "700৳",
      price: 79.99,
      category: "Shoes",
      description: "A pair of stylish classic leather shoes for any occasion.",
      sizes: ["10", "11", "12"],
    },
    {
      name: "Designer Belt",
      id: 2,
      previousPrice: "7500৳",
      imageSrc:
        "https://zaysbd.com/cdn/shop/products/01_7d29292f-ed90-4e30-8a35-d5811bce4f76_360x.jpg?v=1679815626",
      price: 29.99,
      category: "Belts",
      description: "A high-quality designer belt made from genuine leather.",
      sizes: ["36", "38", "40"],
    },
    {
      name: "Luxury Money Bag",
      previousPrice: "7500৳",
      id: 3,
      imageSrc:
        "https://zaysbd.com/cdn/shop/products/12_c0c8f1a5-44cd-4212-b9da-33ee328016c5_360x.jpg?v=1679814127",
      price: 149.99,
      category: "Money Bags",
      description:
        "A luxurious money bag with multiple compartments for organization.",
      sizes: ["One Size"],
    },
    {
      name: "Sneaker Collection",
      id: 4,
      previousPrice: "7500৳",
      imageSrc:
        "https://zaysbd.com/cdn/shop/products/03_c451b607-2864-42ef-b5a3-9aa7185cb502_360x.jpg?v=1678207246",
      price: 149.99,
      category: "Shoes",
      description: "A collection of stylish sneakers for your casual wardrobe.",
      sizes: ["9", "10", "11"],
    },
    {
      name: "Leather Belt with Buckle",
      id: 5,
      previousPrice: "7500৳",
      imageSrc:
        "https://zaysbd.com/cdn/shop/products/19_d2545fd9-4b5a-416e-a02b-7c62cb17dc10_360x.jpg?v=1679814299",
      price: 39.99,
      category: "Belts",
      description: "A classic leather belt with a stylish buckle.",
      sizes: ["32", "34", "36"],
    },
    {
      name: "Slim Leather Wallet",
      id: 6,
      previousPrice: "7500৳",
      imageSrc:
        "https://zaysbd.com/cdn/shop/products/01_397ecbd2-4a0c-4323-8656-0eebf6c63e87_360x.jpg?v=1679815726",
      price: 24.99,
      category: "Money Bags",
      description:
        "A slim and compact leather wallet with card slots and a cash pocket.",
      sizes: ["One Size"],
    },
    {
      name: "Athletic Running Shoes",
      id: 7,
      previousPrice: "7500৳",
      imageSrc:
        "https://zaysbd.com/cdn/shop/products/03_0b855dfe-5b05-4361-b04f-f069b25b1152_360x.jpg?v=1678205632",
      price: 89.99,
      category: "Shoes",
      description:
        "High-performance athletic running shoes for sports enthusiasts.",
      sizes: ["11", "12", "13"],
    },
    {
      name: "Stylish Canvas Belt",
      id: 8,
      previousPrice: "7500৳",
      imageSrc:
        "https://zaysbd.com/cdn/shop/products/01_72439fed-62f1-45d0-90ac-fa3f29018dbd_360x.jpg?v=1679815845",
      price: 19.99,
      category: "Belts",
      description: "A trendy canvas belt with a unique pattern.",
      sizes: ["34", "36", "38"],
    },
    {
      name: "Convertible Money Bag",
      id: 9,
      previousPrice: "7500৳",
      imageSrc: "https://i.ibb.co/TwHxZbf/bag-1.jpg",
      price: 99.99,
      category: "Money Bags",
      description:
        "A versatile money bag that can be converted into a shoulder bag.",
      sizes: ["One Size"],
    },
  ];
  const [tabIndex, setTabIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const openModal = () => {
    setIsModalOpen(true);
  };
 
  // Define closeModal within the component scope
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleClickToView = (card) => {
    openModal(true); // Open the modal
  };

  const categories = [
    { label: "All Categories", filter: () => true },
    { label: "Shoes", filter: (item) => item.category === "Shoes" },
    { label: "Money Bags", filter: (item) => item.category === "Money Bags" },
    { label: "Belts", filter: (item) => item.category === "Belts" },
  ];

  const currentCategory = categories[tabIndex];
  const filteredProducts = PopularProducts.filter(currentCategory.filter);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-8 md:py-12 font-serif">
        <Heading className="text-3xl mb-6">Popular Categories</Heading>
        <div className=" mt-10 p-4 md:p-6  w-full">
          <Tabs
            defaultIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}
            className="text-md"
          >
            <TabList className="flex flex-wrap justify-center space-x-2 sm:space-x-4">
              {categories.map((category, index) => (
                <Tab
                  key={index}
                  className={`${
                    index === tabIndex
                      ? "bg-white text-black font-semibold border border-black"
                      : " text-black hover:bg-gray-200"
                  } px-3 sm:px-4 py-2 rounded-full cursor-pointer transition duration-300 m-1`}
                >
                  {category.label}
                </Tab>
              ))}
            </TabList>

            {categories.map((category, index) => (
              <TabPanel key={index}>
                <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
                  {filteredProducts.map((card) => (
                    <Card key={card.id} card={card} handleClickToView={handleClickToView} />
                  ))}
                  {filteredProducts.map((card) => (
                      <Modal card={card} isOpen={isModalOpen} onClose={closeModal} />
                  ))}

                  
                </div>
              </TabPanel>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default PopularCategory;