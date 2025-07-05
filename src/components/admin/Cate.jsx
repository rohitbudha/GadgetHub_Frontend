

import React, { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";



const defaultCategories = [
  {
    id: "s1",
    name: "Smartwatches",
    image: "https://res.cloudinary.com/dgcgqy5as/image/upload/v1744019893/ks0ucx36bjvvhoc7dmma.webp",
  },
  {
    id: "s2",
    name: "Headphones",
    image: "https://res.cloudinary.com/dgcgqy5as/image/upload/v1744037014/swbfmc9xan78gte6ccbv.webp",
  },
  {
    id: "s3",
    name: "Earbuds",
    image: "https://res.cloudinary.com/dgcgqy5as/image/upload/v1744021023/xt9yu3rxuzpmmueg8h9m.webp",
  },
  {
    id: "s4",
    name: "Smartphones",
    image: "https://res.cloudinary.com/dgcgqy5as/image/upload/v1746518896/udr95qabmq6bjzvh8bij.png",
  },
  {
    id: "s5",
    name: "Speakers",
    image: "https://res.cloudinary.com/dgcgqy5as/image/upload/v1746604843/opnnboir8isghzobiaa6.jpg",
  },
  {
    id: "s6",
    name: "Laptops",
    image: "https://res.cloudinary.com/dgcgqy5as/image/upload/v1746607286/xyfjlfhyw6yyfzwvxr9f.jpg",
  },
];

const Cate = () => {
  const scrollRef = useRef(null);
  const [categories, setCategories] = useState(defaultCategories); 

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    fetch("http://localhost:8080/customers/category")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch categories");
        return res.json();
      })
      .then((data) => {
        if (data && data.length > 0) {
          setCategories(data);
        }
      })
      .catch((err) => {
        console.error("Error fetching categories:", err);
        // fallback: static categories already set by default
      });
  }, []);

  return (
    <div className="relative px-6 py-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-900">Shop by Category</h2>
        <a href="#" className="text-blue-600 font-medium hover:underline">
          Browse all categories →
        </a>
      </div>

      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10"
      >
        <ChevronLeft className="w-6 h-6 text-gray-600" />
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10"
      >
        <ChevronRight className="w-6 h-6 text-gray-600" />
      </button>

      <div
        ref={scrollRef}
        className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide scroll-smooth"
      >
        {categories.map((category) => (
          <div
            key={category.id}
            className="flex-shrink-0 w-1/4 min-w-[250px] bg-gradient-to-b from-white to-gray-100 rounded-lg p-4 text-center shadow-md transform transition duration-300 hover:scale-105"
          >
            <img
              src={category.image}
              alt={category.name}
              className="h-36 w-full object-contain mb-2"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {category.name}
            </h3>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              Shop Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cate;

