import React, { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = (section) => {
    if (location.pathname !== "/") {
      // If not on the homepage, navigate to the homepage first
      navigate("/");
      setTimeout(() => {
        document.getElementById(section).scrollIntoView({ behavior: "smooth" });
      }, 100); // Slight delay to ensure routing is complete
    } else {
      // If already on the homepage, just scroll to the section
      document.getElementById(section).scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="grid grid-cols-2 justify-between items-center relative sticky top-0 z-50 px-6 py-3 shadow-lg bg-white">
      <div className="text-xl font-bold" onClick={() => navigate("/")}>
        {" "}
        <a href="#">Fitley</a>
      </div>

      <div className="md:hidden flex items-center justify-end">
        <button
          className="flex justify-center items-center"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <MdClose size={28} /> : <MdMenu size={28} />}
        </button>
      </div>

      {/* Desktop */}
      <div className="hidden md:flex gap-4 items-center justify-end">
        <ul className="flex space-x-6">
          <li onClick={() => navigate("/")}>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#products" onClick={() => handleScroll("products")}>
              Products
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => handleScroll("about")}>
              About
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile */}
      {menuOpen && (
        <div className="md:hidden flex gap-4 items-center">
          <ul className="absolute top-full left-0 right-0 pb-3 bg-white dark:bg-slate-600 flex flex-col items-center shadow-lg space-y-1 dark:text-slate-100">
            <li className="w-full text-center" onClick={() => navigate("/")}>
              <a
                href="#"
                onClick={closeMenu}
                className="block py-2 px-4 text-lg hover:text-xl bg-transparent rounded-lg hover:bg-[#000080] hover:text-white dark:hover:text-black dark:hover:bg-white transition-colors"
              >
                Home
              </a>
            </li>
            <li
              className="w-full text-center"
              onClick={() => handleScroll("products")}
            >
              <a
                href="#products"
                onClick={closeMenu}
                className="block py-2 px-4 text-lg hover:text-xl bg-transparent rounded-lg hover:bg-[#000080] hover:text-white dark:hover:text-black dark:hover:bg-white transition-colors"
              >
                Products
              </a>
            </li>
            <li
              className="w-full text-center"
              onClick={() => handleScroll("about")}
            >
              <a
                href="#about"
                onClick={closeMenu}
                className="block py-2 px-4 text-lg hover:text-xl bg-transparent rounded-lg hover:bg-[#000080] hover:text-white dark:hover:text-black dark:hover:bg-white transition-colors"
              >
                About
              </a>
            </li>
          </ul>
        </div>
      )}

      {/* Cart */}
      {/* <div className="flex items-center justify-center">
        <FiShoppingCart className="text-gray-600 mr-2" size={24} />
        <button className="px-1 py-2 rounded">Cart</button>
      </div> */}
    </nav>
  );
};

export default Navbar;
