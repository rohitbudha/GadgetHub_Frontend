// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const EditProduct = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [categories, setCategories] = useState([]);
//   const [formData, setFormData] = useState({
//     name: '',
//     description: '',
//     category: '',
//     price: '',
//     image: null,
//     existingImageUrl: '',
//   });

//   // Fetch categories and existing product data
//   useEffect(() => {
//     axios.get('http://localhost:8080/customers/category')
//       .then(res => setCategories(res.data))
//       .catch(err => console.error('Error fetching categories:', err));

//     axios.get(`http://localhost:8080/customers/getproduct/${id}`)
//       .then(res => {
//         const product = res.data;
//         setFormData({
//           name: product.name,
//           description: product.description,
//           category: product.category.id,
//           price: product.price,
//           image: null,
//           existingImageUrl: product.imageUrl,
//         });
//       })
//       .catch(err => console.error('Error fetching product:', err));
//   }, [id]);

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: files ? files[0] : value,
//     }));
//   };

//   // Upload to Cloudinary
//   const uploadToCloudinary = async (image) => {
//     const data = new FormData();
//     data.append('file', image);
//     data.append('upload_preset', 'first_upload');
//     data.append('cloud_name', 'dgcgqy5as');

//     const res = await fetch('https://api.cloudinary.com/v1_1/dgcgqy5as/image/upload', {
//       method: 'POST',
//       body: data,
//     });

//     const result = await res.json();
//     return result.secure_url;
//   };

//   // Submit updated product
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       let imageUrl = formData.existingImageUrl;

//       // If user selected a new image
//       if (formData.image) {
//         imageUrl = await uploadToCloudinary(formData.image);
//       }

//       const updatedProduct = {
//         name: formData.name,
//         description: formData.description,
//         category: formData.category,
//         price: formData.price,
//         imageUrl: imageUrl,
//       };

//       await axios.put(`http://localhost:8080/customers/updateproduct/${id}`, updatedProduct, {
//         headers: { 'Content-Type': 'application/json' },
//       });

//       toast.success('✅ Product updated successfully!');
//       setTimeout(() => navigate('/admin/products'), 2000); // Optional redirect
//     } catch (err) {
//       console.error('Failed to update product', err);
//       toast.error('❌ Failed to update product.');
//     }
//   };

//   return (
//     <div className="max-w-3xl mx-auto mt-10">
//       <ToastContainer />
//       <div className="bg-white shadow-md rounded-lg overflow-hidden">
//         <div className="bg-yellow-500 text-white px-6 py-4">
//           <h4 className="text-lg font-semibold">Edit Product</h4>
//         </div>
//         <div className="p-6">
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label htmlFor="productName" className="block font-medium mb-1">Product Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 id="productName"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 className="w-full border rounded px-3 py-2"
//               />
//             </div>

//             <div className="mb-4">
//               <label htmlFor="description" className="block font-medium mb-1">Description</label>
//               <textarea
//                 name="description"
//                 id="description"
//                 rows="3"
//                 value={formData.description}
//                 onChange={handleChange}
//                 required
//                 className="w-full border rounded px-3 py-2"
//               />
//             </div>

//             <div className="mb-4">
//               <label htmlFor="category" className="block font-medium mb-1">Product Category</label>
//               <select
//                 name="category"
//                 id="category"
//                 value={formData.category}
//                 onChange={handleChange}
//                 required
//                 className="w-full border rounded px-3 py-2"
//               >
//                 <option value="" disabled>--select--</option>
//                 {categories.map((category) => (
//                   <option key={category.id} value={category.id}>{category.name}</option>
//                 ))}
//               </select>
//             </div>

//             <div className="mb-4">
//               <label htmlFor="productPrice" className="block font-medium mb-1">Price</label>
//               <input
//                 type="number"
//                 name="price"
//                 id="productPrice"
//                 value={formData.price}
//                 onChange={handleChange}
//                 required
//                 className="w-full border rounded px-3 py-2"
//               />
//             </div>

//             <div className="mb-4">
//               <label className="block font-medium mb-1">Current Image</label>
//               {formData.existingImageUrl && (
//                 <img src={formData.existingImageUrl} alt="Product" className="h-32 mb-2 rounded" />
//               )}
//               <label htmlFor="file" className="block font-medium mb-1">Change Image</label>
//               <input
//                 type="file"
//                 name="image"
//                 id="file"
//                 accept="image/*"
//                 onChange={handleChange}
//                 className="w-full border rounded px-3 py-2"
//               />
//             </div>

