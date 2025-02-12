import React from "react";
import { Link } from "react-router-dom";

function ProductsCard({
  image,
  image_alt,
  product_name,
  product_price,
  product_id,
}) {
  return (
    <>
      <Link id={product_id} className="product-card text-center pb-10 block">
        <div className="product-img mb-4">
          <img className="w-full" src={image} alt={image_alt} />
        </div>
        <h3 className="text-lg text-gray-800 font-medium mb-2">
          {product_name}
        </h3>
        <h2 className="text-gray-800 font-bold text-2xl">$ {product_price}</h2>
        <div className="add-btn">
          <button className="absolute left-2/4 translate-x-[-50%] ">
            <i className="p-2 rounded-full !flex justify-center items-center w-[40px] h-[40px] text-white bg-gray-800 fa-solid fa-plus"></i>
          </button>
        </div>
      </Link>
    </>
  );
}

export default ProductsCard;
