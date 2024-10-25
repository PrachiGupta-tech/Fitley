import { useEffect, useState } from "react";
import "./App.css";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Product from "./components/Product/Product";
import AllProducts from "./components/Product/AllProducts";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductSkeleton from "./components/Skeleton/Skeleton";
import ProductGallery from "./components/ProductGallery/ProductGallery";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       setLoading(true);
  //       const response = await fetch("https://fakestoreapi.com/products");
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch products");
  //       }
  //       const data = await response.json();
  //       setProducts(data);
  //     } catch (error) {
  //       setError(error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchProducts();
  // }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch("/products.json");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading)
    return (
      <>
        <ProductSkeleton />
      </>
    );
  if (error) return <p>Error: {error}</p>;

  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home Route */}
        <Route
          path="/"
          element={
            <>
              <section id="#">
                <Home />
              </section>
              <section id="products" className="px-6 md:px-2">
                <Product products={products} />
              </section>
              <section id="about" className="px-6 md:px-2">
                <About />
              </section>
              <section id="gallery" className="px-6 md:px-2">
                <ProductGallery />
              </section>
              <Footer />
            </>
          }
        />
        {/* All Products Page Route */}
        <Route path="/product" element={<AllProducts products={products} />} />
      </Routes>
    </Router>
  );
}

export default App;
