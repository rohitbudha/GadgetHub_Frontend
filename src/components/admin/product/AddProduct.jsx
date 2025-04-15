import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddProduct = () => {
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    price: '',
    image: null
  });

  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch categories from backend
    axios.get('http://localhost:8080/admin/category')
      .then((res) => setCategories(res.data))
      .catch((err) => console.error('Error fetching categories:', err));
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    try {
      const res = await axios.post('http://localhost:8080/admin/addProduct', data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setMessage('Product added successfully!');
    } catch (err) {
      console.error('Failed to add product', err);
      setMessage('Failed to add product.');
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="bg-blue-600 text-white px-6 py-4">
          <h4 className="text-lg font-semibold">Add Product</h4>
        </div>
        <div className="p-6">
          {message && (
            <p className="text-green-600 font-bold mb-4">{message}</p>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="productName" className="block font-medium mb-1">Product Name</label>
              <input
                type="text"
                name="name"
                id="productName"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="description" className="block font-medium mb-1">Description</label>
              <textarea
                name="description"
                id="description"
                rows="3"
                value={formData.description}
                onChange={handleChange}
                required
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="category" className="block font-medium mb-1">Product Category</label>
              <select
                name="category"
                id="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
              >
                <option value="" disabled>--select--</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>{category.name}</option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="productPrice" className="block font-medium mb-1">Price</label>
              <input
                type="number"
                name="price"
                id="productPrice"
                value={formData.price}
                onChange={handleChange}
                required
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="file" className="block font-medium mb-1">Product Image</label>
              <input
                type="file"
                name="image"
                id="file"
                accept="image/*"
                onChange={handleChange}
                required
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
            >
              Add Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
