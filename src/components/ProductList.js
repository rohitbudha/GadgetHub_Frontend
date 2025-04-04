import React from "react";

const products = [
  {
    id: 1,
    image: "../../imgs/product_img/p1.png", 
    category: "Laptops",
    name: "MacBook Pro",
    price: "$980.00",
    oldPrice: "$990.00",
    discount: "-30%",
    rating: 5,
  },
  {
    id: 2,
    image: "../../imgs/product_img/p3.webp",
    category: "Headphones",
    name: "Wireless Headphones",
    price: "$980.00",
    oldPrice: "$990.00",
    discount: "NEW",
    rating: 4,
  },
  {
    id: 3,
    image: "../../imgs/product_img/p4.png",
    category: "Laptops",
    name: "Gaming Laptop",
    price: "$980.00",
    oldPrice: "$990.00",
    discount: "-30%",
    rating: 5,
  },
  {
    id: 4,
    image: "../../imgs/product_img/p2.webp",
    category: "Tablets",
    name: "Android Tablet",
    price: "$980.00",
    oldPrice: "$990.00",
    discount: "",
    rating: 5,
  },
];

export default function ProductList() {
  return (
    <div className="container mx-auto py-10">
      <h2 className="text-2xl font-bold mb-6">New Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow-md">
            <div className="relative">
              {product.discount && (
                <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded">
                  {product.discount}
                </span>
              )}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded"
              />
            </div>
            <p className="text-gray-500 text-sm mt-2">{product.category}</p>
            <h3 className="font-semibold text-lg">{product.name}</h3>
            <p className="text-red-500 font-bold text-lg">{product.price} <span className="text-gray-400 line-through text-sm">{product.oldPrice}</span></p>
            <div className="flex mt-2">
              {Array.from({ length: 5 }).map((_, index) => (
                <span
                  key={index}
                  className={`text-yellow-400 ${index < product.rating ? "" : "text-gray-300"}`}
                >
                  ★
                </span>
              ))}
            </div>
            <div className="flex justify-between mt-4 text-gray-600 text-lg">
              <button>♡</button>
              <button>≡</button>
              <button>👁</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
