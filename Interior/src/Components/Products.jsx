import React, { useRef } from "react";
import { products } from "../Data";
import ProductsCard from "./ProductsCard";
import { Link } from "react-router-dom";
import { motion, useInView, AnimatePresence } from "framer-motion";

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
            <AnimatePresence mode="wait">
              {selectedProducts.map((item, index) => {
                const ref = useRef(null);
                const isInView = useInView(ref, {
                  once: true,
                  margin: "-100px",
                });

                return (
                  <motion.div
                    ref={ref}
                    key={index}
                    className="w-full md:w-1/4 p-2"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.3 }}
                  >
                    <ProductsCard
                      product_id={item.id}
                      image={item.image}
                      image_alt={item.name}
                      product_name={item.name}
                      product_price={item.price}
                    />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;
