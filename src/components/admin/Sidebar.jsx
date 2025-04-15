import { RxAvatar } from "react-icons/rx";
import { IoHomeOutline } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";

export default function Sidebar() {
  const navigate = useNavigate();
  const [fname, setFname] = useState('');

  const handleLogout = (e) => {
    e.preventDefault(); 
    localStorage.removeItem("fname");
    localStorage.removeItem("token");
    setFname("Guest");
    navigate("/")
  };

  return (
    <>
      <aside className="w-52 bg-gray-800 text-white p-5 fixed h-full">
        <img alt="gadgethub" src="../logo.png?color=indigo&shade=600" className="mx-auto h-20 w-auto" />
        <nav className="flex flex-col space-y-2">
          <a href="#" className="flex items-center p-3 hover:no-underline">
            <i className="mr-3"><IoHomeOutline /></i> Dashboard
          </a>
          <Link className="flex items-center p-3 hover:no-underline" to="/CustomerList">
            <i className="mr-3"><RxAvatar /></i> View Customers
          </Link>
          <Link className="flex items-center p-3 hover:no-underline" to="/Category">
            <i className="mr-3"><RxAvatar /></i> Add Category
          </Link>
          <Link className="flex items-center p-3 hover:no-underline" to="/CategoryList">
            <i className="mr-3"><CiShoppingCart /></i> View Category
          </Link>
          <Link to="/ProductList" className="flex items-center p-3 hover:no-underline">
            <i className="mr-3"><CiShoppingCart /></i> View Products
          </Link>

          {/* This looks and behaves like other Links but logs out on click */}
          <Link  onClick={handleLogout} className="flex items-center p-3 hover:no-underline">
            <i className="mr-3"><IoIosLogOut /></i> Log Out
          </Link>
        </nav>
      </aside>
    </>
  );
}
