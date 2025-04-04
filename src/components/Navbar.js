// import React from 'react';
// import {Link} from 'react-router-dom';

// export default function Navbar() {  
//   return (
//     <>  
//      <nav className="navbar navbar-expand-lg navbar-light bg-light">
//   <a className="navbar-brand" href="#">GadgetHub</a>
//   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//     <span className="navbar-toggler-icon"></span>
//   </button>

//   <div className="collapse navbar-collapse" id="navbarSupportedContent">
//     <ul className="navbar-nav mr-auto">
//       {/* <li className="nav-item active">
//         <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
//       </li>
//       <li className="nav-item active">
//         <a className="nav-link" href="#">About Us <span className="sr-only">(current)</span></a>
//       </li> */}
//       <li className="nav-item active">
//       <Link className="nav-link"  to="/">Home</Link>
//       </li>
//       <li className="nav-item active">
//         <Link  className="nav-link" to="/Register">Register</Link>
//         {/* <a className="nav-link" href="#">Register</a> */}
//       </li>
//       <li className="nav-item">
//       <Link className="nav-link" to="/Login">Login</Link>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="#">About Us</a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="#">Contact Us</a>
//       </li>
//       <li className="nav-item dropdown">
//         <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//           Dropdown
//         </a>
//         <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//           <a className="dropdown-item" href="#">Action</a>
//           <a className="dropdown-item" href="#">Another action</a>
//           <div className="dropdown-divider"></div>
//           <a className="dropdown-item" href="#">Something else here</a>
//         </div>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link disabled" href="#">Disabled</a>
//       </li>
//     </ul>
//     <form className="form-inline my-2 my-lg-0">
//       <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
//       <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//     </form>
//   </div>
// </nav>
//     </>
//   );
// }

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex items-center justify-between">
        <a href="#" className="text-xl font-bold text-gray-800">GadgetHub</a>
        <button
          className="text-gray-800 md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
        <div className={`md:flex items-center ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="md:flex md:space-x-6 space-y-2 md:space-y-0">
            <li>
              <Link className="text-gray-700 hover:text-blue-500" to="/">Home</Link>
            </li>
            <li>
              <Link className="text-gray-700 hover:text-blue-500" to="/Register">Register</Link>
            </li>
            <li>
              <Link className="text-gray-700 hover:text-blue-500" to="/Login">Login</Link>
            </li>
            <li>
              <a className="text-gray-700 hover:text-blue-500" href="#">About Us</a>
            </li>
            <li>
              <a className="text-gray-700 hover:text-blue-500" href="#">Contact Us</a>
            </li>
            {/* <li className="relative">
              <button className="text-gray-700 hover:text-blue-500 focus:outline-none">
                Dropdown ▾
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md hidden group-hover:block">
                <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100" href="#">Action</a>
                <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100" href="#">Another action</a>
                <div className="border-t my-1"></div>
                <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100" href="#">Something else here</a>
              </div>
            </li>
            <li>
              <a className="text-gray-400 cursor-not-allowed" href="#">Disabled</a>
            </li> */}
          </ul>
        </div>
        <form className="hidden md:flex items-center border rounded-md p-1">
          <input
            className="px-2 py-1 outline-none"
            type="search"
            placeholder="Search"
          />
          <button className="bg-indigo-500 text-white px-3 py-1 rounded-md">Search</button>
        </form>
      </div>
    </nav>
  );
}
