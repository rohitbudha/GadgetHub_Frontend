
// const CategoryList = () => {
//     const categories = [
//       {
//         id: 1,
//         name: 'Earbuds',
//         description: 'Latest gadgets and electronic devices.',
//         imageUrl: 'https://res.cloudinary.com/dgcgqy5as/image/upload/v1744021023/xt9yu3rxuzpmmueg8h9m.webp',
//       },
//       {
//         id: 2,
//         name: 'Laptops',
//         description: 'Stylish and comfortable furniture for your home.',
//         imageUrl: 'https://res.cloudinary.com/dgcgqy5as/image/upload/v1744037287/lcbh3iqglwjfycv9h9cf.webp',
//       },
//       {
//         id: 3,
//         name: 'Smartphones',
//         description: 'Trendy clothing and accessories for all.',
//         imageUrl: 'https://res.cloudinary.com/dgcgqy5as/image/upload/v1743943556/uxbqtspsw1varpabqduh.webp',
//       },
//       {
//         id: 4,
//         name: 'Headphones',
//         description: 'A wide range of books for all ages.',
//         imageUrl: 'https://res.cloudinary.com/dgcgqy5as/image/upload/v1744037014/swbfmc9xan78gte6ccbv.webp',
//       },
//     ];
  
//     return (
//       <div className="ml-72 p-6 w-full">
//         <h2 className="text-2xl font-semibold mb-4">Category List</h2>
//         <table className="table-auto w-full border border-gray-300">
//           <thead className="bg-gray-200">
//             <tr>
//               <th className="px-4 py-2">S.N</th>
//               <th className="px-4 py-2">Name</th>
//               <th className="px-4 py-2">Description</th>
//               <th className="px-4 py-2">Image</th>
//               <th className="px-4 py-2">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {categories.map((cat, index) => (
//               <tr key={cat.id}>
//                 <td className="border px-4 py-2">{index + 1}</td>
//                 <td className="border px-4 py-2">{cat.name}</td>
//                 <td className="border px-4 py-2">{cat.description}</td>
//                 <td className="border px-4 py-2">
//                   <img src={cat.imageUrl} alt={cat.name} className="w-24 h-16 object-cover" />
//                 </td>
//                 <td className="border px-4 py-2 whitespace-nowrap space-x-2">
//                   <a href="#" className="text-blue-500 hover:underline">Edit</a>
//                   <a href="#" className="text-red-500 hover:underline">Delete</a>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     );
//   };
  
//   export default CategoryList;


// import { useEffect, useState } from 'react';

// const CategoryList = () => {
//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch('http://localhost:8080/customers/category') 
//       .then((response) => {
//         if (!response.ok) throw new Error('Failed to fetch categories');
//         return response.json();
//       })
//       .then((data) => {
//         setCategories(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error('Error fetching categories:', error);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <div className="ml-72 p-6 w-full">
//       <h2 className="text-2xl font-semibold mb-4">Category List</h2>

//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <table className="table-auto w-full border border-gray-300">
//           <thead className="bg-gray-200">
//             <tr>
//               <th className="px-4 py-2">S.N</th>
//               <th className="px-4 py-2">Name</th>
//               <th className="px-4 py-2">Description</th>
//               <th className="px-4 py-2">Image</th>
//               <th className="px-4 py-2">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {categories.map((cat, index) => (
//               <tr key={cat.id}>
//                 <td className="border px-4 py-2">{index + 1}</td>
//                 <td className="border px-4 py-2">{cat.name}</td>
//                 <td className="border px-4 py-2">{cat.description}</td>
//                 <td className="border px-4 py-2">
//                   <img src={cat.image} alt={cat.name} className="w-24 h-16 object-cover" />
//                 </td>
//                 <td className="border px-4 py-2 whitespace-nowrap space-x-2">
//                   <a href="#" className="text-blue-500 hover:underline">Edit</a>
//                   <a href="#" className="text-red-500 hover:underline">Delete</a>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default CategoryList;

// import React, { useState, useRef, useEffect } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export default function CategoryList() {
//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const [image, setImage] = useState(null);
//   const [categories, setCategories] = useState([]);

  
//   const [editId, setEditId] = useState(null);

//   const imageInputRef = useRef();

//   const fetchCategories = async () => {
//     try {
//       const res = await fetch("http://localhost:8080/customers/category");
//       const data = await res.json();
//       setCategories(data);
//     } catch (err) {
//       toast.error("Failed to load categories");
//     }
//   };

//   useEffect(() => {
//     fetchCategories();
//   }, []);

//   const uploadToCloudinary = async () => {
//     const data = new FormData();
//     data.append("file", image);
//     data.append("upload_preset", "first_upload");
//     data.append("cloud_name", "dgcgqy5as");

