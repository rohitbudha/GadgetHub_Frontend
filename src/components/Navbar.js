import React, { useEffect, useState, useContext, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CiShoppingCart, CiUser } from "react-icons/ci";
import { FiHeart } from "react-icons/fi";
import { CartContext } from './Cart/CartContext';
import { ChevronDown, User, LogOut, Edit3, Lock, ShoppingBag } from "lucide-react";

export default function Navbar({ onSearch }) {
  const { totalQuantity, clearCart } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);
  const [fname, setFname] = useState("Guest");
  const [cartItems, setCartItems] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const storedName = localStorage.getItem("fname");
    if (storedName) {
      setFname(storedName);
    }
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchInput); 
    }
  };

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 text-xl font-bold text-gray-800">
          <img 
            alt="Your Company" 
            src="../logo.png" 
            height="50" 
            width="50"
            className="object-contain"
          />
          <span>GadgetHub</span>
        </Link>

        <button 
          className="text-gray-800 md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        <div className={`absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent md:flex items-center z-10 transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="md:flex md:space-x-6 space-y-2 md:space-y-0 p-4 md:p-0">
            <li><a className="text-gray-700 hover:text-blue-500" href="/">Home</a></li>
            <li><Link className="text-gray-700 hover:text-blue-500" to="/Register">Register</Link></li>
            <li><Link className="text-gray-700 hover:text-blue-500" to="/Login">Login</Link></li>
            <li><Link className="text-gray-700 hover:text-blue-500" to="/AboutUs">About Us</Link></li>
            <li><Link className="text-gray-700 hover:text-blue-500" to="/ContactUs">Contact Us</Link></li>
          </ul>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <form 
            className="flex items-center border rounded-md overflow-hidden"
            onSubmit={handleSearchSubmit}
          >
            <input 
              className="px-2 py-1 outline-none" 
              type="search" 
              placeholder="Search Gadgets"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button className="bg-indigo-500 text-white px-3 py-1" type="submit">Search</button>
          </form>

          <div className="relative">
            <Link to="/wishlist" className="text-gray-700 hover:text-blue-500 text-xl">
              <FiHeart />
            </Link>
            <span className="absolute -top-3 -right-2 bg-blue-500 text-white text-xs px-1.5 py-0.5 rounded-full">
              0
            </span>
          </div>

          <div className="relative">
            <Link to="/Cart" className="text-gray-700 hover:text-blue-500 text-xl">
              <CiShoppingCart />
            </Link>
            {totalQuantity > 0 && (
              <span className="absolute -top-3 -right-2 bg-blue-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                {totalQuantity}
              </span>
            )}
          </div>

          <span>Welcome, {fname}</span>

          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="text-gray-700 hover:text-blue-500 text-xl focus:outline-none"
            >
              <CiUser />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-md z-50">
                <ul className="text-gray-700">
                  <Link to="/profile">
                    <li className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2 cursor-pointer">
                      <User size={16} /> View Profile
                    </li>
                  </Link>
                  <Link to="/edit-profile">
                    <li className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2 cursor-pointer">
                      <Edit3 size={16} /> Edit Profile
                    </li>
                  </Link>
                  <Link to="/change-password">
                    <li className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2 cursor-pointer">
                      <Lock size={16} /> Change Password
                    </li>
                  </Link>
                  <Link to="/my-orders">
                    <li className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2 cursor-pointer">
                      <ShoppingBag size={16} /> My Orders
                    </li>
                  </Link>

                  <li
                    className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2 text-red-500 cursor-pointer"
                    onClick={() => {
                      localStorage.removeItem("fname");
                      localStorage.removeItem("token");

                      if (fname !== "Guest") {
                        setCartItems([]);
                      }

                      setFname("Guest");
                      localStorage.setItem("fname", "Guest");
                      setDropdownOpen(false);
                    }}
                  >
                    <LogOut size={16} /> Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
