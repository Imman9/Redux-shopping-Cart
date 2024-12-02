import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import { PuffLoader } from "react-spinners";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchProducts() {
    setLoading(true);
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();

      if (data) {
        setLoading(false);
        setProducts(data);
      }
      console.log(products);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      {loading ? (
        <div className="flex justify-center items-center h-full">
          <PuffLoader />
        </div>
      ) : (
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products && products.length
              ? products.map((productItem) => (
                  <ProductList productItem={productItem} />
                ))
              : null}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
