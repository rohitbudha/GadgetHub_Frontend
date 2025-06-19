import React, { useEffect, useState } from "react";
import HomeProductList from "./HomeProductList";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [originalCount, setOriginalCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch('http://localhost:8080/customers/cget') 
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setOriginalCount(data.length);
      })
      .catch((err) => console.error("Error fetching products", err));
  }, []);

  const filtered = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <HomeProductList
      products={searchTerm ? filtered : products}
      originalCount={originalCount}
      searchTerm={searchTerm}
    />
  );
};

export default Home;
