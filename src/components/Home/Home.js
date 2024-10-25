import React from "react";
import { useNavigate } from "react-router-dom";
import HomeImg from "../../Images/Home.jpeg";

const Home = () => {
  const navigate = useNavigate();

  const handleExploreAll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    navigate("/product");
  };

  return (
    <section
      className="relative flex items-start md:items-center justify-start md:justify-center h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://img.pikbest.com/wp/202409/potato-chip-snack-crispy-chips-shower-perfect-for-fast-food-and-themes-rendered-in-3d-with-a-black-backdrop_9825467.jpg!w700wp')",
        //  backgroundImage:`url(${HomeImg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 text-white px-4 md:px-0 w-full mt-32 md:mt-0">
        <h1 className="text-3xl md:text-6xl font-bold mb-4 text-center">
          Mindful Food For Body and Soul!
        </h1>

        <p className="text-base md:text-2xl mb-6 text-center">
          Discover the perfect crunch for every craving.
        </p>

        <div className="flex flex-col md:flex-row justify-start md:justify-center gap-4 text-center">
          <a
            href="#products"
            className="bg-yellow-500 text-black py-3 px-8 rounded-full hover:bg-yellow-600 transition-all duration-300"
          >
            Shop Now
          </a>

          <button
            onClick={handleExploreAll}
            className="bg-transparent border-2 border-white py-3 px-8 rounded-full hover:bg-white hover:text-black transition-all duration-300"
          >
            Discover Flavors
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