//             <button
//               type="submit"
//               className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
//             >
//               Update Product
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EditProduct;


// import React, { useState, useEffect, useRef } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const EditProduct = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const imageInputRef = useRef(null); // Reference for image input
//   const [categories, setCategories] = useState([]);
//   const [formData, setFormData] = useState({
//     name: '',
//     description: '',
//     category: '',
//     price: '',
//     image: null,
//     existingImageUrl: '',
//     imagePreview: null,
//     editId: null
//   });

//   // Fetch categories and existing product data
//   useEffect(() => {
//     // Fetching categories
//     axios.get('http://localhost:8080/customers/category')
//       .then(res => setCategories(res.data))
//       .catch(err => console.error('Error fetching categories:', err));

//     // Fetching existing product data
//     axios.get(`http://localhost:8080/customers/product/get/${id}`)
//       .then(res => {
//         handleEdit(res.data); // Using handleEdit to set form data
//       })
//       .catch(err => console.error('Error fetching product:', err));
//   }, [id]);

//   // Handle setting the form data
//   const handleEdit = (product) => {
//     console.log('Product to be set in state:', product);  // Log to check product data

//     setFormData({
//       name: product.name,
//       description: product.description,
//       category: product.category.id,
//       price: product.price,
//       image: null,
//       existingImageUrl: product.imageUrl,
//       imagePreview: product.imageUrl,
//       editId: product.id
//     });

//     // Reset the file input (optional)

//     imageInputRef.current.value = null;
//   };

//   // Handle input changes for form fields
//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: files ? files[0] : value,
//     }));

