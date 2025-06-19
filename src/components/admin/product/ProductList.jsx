
// import React, { useEffect, useState } from 'react';

// function ProductList() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:8080/product/get')
//       .then((response) => response.json())
//       .then((data) => {
//         console.log('Fetched products:', data);
//         setProducts(data);
//       })
//       .catch((error) => console.error('Error fetching products:', error));
//   }, []);

//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       <h2 className="text-2xl font-bold mb-4">Product List</h2>
//       <div className="overflow-x-auto shadow rounded-lg">
//         <table className="min-w-full bg-white border border-gray-200 text-sm">
//           <thead>
//   <tr className="bg-gray-200">
//     <th className="px-4 py-2">S.N</th>
//     <th className="px-4 py-2">Name</th>
//     <th className="px-4 py-2">Category</th>
//     <th className="px-4 py-2">Price</th>
//     <th className="px-4 py-2">Description</th>
//     <th className="px-4 py-2">Image</th>
//   </tr>
// </thead>
// <tbody>
//   {products.length > 0 ? (
//     products.map((product, id) => (
//       <tr key={id} className="hover:bg-gray-50">
//         <td className="px-4 py-2 border-b">{product.id}</td>
//         <td className="px-4 py-2 border-b">{product.name}</td>
//         <td className="px-4 py-2 border-b">{product.category}</td>
//         <td className="px-4 py-2 border-b">Rs{product.price}</td>
//         <td className="px-4 py-2 border-b">{product.description}</td>
//         <td className="px-4 py-2 border-b">
//           <img
//             src={product.imageUrl}
//             alt={product.name}
//             className="w-16 h-16 object-cover rounded"
//           />
//         </td>
//       </tr>
//     ))
//   ) : (
//     <tr>
//       <td colSpan="6" className="text-center px-4 py-4 text-gray-500">
//         No products found.
//       </td>
//     </tr>
//   )}
// </tbody>

//         </table>
//       </div>
//     </div>
//   );
// }

// export default ProductList;


// import React, { useState, useEffect } from 'react';

// const ProductList = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 5;

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch('http://localhost:8080/customers/cget');
//         // const response = await fetch('http://localhost:8080/product/get');

//         if (!response.ok) throw new Error('Failed to fetch products');
//         const data = await response.json();
//         setProducts(data);
//         setLoading(false);
//       } catch (err) {
//         setError(err.message);
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);


//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);
//   const totalPages = Math.ceil(products.length / itemsPerPage);

//   return (
//     <div className="ml-72 p-6 w-full">
//       <h1 className="text-2xl font-bold mb-4">Product List</h1>

//       <table className="min-w-full table-auto border-collapse border border-gray-200">
//         <thead className="bg-gray-200">
//           <tr>
//             <th className="p-2 border-b border-gray-300 text-left">S.N</th>
//             <th className="p-2 border-b border-gray-300 text-left">Name</th>
//             <th className="p-2 border-b border-gray-300 text-left">Category</th>
//             <th className="p-2 border-b border-gray-300 text-left">Price</th>
//             <th className="p-2 border-b border-gray-300 text-left">Description</th>
//             <th className="p-2 border-b border-gray-300 text-left">Image</th>
//           </tr>
//         </thead>
//         <tbody>
//           {currentProducts.map((product, index) => (
//             <tr key={product.id} className="border-b border-gray-200">
//               <td className="p-2">{indexOfFirstItem + index + 1}</td>
//               <td className="p-2">{product.name}</td>
//               <td className="p-2">{product.category}</td>
//               <td className="p-2">Rs {product.price}</td>
//               <td className="p-2">{product.description}</td>
//               <td className="p-2">
//                 <img
//                   src={product.imageUrl}
//                   alt={product.name}
//                   className="w-16 h-16 object-cover rounded"
//                 />
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <div className="w-full flex justify-center mt-6">
//         <div className="flex gap-2">
//           <button
//             onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
//             disabled={currentPage === 1}
//             className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
//           >
//             Prev
//           </button>

//           {[...Array(totalPages)].map((_, i) => (
//             <button
//               key={i}
//               onClick={() => setCurrentPage(i + 1)}
//               className={`px-3 py-1 rounded ${
//                 currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-100'
//               }`}
//             >
//               {i + 1}
//             </button>
//           ))}

//           <button
//             onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
//             disabled={currentPage === totalPages}
//             className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductList;

// import React, { useState, useEffect } from 'react';

