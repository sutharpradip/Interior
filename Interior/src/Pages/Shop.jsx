import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProductsCard from "../Components/ProductsCard";
import { products } from "../Data";

function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Filter products based on selected category
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((item) => item.category === selectedCategory);

  return (
    <>
      <section
        className="py-20 md:pb-[8rem] bg-gray-100"
        style={{ backgroundColor: "#3b5d50" }}
      >
        <div className="container mx-auto">
          <h1 className="text-[3.3rem] font-inter mb-2 text-white font-bold leading-tight">
            Shop
          </h1>

          {/* Filter buttons */}
          <div className="filter-btns flex gap-5 my-5">
            {["All", "chair", "sofa", "bed"].map((category) => (
              <button
                key={category}
                className={`duration-200 border-2 px-6 py-2 rounded-full capitalize font-medium ${
                  selectedCategory === category
                    ? "border-yellow-300 text-yellow-300"
                    : "border-gray-400 text-gray-400 hover:border-yellow-300 hover:text-yellow-300"
                }`}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="products py-10 pb-20">
        <div className="container">
          <div className="products flex flex-wrap gap-y-8">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((item, index) => (
                <div key={index} className="w-full md:w-1/4 p-2">
                  <ProductsCard
                    image={item.image}
                    image_alt={item.name}
                    product_name={item.name}
                    product_id={item.id}
                    product_price={item.price}
                  />
                </div>
              ))
            ) : (
              <motion.p
                className="text-gray-600 text-lg text-center w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                No products available in this category.
              </motion.p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Shop;
