import React, { useState } from "react";
import Footer from "../Footer/Footer";
import { IoSearchOutline } from "react-icons/io5";

const AllProducts = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handlePhoneOrder = () => {
    window.location.href = "tel:+91 8800664798";
  };

  const handleWhatsappOrder = () => {
    // const message = encodeURIComponent(
    //   "Hello, I would like to place an order."
    // );
    // const whatsappUrl = `https://wa.me/8800664798?text=${message}`;
    // window.open(whatsappUrl, "_blank");
    const contactNumber = "+91 8800664798";
    const whatsAppText = "Hello, I would like place an order!";
    const encodedText = encodeURIComponent(whatsAppText);
    const link = `https://wa.me/${contactNumber}?text=${encodedText}`;

    window.open(link, "_blank");
  };

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="md:px-32 mb-20 p-5 md:p-0">
          <div className="mb-8 mt-4 md:flex md:justify-between">
            <h2 className="text-4xl font-semibold">Our Products</h2>

            <div className="relative w-full mt-4 md:mt-0 md:w-1/3">
              <input
                type="text"
                placeholder="Search products..."
                className="border border-gray-300 rounded-lg p-2 w-full pr-10 focus:outline-none focus:border-gray-400"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <IoSearchOutline className="w-5 h-5 text-gray-500" />
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center transform transition-transform duration-300 hover:scale-105"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-60 object-contain mb-4"
                  />
                  <h3 className="text-lg font-bold mb-2 text-center">
                    {product.title}
                  </h3>
                  <p className="text-md font-semibold text-gray-700">
                    Price: Rs.{product.price}
                  </p>
                  <div className="flex items-center mb-2">
                    <p className="text-sm text-gray-600">
                      Weight: {product.weight}
                    </p>
                  </div>
                  <button
                    onClick={handlePhoneOrder}
                    className="bg-[#FF9119] text-white py-2 px-4 rounded-lg font-semibold hover:bg-orange-600 md:hidden"
                  >
                    Order via Phone
                  </button>
                  <button
                    onClick={handleWhatsappOrder}
                    className="bg-[#FF9119] mt-2 text-white py-2 px-4 rounded-lg font-semibold hover:bg-orange-600"
                  >
                    Order via Whatsapp
                  </button>
                </div>
              ))
            ) : (
              <div>
                <p className="">
                  Looks like you’ve searched for something rare! Try another
                  search.
                </p>
              </div>
            )}
          </div>
          <p className="mt-8 text-center">
            Millets friendly and genie orders soon!
          </p>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default AllProducts;