//     const res = await fetch("https://api.cloudinary.com/v1_1/dgcgqy5as/image/upload", {
//       method: "POST",
//       body: data,
//     });

//     const result = await res.json();
//     return result.secure_url;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const imageUrl = image ? await uploadToCloudinary() : null;

//       const category = {
//         name,
//         description,
//         image: imageUrl || undefined,
//       };

//       const url = editId
//         ? `http://localhost:8080/customers/category/update/${editId}`
//         : "http://localhost:8080/customers/category/add";
//       const method = editId ? "PUT" : "POST";

//       const response = await fetch(url, {
//         method,
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(category),
//       });

//       if (response.ok) {
//         toast.success(editId ? "Category updated!" : "Category added!");
//         setName("");
//         setDescription("");
//         setImage(null);
//         imageInputRef.current.value = "";
//         setEditId(null);
//         fetchCategories();
//       } else {
//         const result = await response.json();
//         toast.warning(result.message || "Failed to submit category.");
//       }
//     } catch (error) {
//       console.error("error", error);
//       toast.error("An error occurred. Please try again.");
//     }
//   };

//   const handleEdit = (category) => {
//     setName(category.name);
//     setDescription(category.description);
//     setImage(null);
//     setEditId(category.id);
//   };

//   const handleDelete = (id) => {
//     toast(
//       ({ closeToast }) => (
//         <div>
//           <p>Are you sure you want to delete this category?</p>
//           <div className="mt-2 flex justify-end gap-2">
//             <button
//               className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
//               onClick={async () => {
//                 try {
//                   const res = await fetch(`http://localhost:8080/customers/category/delete/${id}`, {
//                     method: "DELETE",
//                   });
//                   if (res.ok) {
//                     toast.success("Category deleted.");
//                     fetchCategories();
//                   } else {
//                     toast.error("Failed to delete category.");
//                   }
//                 } catch (err) {
//                   toast.error("An error occurred.");
//                 }
//                 closeToast();
//               }}
//             >
//               Yes
//             </button>
//             <button
//               className="bg-gray-400 text-white px-3 py-1 rounded hover:bg-gray-500"
//               onClick={closeToast}
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       ),
//       {
//         position: "top-center",
//         autoClose: false,
//         closeOnClick: false,
//         closeButton: false,
//         draggable: false,
//       }
//     );
//   };
  

//   return (
//     <div className="max-w-4xl mx-auto mt-6 p-6 bg-white shadow rounded">
//       <ToastContainer />

//       <h2 className="text-xl font-bold mb-4">{editId ? "Edit Category" : "Add Category"}</h2>

//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label className="block mb-1 font-medium">Category Name</label>
//           <input
//             type="text"
//             className="w-full border p-2 rounded"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block mb-1 font-medium">Description</label>
//           <textarea
//             className="w-full border p-2 rounded"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             required
//           ></textarea>
//         </div>

//         <div className="mb-4">
//           <label className="block mb-1 font-medium">Category Image</label>
//           <input
//             type="file"
//             accept="image/*"
//             className="block w-full text-sm"
//             onChange={(e) => setImage(e.target.files[0])}
//             ref={imageInputRef}
//           />
//           {image && (
//             <img
//               src={URL.createObjectURL(image)}
//               alt="Preview"
//               className="w-32 h-32 object-cover mt-2 rounded"
//             />
//           )}
          
//         </div>

//         <button
//           type="submit"
//           className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
//         >
//           {editId ? "Update Category" : "Add Category"}
//         </button>
//       </form>

//       {/* Category List */}
//       <div className="mt-8">
//         <h3 className="text-lg font-semibold mb-4">Categories</h3>
//         <table className="w-full table-auto border border-gray-300">
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="border px-4 py-2">SN</th>
//               <th className="border px-4 py-2">Name</th>
//               <th className="border px-4 py-2">Description</th>
//               <th className="border px-4 py-2">Image</th>
//               <th className="border px-4 py-2">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {categories.map((cat, index) => (
//               <tr key={cat.id}>
//                 <td className="border px-4 py-2 text-center">{index + 1}</td>
//                 <td className="border px-4 py-2">{cat.name}</td>
//                 <td className="border px-4 py-2">{cat.description}</td>
//                 <td className="border px-4 py-2">
//                   <img
//                     src={cat.image}
//                     alt={cat.name}
//                     className="w-16 h-16 object-cover rounded"
//                   />
//                 </td>
//                 <td className="border px-4 py-2 whitespace-nowrap space-x-2">
//                   <button
//                     onClick={() => handleEdit(cat)}
//                     className="bg-blue-500 text-white px-3 py-1 rounded mr-2 hover:bg-blue-600"
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => handleDelete(cat.id)}
//                     className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//             {categories.length === 0 && (
//               <tr>
//                 <td colSpan="5" className="text-center py-4">
//                   No categories found.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }



