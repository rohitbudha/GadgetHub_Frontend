import { useCart } from './CartContext';
import { Link , useNavigate} from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();
  const navigate = useNavigate();

  // const subtotal = cartItems.reduce((total, product) => {
  //   const numericPrice = parseFloat(product.price.replace(/[^0-9.]/g, ''));
  //   return total + numericPrice * (product.quantity || 1);
  // }, 0);


    const subtotal = cartItems.reduce((total, product) => {
  let price = product.price;

  // If price is a string (e.g., "Rs1234"), extract the numeric part
  if (typeof price === 'string') {
    price = parseFloat(price.replace(/[^0-9.]/g, ''));
  }

  return total + price * (product.quantity || 1);
}, 0);

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto py-10 px-4 text-center">
        <h2 className="text-2xl font-bold">Your Cart is Empty</h2>
        <p className="text-lg mt-4">You have no items in your cart. Start shopping!</p>
      </div>
    );
  }
  const handleCheckout = () => {
    const fname = localStorage.getItem('fname'); 
  
    if (fname === 'Guest') {
      toast.error('You must be logged in to proceed!');
      setTimeout(() => navigate('/Login'), 2000);
    } else {
      
            navigate('/CheckoutForm');

    }
  };
  


//   return (
//     <div className="container mx-auto py-10 px-4">
//       <h2 className="text-2xl font-bold mb-6 text-center">Your Cart</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {cartItems.map((product) => (
//           <div
//             key={product.id}
//             className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition-transform duration-300"
//           >
//             <img
//               src={product.image}
//               alt={product.name}
//               className="w-full h-48 object-cover rounded mb-4"
//             />
//             <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
//             <div className="flex items-center gap-2 mb-2">
//               <span className="text-blue-600 font-bold text-xl">{product.price}</span>
//             </div>
//             <button
//               onClick={() => removeFromCart(product.id)}
//               className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded transition duration-300"
//             >
//               Remove from Cart
//             </button>
//           </div>
//         ))}
//       </div>

//       <div className="mt-6 text-center">
//         <h3 className="text-xl font-semibold">Total: ${cartItems.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2)}</h3>
//       </div>
//     </div>
//   );
// };

return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Your Shopping Cart</h1>

      <ul role="list" className="divide-y divide-gray-200">
        {cartItems.map((product) => (
          <li key={product.id} className="flex py-6">
            <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="ml-4 flex flex-1 flex-col justify-between">
              <div>
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <h3>{product.name}</h3>
                  {/* <p>Rs{(parseFloat(product.price.replace(/[^0-9.]/g, '')) * product.quantity).toFixed(2)}</p> */}
                  <p>
  Rs{(
    (typeof product.price === 'string'
      ? parseFloat(product.price.replace(/[^0-9.]/g, ''))
      : product.price) * product.quantity
  ).toFixed(2)}
</p>

                </div>
                <p className="mt-1 text-sm text-gray-500">{product.category}</p>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center justify-between text-sm mt-3">
                <div className="flex items-center">
                  <button
                    onClick={() => decreaseQuantity(product.id)}
                    className="bg-gray-200 text-gray-700 px-2 py-1 rounded-l-md"
                  >
                    -
                  </button>
                  <p className="mx-2 text-gray-500">Qty: {product.quantity}</p>
                  <button
                    onClick={() => increaseQuantity(product.id)}
                    className="bg-gray-200 text-gray-700 px-2 py-1 rounded-r-md"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => removeFromCart(product.id)}
                  className="text-indigo-600 hover:text-indigo-500 font-medium"
                >
                  Remove
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* Subtotal */}
      <div className="mt-8 border-t border-gray-200 pt-6 text-base font-medium text-gray-900 flex justify-between">
        <span>Subtotal</span>
        <span>Rs{subtotal.toFixed(2)}</span>
      </div>

      {/* Proceed to Checkout */}
      {/* <div className="mt-6">
        <Link
      to="/CheckoutForm"
          className="inline-block w-full text-center bg-indigo-600 text-white px-6 py-3 rounded-md text-base font-medium hover:bg-indigo-700"
        >
          Proceed to Checkout
        </Link>
      </div> */}
       <div className="mt-6">
        <button
          onClick={handleCheckout}
          className="inline-block w-full text-center bg-indigo-600 text-white px-6 py-3 rounded-md text-base font-medium hover:bg-indigo-700"
        >
          Proceed to Checkout
        </button>
      </div>

      {/* Continue Shopping Button */}
      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
        <p>
          or{' '}
      

<Link to="/">
  <button
    type="button"
    className="font-medium text-indigo-600 hover:text-indigo-500"
  >
    Continue Shopping
    <span aria-hidden="true"> &rarr;</span>
  </button>
</Link>

        </p>
      </div>
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

export default Cart;
