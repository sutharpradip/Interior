import React from "react";

function Cart() {
  return (
    <section className="py-10">
      <div className="container">
        <div className="flex justify-between flex-wrap">
          <div className="w-full md:w-3/5">
            <div className="cart-item flex justify-between bg-gray-100 border p-5 rounded-lg">
              <div className=" flex gap-3 md:w-1/3 w-full">
                <div className="cart-item-image rounded-md overflow-hidden w-[75px] h-[75px]">
                  <img
                    className=""
                    src="https://picsum.photos/300/300"
                    alt="Product Image"
                  />
                </div>

                <div className="cart-item-details">
                  <h2 className="font-semibold text-lg">Name</h2>
                  <h3 className="mt-3 text-gray-600 font-normal">
                    sold By:{" "}
                    <span className="font-medium text-gray-800">Hocco</span>{" "}
                  </h3>
                </div>
              </div>

              <div className="cart-item-price md:w-1/5 w-full">
                <h2 className="font-semibold text-lg">Price</h2>
                <h3 className="mt-3 font-medium">$100</h3>
              </div>

              <div className="cart-item-quantity md:w-1/5 w-full">
                <h2 className="font-semibold text-lg">Qty</h2>

                <div className="qty-btns mt-3 bg-gray-300 px-2 py-1 rounded inline-flex gap-x-3 ">
                  <button className="bg-white w-[25px] h-[25px] flex justify-center items-center rounded">
                    -
                  </button>
                  <span>5</span>
                  <button className="bg-white w-[25px] h-[25px] flex justify-center items-center rounded">
                    +
                  </button>
                </div>
              </div>

              <div className="cart-item-total">
                <h2 className="font-semibold text-lg">Total</h2>
                <h3 className="mt-3 font-medium">$20</h3>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/3">
            <div className="cart-summary bg-gray-100 border p-5 rounded-lg">
              <h2>Cart Summary</h2>

              <div className="flex justify-between border-b-1">
                <p>Items in Cart</p>
                <span>3</span>
              </div>

              <div className="flex justify-between ">
                <p>Cart total price</p>
                <span>$99</span>
              </div>

              <div className="flex justify-between ">
                <p>Coupan</p>
                <span>-$19</span>
              </div>

              <div className="flex justify-between ">
                <p>Shipping</p>
                <span>$20</span>
              </div>

              <div className="flex justify-between ">
                <p>Total</p>
                <span>$99</span>
              </div>

              <div className="flex justify-between ">
                <p>Saved</p>
                <span>$99</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
