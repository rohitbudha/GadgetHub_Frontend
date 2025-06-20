import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { FiHeart } from "react-icons/fi";
import { CiShoppingCart } from "react-icons/ci";
import { toast } from "react-toastify";
import { CartContext } from "./Cart/CartContext";

export const ViewProductDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const product = location.state?.product;

  useEffect(() => {
    if (!product) {
      navigate("/", { replace: true });
    }
  }, [product, navigate]);

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  if (!product) return null;

  return (
    <section className="mt-20 mb-12 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="md:flex">
          {/* Image Section */}
          <div className="md:flex-shrink-0 bg-gray-100 flex justify-center items-center p-6">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="max-h-[450px] object-contain rounded-lg"
            />
          </div>

          {/* Details Section */}
          <div className="p-8 flex flex-1 space-x-8">
            {/* Left Column */}
            <div className="flex flex-col justify-center space-y-6 w-1/2">
              <h1 className="text-3xl font-extrabold text-blue-700">
                {product.name}
              </h1>
              <p className="text-gray-600 text-lg">
                <span className="font-semibold">Category:</span> {product.category}
              </p>
              <p className="text-gray-600 text-lg">
                <span className="font-semibold">Price:</span>{" "}
                <span className="text-green-600 text-xl font-bold">Rs. {product.price}</span>
              </p>
              <button
                onClick={() => navigate(-1)}
                className="self-start bg-blue-600 hover:bg-blue-700 hover:shadow-md text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
              >
                ← Back
              </button>
            </div>

            {/* Right Column */}
            <div className="w-1/2 flex flex-col justify-between">
              <p className="text-gray-700 text-base whitespace-pre-line mb-6">
                <span className="font-semibold">Description:</span> {product.description}
              </p>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => handleAddToCart(product)}
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 hover:shadow-md text-white font-semibold py-2 px-4 rounded transition duration-300"
                >
                  <CiShoppingCart size={20} /> Add to Cart
                </button>

                <Link
                  to="/wishlist"
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 hover:shadow-md text-white font-semibold py-2 px-4 rounded transition duration-300"
                  aria-label="Wishlist"
                >
                  <FiHeart size={20} /> Add to Wish list
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
