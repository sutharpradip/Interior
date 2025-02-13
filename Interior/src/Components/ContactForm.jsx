import React from "react";

function ContactForm() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="md:w-8/12 w-ful">
            <div className="flex flex-wrap items-center gap-y-2">
              <div className="w-full lg:w-1/3  pr-10">
                <div className="flex items-center lg:justify-center">
                  <span>
                    <i className="!flex justify-center items-center h-[50px] w-[50px] rounded-md text-white bg-[#3b5d50] fa-solid fa-location-dot"></i>
                  </span>
                  <span className=" ms-5 text-gray-500 text-sm font-normal">
                    43 Raymouth Rd. Baltemoer, London 3910
                  </span>
                </div>
              </div>

              <div className="w-full lg:w-1/3  pr-10">
                <div className="flex items-center lg:justify-center">
                  <span>
                    <i className="!flex justify-center items-center h-[50px] w-[50px] rounded-md text-white bg-[#3b5d50] fa-solid fa-location-dot"></i>
                  </span>
                  <span className=" ms-5 text-gray-500 text-sm font-normal">
                    info@yourdomain.com
                  </span>
                </div>
              </div>

              <div className="w-full lg:w-1/3  pr-10">
                <div className="flex items-center lg:justify-center">
                  <span>
                    <i className="!flex justify-center items-center h-[50px] w-[50px] rounded-md text-white bg-[#3b5d50] fa-solid fa-location-dot"></i>
                  </span>
                  <span className=" ms-5 text-gray-500 text-sm font-normal">
                    +1 294 3925 3939
                  </span>
                </div>
              </div>
            </div>

            <form action="" className="py-16">
              <div className="flex flex-wrap justify-between">
                <div className="w-full md:w-[48%]">
                  <label htmlFor="f-name">First Name</label>
                  <input
                    id="f-name"
                    className="border border-gray-300 p-3 w-full bg-white rounded-md"
                    type="text"
                  />
                </div>

                <div className="w-full md:w-[48%]">
                  <label htmlFor="L-name">Last Name</label>
                  <input
                    id="L-name"
                    className="border border-gray-300 rounded-md p-3 w-full bg-white"
                    type="text"
                  />
                </div>
              </div>

              <div className="flex my-2">
                <div className="w-full">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    className="border border-gray-300 rounded-md p-3 w-full"
                    type="text"
                  />
                </div>
              </div>

              <div className="flex">
                <div className="w-full">
                  <label htmlFor="">Message</label>
                  <textarea
                    rows={6}
                    className="w-full border rounded-md border-gray-300"
                    name=""
                    id=""
                  ></textarea>
                </div>
              </div>

              <div className="submit mt-10">
                <input
                  className="cursor-pointer bg-gray-800 px-5 py-3 text-white rounded-full"
                  type="submit"
                  value="Send Message"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
