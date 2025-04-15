
import React, { useEffect, useState } from 'react';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/product/get')
      .then((response) => response.json())
      .then((data) => {
        console.log('Fetched products:', data);
        setProducts(data);
      })
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Product List</h2>
      <div className="overflow-x-auto shadow rounded-lg">
        <table className="min-w-full bg-white border border-gray-200 text-sm">
          <thead>
  <tr className="bg-gray-200">
    <th className="px-4 py-2">S.N</th>
    <th className="px-4 py-2">Name</th>
    <th className="px-4 py-2">Category</th>
    <th className="px-4 py-2">Price</th>
    <th className="px-4 py-2">Description</th>
    <th className="px-4 py-2">Image</th>
  </tr>
</thead>
<tbody>
  {products.length > 0 ? (
    products.map((product, id) => (
      <tr key={id} className="hover:bg-gray-50">
        <td className="px-4 py-2 border-b">{product.id}</td>
        <td className="px-4 py-2 border-b">{product.name}</td>
        <td className="px-4 py-2 border-b">{product.category}</td>
        <td className="px-4 py-2 border-b">Rs{product.price}</td>
        <td className="px-4 py-2 border-b">{product.description}</td>
        <td className="px-4 py-2 border-b">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-16 h-16 object-cover rounded"
          />
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="6" className="text-center px-4 py-4 text-gray-500">
        No products found.
      </td>
    </tr>
  )}
</tbody>

        </table>
      </div>
    </div>
  );
}

export default ProductList;
