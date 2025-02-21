import React, { useRef } from "react";
import { products } from "../Data";
import ProductsCard from "./ProductsCard";
import { Link } from "react-router-dom";

function Products() {
  const selectedProducts = [];
  const categoryMap = {};

  products.forEach((product) => {
    if (!categoryMap[product.category]) {
      categoryMap[product.category] = true;
      selectedProducts.push(product);
    }
  });

  return (
    <>
      <section className="crafted py-20 bg-gray-100">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-y-5 py-8">
            <div className="w-full md:w-1/4 p-2">
              <div className="text">
                <h2 className="text-4xl text-gray-800 font-medium">
                  Crafted with excellent material.
                </h2>
                <p className="text-gray-600 my-7 ">
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                  aliquet velit. Aliquam vulputate velit imperdiet dolor tempor
                  tristique.
                </p>
                <Link
                  to="/shop"
                  className="duration-300 rounded-full bg-gray-800 text-white font-medium hover:bg-gray-900 border-gray-800 px-7 py-3"
                >
                  Explore
                </Link>
              </div>
            </div>
            {selectedProducts.map((item, index) => {
              return (
                <div key={index} className="w-full md:w-1/4 p-2">
                  <ProductsCard
                    product_id={item.id}
                    image={item.image}
                    image_alt={item.name}
                    product_name={item.name}
                    product_price={item.price}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;
