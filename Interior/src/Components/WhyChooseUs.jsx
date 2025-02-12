import React from "react";

function WhyChooseUs() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between py-8 gap-y-12 md:gap-y-0">
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl text-gray-800 font-medium">
              Why Choose Us
            </h2>
            <p className="text-gray-600">
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
            </p>

            <div className="flex flex-wrap gap-y-8 my-10">
              <div className="w-full md:w-1/2 p-2">
                <div className="icon mb-3 relative before:z-[-1] before:block before:top-2 before:left-5 z-10 before:w-9 before:rounded-full before:h-9 before:absolute before:bg-gray-300">
                  <img className="" src="src/assets/images/truck.svg" alt="" />
                </div>
                <h3 className="my-1 font-medium text-gray-800">
                  Fast & Free Shipping
                </h3>
                <p className="text-gray-500 text-sm font-normal">
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                  aliquet velit. Aliquam vulputate.
                </p>
              </div>

              <div className="w-full md:w-1/2 p-2">
                <div className="icon mb-3 relative before:z-[-1] before:block before:top-2 before:left-5 z-10 before:w-9 before:rounded-full before:h-9 before:absolute before:bg-gray-300">
                  <img className="" src="src/assets/images/bag.svg" alt="" />
                </div>
                <h3 className="my-1 font-medium text-gray-800">
                  Fast & Free Shipping
                </h3>
                <p className="text-gray-500 text-sm font-normal">
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                  aliquet velit. Aliquam vulputate.
                </p>
              </div>

              <div className="w-full md:w-1/2 p-2">
                <div className="icon mb-3 relative before:z-[-1] before:block before:top-2 before:left-5 z-10 before:w-9 before:rounded-full before:h-9 before:absolute before:bg-gray-300">
                  <img
                    className=""
                    src="src/assets/images/support.svg"
                    alt=""
                  />
                </div>
                <h3 className="my-1 font-medium text-gray-800">
                  Fast & Free Shipping
                </h3>
                <p className="text-gray-500 text-sm font-normal">
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                  aliquet velit. Aliquam vulputate.
                </p>
              </div>

              <div className="w-full md:w-1/2 p-2">
                <div className="icon mb-3 relative before:z-[-1] before:block before:top-2 before:left-5 z-10 before:w-9 before:rounded-full before:h-9 before:absolute before:bg-gray-300">
                  <img className="" src="src/assets/images/return.svg" alt="" />
                </div>
                <h3 className="my-1 font-medium text-gray-800">
                  Fast & Free Shipping
                </h3>
                <p className="text-gray-500 text-sm font-normal">
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                  aliquet velit. Aliquam vulputate.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-2/5  ">
            <div className="img-div why-choose-before relative z-10">
              <img
                className="rounded-3xl"
                src="src/assets/images/why-choose-us-img.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
