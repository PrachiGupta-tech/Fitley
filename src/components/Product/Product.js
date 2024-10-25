import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ products }) => {
  const navigate = useNavigate();

  const handleExploreAll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    navigate("/product");
  };

  return (
    <>
      <div className="md:px-32 pb-6 pt-20 flex flex-row justify-between items-center">
        <div>
          <p className="">Explore the</p>
          <p className="text-4xl font-semibold">Products</p>
        </div>
        <button onClick={handleExploreAll}>Explore All</button>
      </div>

      <div className="md:px-32 flex flex-col md:flex-row justify-between gap-5">
        {products?.length > 0 && (
          <div className="relative w-full flex justify-center mb-5 md:mb-0">
            <a href={"/product"} rel="noopener noreferrer">
              <img src={products[0]?.image} alt="Image" className="w-96 h-96" />
            </a>
          </div>
        )}

        {/* Grid for 4 Smaller Products */}
        <div className="grid grid-cols-2 gap-4 w-full h-96 md:h-auto">
          {products.slice(1, 5).map((product, index) => (
            <div key={index} className="relative w-full h-auto md:h-auto">
              <a href={"/product"} rel="noopener noreferrer">
                <div className="w-full relative h-full">
                  <img
                    src={product?.image}
                    alt={product?.title}
                    className="w-full absolute top-0 left-0 h-full"
                  />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;

