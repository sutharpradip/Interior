import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";

function ProductsCard({
  image,
  image_alt,
  product_name,
  product_price,
  product_id,
}) {
  const { addToCart } = useCart();

  const handleAddCart = (e) => {
    e.preventDefault();
    const product = {
      id: product_id,
      name: product_name,
      price: product_price,
      image: image,
      quantity: 1,
    };

    addToCart(product);
  };

  return (
    <>
      <Link
        // to={`/product/${product_id}`}
        className="product-card text-center pb-10 block"
      >
        <div className="product-img mb-4">
          <img className="w-full" src={image} alt={image_alt} />
        </div>
        <h3 className="text-lg text-gray-800 font-medium mb-2">
          {product_name}
        </h3>
        <h2 className="text-gray-800 font-bold text-2xl">$ {product_price}</h2>
        <div className="add-btn">
          <button
            onClick={handleAddCart}
            className="absolute left-2/4 translate-x-[-50%] "
          >
            <i className="p-2 rounded-full !flex justify-center items-center w-[40px] h-[40px] text-white bg-gray-800 fa-solid fa-plus"></i>
          </button>
        </div>
      </Link>
    </>
  );
}

export default ProductsCard;
