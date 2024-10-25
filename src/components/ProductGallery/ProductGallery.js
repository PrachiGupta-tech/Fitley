import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import Img1 from "../../Images/Gallery/Img1.jpeg";
import Img2 from "../../Images/Gallery/Img2.jpeg";
import Img3 from "../../Images/Gallery/Img3.jpeg";
import Img4 from "../../Images/Gallery/Img4.jpeg";
import Img5 from "../../Images/Gallery/Img5.jpeg";
import Img6 from "../../Images/Gallery/Img6.jpeg";
import Img7 from "../../Images/Gallery/Img7.jpeg";
import Img8 from "../../Images/Gallery/Img8.jpeg";
import Img9 from "../../Images/Gallery/Img9.jpeg";

const ProductGallery = () => {
  const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9];

  return (
    <div className="md:px-32 pb-6 pt-20">
      <div className="flex flex-row justify-between items-center mb-6">
        <div>
          <p className="">Dive into our</p>
          <p className="text-4xl font-semibold">Product Gallery</p>
        </div>
      </div>

      <Splide
        options={{
          pagination: false,
          padding: { left: "0%", right: "7.5%" },
          type: "slide",
          perPage: 3,
          gap: "1rem",
          rewind: false,
          perMove: 1,
          breakpoints: {
            640: {
              perPage: 1,
            },
            1024: {
              perPage: 2,
            },
          },
        }}
      >
        {images.map((src, index) => (
          <SplideSlide key={index}>
            <img
              src={src}
              alt={`Image ${index + 1}`}
              className="w-full md:h-[50vh] h-[30vh] rounded-lg shadow-md"
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default ProductGallery;