import React, { useState, useRef, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CategoryList() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [categories, setCategories] = useState([]);
  const [editId, setEditId] = useState(null);
  const [existingImageUrl, setExistingImageUrl] = useState("");

  const imageInputRef = useRef();

  const fetchCategories = async () => {
    try {
      const res = await fetch("http://localhost:8080/customers/category");
      const data = await res.json();
      setCategories(data);
    } catch (err) {
      toast.error("Failed to load categories");
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const uploadToCloudinary = async () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "first_upload");
    data.append("cloud_name", "dgcgqy5as");

    const res = await fetch("https://api.cloudinary.com/v1_1/dgcgqy5as/image/upload", {
      method: "POST",
      body: data,
    });

    const result = await res.json();
    return result.secure_url;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let imageUrl = existingImageUrl;

      if (image) {
        imageUrl = await uploadToCloudinary();
      }

      const category = {
        id: editId,
        name,
        description,
        image: imageUrl,
      };

      const url = editId
        ? `http://localhost:8080/customers/category/update/${editId}`
        : "http://localhost:8080/customers/category/add";
      const method = editId ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(category),
      });

      if (response.ok) {
        toast.success(editId ? "Category updated!" : "Category added!");
        resetForm();
        fetchCategories();
      } else {
        const result = await response.json();
        toast.warning(result.message || "Failed to submit category.");
      }
    } catch (error) {
      console.error("error", error);
      toast.error("An error occurred. Please try again.");
    }
  };

  const handleEdit = (category) => {
    setName(category.name);
    setDescription(category.description);
    setImage(null);
    setExistingImageUrl(category.image);
    setImagePreview(null);
    setEditId(category.id);
    imageInputRef.current.value = null;
  };

  const handleDelete = (id) => {
    toast(
      ({ closeToast }) => (
        <div>
          <p>Are you sure you want to delete this category?</p>
          <div className="mt-2 flex justify-end gap-2">
            <button
              className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
              onClick={async () => {
                try {
                  const res = await fetch(`http://localhost:8080/customers/category/delete/${id}`, {
                    method: "DELETE",
                  });
                  if (res.ok) {
                    toast.success("Category deleted.");
                    fetchCategories();
                  } else {
                    toast.error("Failed to delete category.");
                  }
                } catch (err) {
                  toast.error("An error occurred.");
                }
                closeToast();
              }}
            >
              Yes
            </button>
            <button
              className="bg-gray-400 text-white px-3 py-1 rounded hover:bg-gray-500"
              onClick={closeToast}
            >
              Cancel
            </button>
          </div>
        </div>
      ),
      {
        position: "top-center",
        autoClose: false,
        closeOnClick: false,
        closeButton: false,
        draggable: false,
      }
    );
  };

  const resetForm = () => {
    setName("");
    setDescription("");
    setImage(null);
    setImagePreview(null);
    setEditId(null);
    setExistingImageUrl("");
    imageInputRef.current.value = "";
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(file ? URL.createObjectURL(file) : null);
  };

  return (
    <div className="max-w-4xl mx-auto mt-6 p-6 bg-white shadow rounded">
      <ToastContainer />

      <h2 className="text-xl font-bold mb-4">{editId ? "Edit Category" : "Add Category"}</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Category Name</label>
          <input
            type="text"
            className="w-full border p-2 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            className="w-full border p-2 rounded"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Category Image</label>
          <input
            type="file"
            accept="image/*"
            className="block w-full text-sm"
            onChange={handleImageChange}
            ref={imageInputRef}
          />
          {(imagePreview || existingImageUrl) && (
            <img
              src={imagePreview || existingImageUrl}
              alt="Preview"
              className="w-32 h-32 object-cover mt-2 rounded"
            />
          )}
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          {editId ? "Update Category" : "Add Category"}
        </button>
      </form>

      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">Categories</h3>
        <table className="w-full table-auto border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2">SN</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Description</th>
              <th className="border px-4 py-2">Image</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((cat, index) => (
              <tr key={cat.id}>
                <td className="border px-4 py-2 text-center">{index + 1}</td>
                <td className="border px-4 py-2">{cat.name}</td>
                <td className="border px-4 py-2">{cat.description}</td>
                <td className="border px-4 py-2">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td className="border px-4 py-2 whitespace-nowrap space-x-2">
                  <button
                    onClick={() => handleEdit(cat)}
                    className="bg-blue-500 text-white px-3 py-1 rounded mr-2 hover:bg-blue-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(cat.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {categories.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center py-4">
                  No categories found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
