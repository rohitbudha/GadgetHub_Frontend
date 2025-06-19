import React, { useContext } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { toast, ToastContainer } from "react-toastify";
import { CartContext } from "./Cart/CartContext";
import "react-toastify/dist/ReactToastify.css";

const defaultProducts = [
  {
    id: 1,
    image: "../../imgs/product_img/p1.png",
    category: "Laptops",
    name: "MacBook Pro",
    price: "Rs 125000.00",
    oldPrice: "Rs 150000",
    discount: "-30%",
    rating: 5,
  },
  {
    id: 2,
    image: "../../imgs/product_img/p3.webp",
    category: "Headphones",
    name: "Wireless Headphones",
    price: "Rs 1500.00",
    oldPrice: "Rs2500.00",
    discount: "NEW",
    rating: 4,
  },
  {
    id: 3,
    image: "../../imgs/product_img/p4.png",
    category: "Laptops",
    name: "Gaming Laptop",
    price: "Rs 150000",
    oldPrice: "Rs 175000",
    discount: "-30%",
    rating: 5,
  },
  {
    id: 4,
    image: "../../imgs/product_img/p2.webp",
    category: "Tablets",
    name: "Android Tablet",
    price: "Rs 25000",
    oldPrice: "Rs 30000",
    discount: "",
    rating: 5,
  },
];

const HomeProductList = ({ products, originalCount, searchTerm }) => {
  const searchPerformed = searchTerm.trim() !== '';
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="container mx-auto py-10 px-4">
  {searchPerformed && (
  products.length > 0 ? (
    <p>Showing {products.length} of {originalCount} items</p>
  ) : (
    <p>No items found</p>
  )
)}

      <h2 className="text-2xl font-bold mb-6 text-center">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
     
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 shadow-md hover:shadow-xl hover:-translate-y-1 transition-transform duration-300"
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-blue-600 font-bold text-xl">{product.price}</span>
            </div>
            <button
              onClick={() => handleAddToCart(product)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition duration-300 flex justify-center items-center gap-2"
            >
              <CiShoppingCart size={20} /> Add to Cart
            </button>
          </div>
        ))}
      </div>
      <ToastContainer position="top-right" autoClose={800} hideProgressBar />
    </div>
  );
};

export default HomeProductList;


