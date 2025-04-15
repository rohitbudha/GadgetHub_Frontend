
import { ChevronDown, User, LogOut, Edit3, Lock } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";

import DashboarCards from '../ui/DashboarCards'

export default function Mainbar({ fname }) {
      const [dropdownOpen, setDropdownOpen] = useState(false);
        const dropdownRef = useRef(null);
        
            useEffect(() => {
              const handleClickOutside = (event) => {
                if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                  setDropdownOpen(false);
                }
              };
              document.addEventListener("mousedown", handleClickOutside);
              return () => document.removeEventListener("mousedown", handleClickOutside);
            }, []);
          
  return (
  <>   
  
  <main className="ml-72 p-6 w-full">
  <header className="flex justify-between items-center bg-white p-4 rounded-lg shadow">
    <h1 className="text-2xl font-bold text-gray-800">
      Welcome back, Mr {fname}!
    </h1>

    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-2 bg-white p-2 rounded-full shadow hover:shadow-md transition"
      >
        <img
          src="https://ui-avatars.com/api/?name=Admin"
          alt="Admin Avatar"
          className="w-10 h-10 rounded-full"
        />
        <ChevronDown className="w-4 h-4 text-gray-600" />
      </button>

      {dropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-md z-50">
          <ul className="text-gray-700">
            <li className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2 cursor-pointer">
              <User size={16} /> View Profile
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2 cursor-pointer">
              <Edit3 size={16} /> Edit Profile
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2 cursor-pointer">
              <Lock size={16} /> Change Password
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2 text-red-500 cursor-pointer">
              <LogOut size={16} /> Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  </header>

  <DashboarCards />
</main>
     
      </>
  )
}
