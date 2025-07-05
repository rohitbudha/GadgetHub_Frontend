// import React, { useEffect, useState } from "react";
// import HomeProductList from "./HomeProductList";

// const Home = () => {
//   const [products, setProducts] = useState([]);
//   const [originalCount, setOriginalCount] = useState(0);
//   const [searchInput, setSearchInput] = useState("");

//   useEffect(() => {
//     fetch('http://localhost:8080/customers/cget') 
//       .then((res) => res.json())
//       .then((data) => {
//         setProducts(data);
//         setOriginalCount(data.length);
//       })
//       .catch((err) => console.error("Error fetching products", err));
//   }, []);

//   const filtered = products.filter((product) =>
//     product.name.toLowerCase().includes(searchInput.toLowerCase())
  
//   );

//   return (

//      <div className="p-4">
//       <input
//         type="text"
//         placeholder="Search for a product..."
//         value={searchInput}
//         onChange={(e) => setSearchInput(e.target.value)}
//        className="w-full p-2 border border-gray-300 rounded mb-6"
//       />
//     <HomeProductList
//       products={searchInput ? filtered : products}
//       originalCount={originalCount}
//       searchTerm={searchInput}
//     />
//     </div>
//   );
// };

// export default Home;

import React, { useEffect, useState } from "react";
import HomeProductList from "./HomeProductList";

const defaultProducts = [

  {
    id: 1,
    imageUrl: "https://res.cloudinary.com/dgcgqy5as/image/upload/v1744037014/swbfmc9xan78gte6ccbv.webp",
    category: "Headphones",
    name: "Rockers Bolt Headphone",
    price: "1500.00",
    oldPrice: "2500.00",
    discount: "NEW",
    rating: 4,
  },
  {
    id: 2,
    imageUrl: "https://res.cloudinary.com/dgcgqy5as/image/upload/v1747664360/band_d6qfcp.jpg",
    category: "Laptops",
    name: "Ultra Fit Pro",
    price: "2700",
    oldPrice: "3000",
    discount: "-30%",
    rating: 5,
  },
  {
    id: 3,
    imageUrl: "https://res.cloudinary.com/dgcgqy5as/image/upload/v1746604843/opnnboir8isghzobiaa6.jpg",
    category: "Tablets",
    name: "Sound Sphere",
    price: "1500",
    oldPrice: "30000",
    discount: "-15%",
    rating: 5,
  },
  {
    id: 5,
    imageUrl: "https://res.cloudinary.com/dgcgqy5as/image/upload/v1745243743/images_1_ciuipc.jpg",
    category: "Wearables",
    name: "ElitePro Wireless Headset",
    price: "2500",
    oldPrice: "10000",
    discount: "-20%",
    rating: 4,
  },
  {
    id: 6,
    imageUrl: "https://res.cloudinary.com/dgcgqy5as/image/upload/v1747664304/download_3_ugfrmq.jpg",
    category: "speakers",
    name: "ultima Speaker",
    price: "120000",
    oldPrice: "130000",
    discount: "-8%",
    rating: 5,
  },
  {
    id: 7,
    imageUrl: "https://res.cloudinary.com/dgcgqy5as/image/upload/v1746551891/s9qf4gnxuwuy2incymbi.jpg",
    category: "Accessories",
    name: "PowerBank",
    price: "2500",
    oldPrice: "3000",
    discount: "-16%",
    rating: 4,
  },
  {
    id: 8,
    imageUrl: "https://res.cloudinary.com/dgcgqy5as/image/upload/v1746553895/kkm7rg6hnyb6cjuvqdze.webp",
    category: "Photoghraphy",
    name: "Go Pro Camera",
    price: "43300",
    oldPrice: "2200",
    discount: "-18%",
    rating: 3,
  },
  {
    id: 9,
    imageUrl: "https://res.cloudinary.com/dgcgqy5as/image/upload/v1747664549/Redmi-13-4G-Ocean-Blue_akdaow.jpg",
    category: "Monitors",
    name: "Redmi 13 4G",
    price: "25000",
    oldPrice: "27000",
    discount: "-7%",
    rating: 4,
  }
];


const Home = () => {
  const [products, setProducts] = useState([]);
  const [originalCount, setOriginalCount] = useState(0);
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8080/customers/cget")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch products");
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setOriginalCount(data.length);
      })
      .catch((err) => {
        console.error("Error fetching products", err);
        // fallback to default products if fetch fails
        setProducts(defaultProducts);
        setOriginalCount(defaultProducts.length);
      })
      .finally(() => setLoading(false));
  }, []);

  // Filter products based on search input
  const filtered = (searchInput ? products.filter((product) =>
    product.name.toLowerCase().includes(searchInput.toLowerCase())
  ) : products);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-xl">Loading products...</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search for a product..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-6"
      />
      <HomeProductList
        products={filtered}
        originalCount={originalCount}
        searchTerm={searchInput}
      />
    </div>
  );
};

export default Home;

