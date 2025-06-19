import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Category() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [msg, setMsg] = useState("");
  const [existingImageUrl, setExistingImageUrl] = useState(null);

  const imageInputRef = useRef();
  const { id } = useParams(); // Grab category id from route if editing
  const navigate = useNavigate();

  const isEdit = Boolean(id);

  // Load category data if in edit mode
  useEffect(() => {
    if (isEdit) {
      fetch(`http://localhost:8080/customers/category/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setName(data.name);
          setDescription(data.description);
          setExistingImageUrl(data.image);
        })
        .catch((err) => {
          console.error("Failed to load category:", err);
        });
    }
  }, [id]);

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
    setMsg("");

    try {
      let imageUrl = existingImageUrl;

      if (image) {
        imageUrl = await uploadToCloudinary();
      }

      const category = {
        name,
        description,
        image: imageUrl,
      };

      const response = await fetch(
        isEdit
          ? `http://localhost:8080/customers/category/update/${id}`
          : "http://localhost:8080/customers/category/add",
        {
          method: isEdit ? "PUT" : "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(category),
        }
      );

      if (response.ok) {
        setMsg(isEdit ? "Category updated successfully!" : "Category added successfully!");
        if (!isEdit) {
          setName("");
          setDescription("");
          setImage(null);
          setExistingImageUrl(null);
          imageInputRef.current.value = "";
        } else {
          navigate("/categories"); // redirect to list page if you have one
        }
      } else {
        const result = await response.json();
        setMsg(result.message || "Failed to submit category.");
      }
    } catch (error) {
      console.error("error", error);
      setMsg("An error occurred. Please try again.");
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-6 p-6 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">{isEdit ? "Edit Category" : "Add Category"}</h2>
      {msg && <p className="text-green-600 font-semibold mb-4">{msg}</p>}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1 font-medium">Category Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full border p-2 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block mb-1 font-medium">Description</label>
          <textarea
            id="description"
            name="description"
            className="w-full border p-2 rounded"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="image" className="block mb-1 font-medium">Category Image</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            className="block w-full text-sm"
            onChange={(e) => setImage(e.target.files[0])}
            ref={imageInputRef}
            // remove `required` in edit mode
            required={!isEdit}
          />
          {(image || existingImageUrl) && (
            <img
              src={image ? URL.createObjectURL(image) : existingImageUrl}
              alt="Preview"
              className="w-32 h-32 object-cover mt-2 rounded"
            />
          )}
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          {isEdit ? "Update Category" : "Add Category"}
        </button>
      </form>
    </div>
  );
}
