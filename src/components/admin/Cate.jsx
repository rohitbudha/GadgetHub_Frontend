// import React ,{ useRef } from 'react';
// import { ChevronLeft, ChevronRight } from "lucide-react";
// const categories = [
//     {
//       "id": 2,
//       "name": "Speaker",
//       "description": "High-performance laptops for work, study, and gaming.",
//       "image": "https://res.cloudinary.com/dgcgqy5as/image/upload/v1745243047/35059169_n4xncx.jpg"
//   },
//   {
//       "id": 3,
//       "name": "SmartWatch",
//       "description": "new watch",
//       "image": "https://res.cloudinary.com/dgcgqy5as/image/upload/v1744019893/ks0ucx36bjvvhoc7dmma.webp"
//   },
//   {
//       "id": 4,
//       "name": "Headphones",
//       "description": "Premium headphones for deep bass and crystal-clear audio.",
//       "image": "https://res.cloudinary.com/dgcgqy5as/image/upload/v1745243743/images_1_ciuipc.jpg"
//   },
//   {
//       "id": 5,
//       "name": "earbud",
//       "description": "new earbud",
//       "image": "https://res.cloudinary.com/dgcgqy5as/image/upload/v1744003762/wdfso2jfodi8ozs7gwbs.webp"
//   },
//   {
//       "id": 7,
//       "name": "VR Box",
//       "description": "Wireless and noise-cancelling earbuds for immersive sound.",
//       "image": "https://res.cloudinary.com/dgcgqy5as/image/upload/v1745243023/vr_vsdyre.jpg"
//   },
//   {
//       "id": 8,
//       "name": "Photography",
//       "description": "Latest smartphones with cutting-edge features and design.",
//       "image": "https://res.cloudinary.com/dgcgqy5as/image/upload/v1745243054/c1_wopwuf.png"
//   },
//   {
//     "id": 9,
//     "name": "Band",
//     "description": "Latest smartphones with cutting-edge features and design.",
//     "image": "https://res.cloudinary.com/dgcgqy5as/image/upload/v1745243050/band_vaubft.jpg"
// },
// {
//   "id": 10,
//   "name": "Smart Ring",
//   "description": "Latest smartphones with cutting-edge features and design.",
//   "image": "https://res.cloudinary.com/dgcgqy5as/image/upload/v1745243042/download_1_jw57vp.jpg"
// },
// {
//   "id": 10,
//   "name": "Neck Band",
//   "description": "Latest smartphones with cutting-edge features and design.",
//   "image": "https://res.cloudinary.com/dgcgqy5as/image/upload/v1745243839/neckband_mel7ih.webp"
// }
// ];



// const Cate = () => {

//   const scrollRef = useRef(null);

//   const scroll = (direction) => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({
//         left: direction === "left" ? -300 : 300,
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <div className="relative px-6 py-8">
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-2xl font-bold text-gray-900">Shop by Category</h2>
//         <a href="#" className="text-blue-600 font-medium hover:underline">
//           Browse all categories →
//         </a>
//       </div>

//       <button
//         onClick={() => scroll("left")}
//         className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10"
//       >
//         <ChevronLeft className="w-6 h-6 text-gray-600" />
//       </button>
//       <button
//         onClick={() => scroll("right")}
//         className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10"
//       >
//         <ChevronRight className="w-6 h-6 text-gray-600" />
//       </button>

//       <div
//         ref={scrollRef}
//         className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide scroll-smooth"
//       >
//         {categories.map((category, index) => (
//           <div
//             key={index}
//             className="flex-shrink-0 w-1/4 min-w-[250px] bg-gradient-to-b from-white to-gray-100 rounded-lg p-4 text-center shadow-md transform transition duration-300 hover:scale-105"
//             >
//             <img
//               src={category.image}
//               alt={category.name}
//               className="h-36 w-full object-contain mb-2"
//             />
//             <h3 className="text-lg font-semibold text-gray-800 mb-2">
//               {category.name}
//             </h3>
//             <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
//               Shop Now
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Cate;

import React, { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";

const Cate = () => {
  const scrollRef = useRef(null);
  const [categories, setCategories] = useState([]);

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
        if (!res.ok) {
          throw new Error("Failed to fetch categories");
        }
        return res.json();
      })
      .then((data) => setCategories(data))
      .catch((err) => {
        console.error("Error fetching categories:", err);
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


// import React, { useRef, useEffect, useState } from 'react';
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const Cate = () => {
//   const scrollRef = useRef(null);
//   const [categories, setCategories] = useState([]);

//   const scroll = (direction) => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({
//         left: direction === "left" ? -300 : 300,
//         behavior: "smooth",
//       });
//     }
//   };

//   useEffect(() => {
//     fetch("http://localhost:8080/customers/category")
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error("Failed to fetch categories");
//         }
//         return res.json();
//       })
//       .then((data) => setCategories(data))
//       .catch((err) => {
//         console.error("Error fetching categories:", err);
//       });
//   }, []);

//   return (
//     <div className="relative px-6 py-8">
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-2xl font-bold text-gray-900">Shop by Category</h2>
//         <a href="#" className="text-blue-600 font-medium hover:underline">
//           Browse all categories →
//         </a>
//       </div>

//       <button
//         onClick={() => scroll("left")}
//         className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10"
//       >
//         <ChevronLeft className="w-6 h-6 text-gray-600" />
//       </button>
//       <button
//         onClick={() => scroll("right")}
//         className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10"
//       >
//         <ChevronRight className="w-6 h-6 text-gray-600" />
//       </button>

//       <div
//         ref={scrollRef}
//         className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide scroll-smooth"
//       >
//         {categories.map((category) => (
//           <div
//             key={category.id}
//             className="flex-shrink-0 w-1/4 min-w-[250px] bg-gradient-to-b from-white to-gray-100 rounded-lg p-4 text-center shadow-md transform transition duration-300 hover:scale-105"
//           >
//             <img
//               src={category.image}
//               alt={category.name}
//               className="h-36 w-full object-contain mb-2"
//             />
//             <h3 className="text-lg font-semibold text-gray-800 mb-2">
//               {category.name}
//             </h3>
//             <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
//               Shop Now
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Cate;