//     // Handle image preview if image is selected
//     if (name === 'image' && files) {
//       const file = files[0];
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setFormData((prev) => ({
//           ...prev,
//           imagePreview: reader.result,
//         }));
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   // Upload to Cloudinary
//   const uploadToCloudinary = async (image) => {
//     const data = new FormData();
//     data.append('file', image);
//     data.append('upload_preset', 'first_upload');
//     data.append('cloud_name', 'dgcgqy5as');

//     const res = await fetch('https://api.cloudinary.com/v1_1/dgcgqy5as/image/upload', {
//       method: 'POST',
//       body: data,
//     });

//     const result = await res.json();
//     return result.secure_url;
//   };

//   // Submit updated product
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       let imageUrl = formData.existingImageUrl;

//       // If user selected a new image
//       if (formData.image) {
//         imageUrl = await uploadToCloudinary(formData.image);
//       }

//       const updatedProduct = {
//         name: formData.name,
//         description: formData.description,
//         category: formData.category,
//         price: formData.price,
//         imageUrl: imageUrl,
//       };

//       await axios.put(`http://localhost:8080/product/update/${id}`, updatedProduct, {
//         headers: { 'Content-Type': 'application/json' },
//       });

//       toast.success('✅ Product updated successfully!');
//       setTimeout(() => navigate('/admin/products'), 2000); // Optional redirect
//     } catch (err) {
//       console.error('Failed to update product', err);
//       toast.error('❌ Failed to update product.');
//     }
//   };

//   return (
//     <div className="max-w-3xl mx-auto mt-10">
//       <ToastContainer />
//       <div className="bg-white shadow-md rounded-lg overflow-hidden">
//         <div className="bg-yellow-500 text-white px-6 py-4">
//           <h4 className="text-lg font-semibold">Edit Product</h4>
//         </div>
//         <div className="p-6">
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label htmlFor="productName" className="block font-medium mb-1">Product Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 id="productName"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 className="w-full border rounded px-3 py-2"
//               />
//             </div>

//             <div className="mb-4">
//               <label htmlFor="description" className="block font-medium mb-1">Description</label>
//               <textarea
//                 name="description"
//                 id="description"
//                 rows="3"
//                 value={formData.description}
//                 onChange={handleChange}
//                 required
//                 className="w-full border rounded px-3 py-2"
//               />
//             </div>

//             <div className="mb-4">
//               <label htmlFor="category" className="block font-medium mb-1">Product Category</label>
//               <select
//                 name="category"
//                 id="category"
//                 value={formData.category}
//                 onChange={handleChange}
//                 required
//                 className="w-full border rounded px-3 py-2"
//               >
//                 <option value="" disabled>--select--</option>
//                 {categories.map((category) => (
//                   <option key={category.id} value={category.id}>{category.name}</option>
//                 ))}
//               </select>
//             </div>

//             <div className="mb-4">
//               <label htmlFor="productPrice" className="block font-medium mb-1">Price</label>
//               <input
//                 type="number"
//                 name="price"
//                 id="productPrice"
//                 value={formData.price}
//                 onChange={handleChange}
//                 required
//                 className="w-full border rounded px-3 py-2"
//               />
//             </div>

//             <div className="mb-4">
//               <label className="block font-medium mb-1">Current Image</label>
//               {formData.existingImageUrl && (
//                 <img src={formData.existingImageUrl} alt="Product" className="h-32 mb-2 rounded" />
//               )}
//               <label htmlFor="file" className="block font-medium mb-1">Change Image</label>
//               <input
//                 type="file"
//                 name="image"
//                 id="file"
//                 accept="image/*"
//                 onChange={handleChange}
//                 ref={imageInputRef}
//                 className="w-full border rounded px-3 py-2"
//               />
//               {formData.imagePreview && (
//                 <img src={formData.imagePreview} alt="Preview" className="h-32 mt-2 rounded" />
//               )}
//             </div>

//             <button
//               type="submit"
//               className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
//             >
//               Update Product
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EditProduct;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const EditProduct = () => {
  const { id } = useParams();
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    price: '',
    imageUrl: '', // Change to imageUrl instead of image (URL will be used)
  });

  const [oldImageUrl, setOldImageUrl] = useState('');
  const [newImagePreview, setNewImagePreview] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch product details
    axios.get(`http://localhost:8080/customers/product/get/${id}`)
      .then(res => {
        console.log('Product ID:', id); // Log the product ID

        const product = res.data;
        setFormData({
          name: product.name,
          description: product.description,
          category: product.category?.id || '',
          price: product.price,
          imageUrl: product.imageUrl || '', // Set the imageUrl from the backend
        });

        setOldImageUrl(product.imageUrl);
      })
      .catch(err => console.error('Failed to fetch product data', err));

    // Fetch category list
    axios.get('http://localhost:8080/customers/category')
      .then(res => setCategories(res.data))
      .catch(err => console.error('Failed to fetch categories', err));
  }, [id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image' && files.length > 0) {
      const file = files[0];
      setFormData((prev) => ({ ...prev, imageUrl: URL.createObjectURL(file) }));
      setNewImagePreview(URL.createObjectURL(file));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the data to send to backend
    const data = {
      ...formData,  // Include all form data
      imageUrl: formData.imageUrl || oldImageUrl, // Ensure imageUrl is sent, either new or old
    };

    try {
      // Send only JSON (not FormData)
      await axios.put(`http://localhost:8080/customers/product/update/${id}`, data, {
        headers: { 'Content-Type': 'application/json' },
      });
      setMessage('Product updated successfully!');
    } catch (err) {
      console.error('Update failed', err);
      setMessage('Failed to update product.');
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="bg-blue-600 text-white px-6 py-4">
          <h4 className="text-lg font-semibold">Edit Product</h4>
        </div>
        <div className="p-6">
          {message && <p className="text-green-600 font-bold mb-4">{message}</p>}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block font-medium mb-1">Product Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
              />
            </div>

            <div className="mb-4">
              <label className="block font-medium mb-1">Description</label>
              <textarea
                name="description"
                rows="3"
                value={formData.description}
                onChange={handleChange}
                required
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
              />
            </div>

            <div className="mb-4">
              <label className="block font-medium mb-1">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
              >
                <option value="" disabled>--select--</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label className="block font-medium mb-1">Price</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
              />
            </div>

            <div className="mb-4">
              <label className="block font-medium mb-1">Product Image</label>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
              />
            </div>

            {/* Image Preview Section */}
            <div className="mb-4">
              <label className="block font-medium mb-1">Image Preview</label>
              <div className="flex gap-4">
                {oldImageUrl && !newImagePreview && (
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Old Image:</p>
                    <img src={oldImageUrl} alt="Old Product" className="h-24 rounded border" />
                  </div>
                )}
                {newImagePreview && (
                  <div>
                    <p className="text-sm text-gray-500 mb-1">New Image Preview:</p>
                    <img src={newImagePreview} alt="New Preview" className="h-24 rounded border" />
                  </div>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
            >
              Update Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;