// const ProductList = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 5;

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch('http://localhost:8080/customers/cget');
//         // const response = await fetch('http://localhost:8080/product/get');

//         if (!response.ok) throw new Error('Failed to fetch products');
//         const data = await response.json();
//         setProducts(data);
//         setLoading(false);
//       } catch (err) {
//         setError(err.message);
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);


//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);
//   const totalPages = Math.ceil(products.length / itemsPerPage);

//   return (
//     <div className="ml-72 p-6 w-full">
//       <h1 className="text-2xl font-bold mb-4">Product List</h1>

//       <table className="min-w-full table-auto border-collapse border border-gray-200">
//         <thead className="bg-gray-200">
//           <tr>
//             <th className="p-2 border-b border-gray-300 text-left">S.N</th>
//             <th className="p-2 border-b border-gray-300 text-left">Name</th>
//             <th className="p-2 border-b border-gray-300 text-left">Category</th>
//             <th className="p-2 border-b border-gray-300 text-left">Price</th>
//             <th className="p-2 border-b border-gray-300 text-left">Description</th>
//             <th className="p-2 border-b border-gray-300 text-left">Image</th>
//           </tr>
//         </thead>
//         <tbody>
//           {currentProducts.map((product, index) => (
//             <tr key={product.id} className="border-b border-gray-200">
//               <td className="p-2">{indexOfFirstItem + index + 1}</td>
//               <td className="p-2">{product.name}</td>
//               <td className="p-2">{product.category}</td>
//               <td className="p-2">Rs {product.price}</td>
//               <td className="p-2">{product.description}</td>
//               <td className="p-2">
//                 <img
//                   src={product.imageUrl}
//                   alt={product.name}
//                   className="w-16 h-16 object-cover rounded"
//                 />
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <div className="w-full flex justify-center mt-6">
//         <div className="flex gap-2">
//           <button
//             onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
//             disabled={currentPage === 1}
//             className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
//           >
//             Prev
//           </button>

//           {[...Array(totalPages)].map((_, i) => (
//             <button
//               key={i}
//               onClick={() => setCurrentPage(i + 1)}
//               className={`px-3 py-1 rounded ${
//                 currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-100'
//               }`}
//             >
//               {i + 1}
//             </button>
//           ))}

//           <button
//             onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
//             disabled={currentPage === totalPages}
//             className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductList;


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:8080/customers/cget');
        if (!response.ok) throw new Error('Failed to fetch products');
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/EditProduct/${id}`);
  };
  

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this product?')) return;

    try {
      const res = await fetch(`http://localhost:8080/customers/Product/delete/${id}`, {
        method: 'DELETE',
      });
      if (!res.ok) throw new Error('Delete failed');
      setProducts(products.filter(product => product.id !== id));
    } catch (err) {
      alert('Error deleting product: ' + err.message);
    }
  };

  const handleAddToSale = (id) => {
    alert(`Add product with ID ${id} to sale`);
    // You can integrate actual API call here
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(products.length / itemsPerPage);

  return (
    <div className="ml-72 p-6 w-full">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>

      <table className="min-w-full table-auto border-collapse border border-gray-200">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 border-b border-gray-300 text-left">S.N</th>
            <th className="p-2 border-b border-gray-300 text-left">Name</th>
            <th className="p-2 border-b border-gray-300 text-left">Category</th>
            <th className="p-2 border-b border-gray-300 text-left">Price</th>
            <th className="p-2 border-b border-gray-300 text-left">Description</th>
            <th className="p-2 border-b border-gray-300 text-left">Image</th>
            <th className="p-2 border-b border-gray-300 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentProducts.map((product, index) => (
            <tr key={product.id} className="border-b border-gray-200">
              <td className="p-2">{indexOfFirstItem + index + 1}</td>
              <td className="p-2">{product.name}</td>
              <td className="p-2">{product.category}</td>
              <td className="p-2">Rs {product.price}</td>
              <td className="p-2">{product.description}</td>
              <td className="p-2">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-16 h-16 object-cover rounded"
                />
              </td>
              <td className="p-2 space-x-2">
                <button
                  onClick={() => handleEdit(product.id)}
                  className="bg-blue-500 text-white px-3 py-1 rounded mr-2 hover:bg-blue-600"
                  >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(product.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleAddToSale(product.id)}
                  className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded"
                >
                  Add to Sale
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="w-full flex justify-center mt-6">
        <div className="flex gap-2">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-100'
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
