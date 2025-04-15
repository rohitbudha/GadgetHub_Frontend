import { useEffect, useState } from "react";
import CryptoJS from "crypto-js";
import { v4 as uuidv4 } from "uuid";
import { useCart } from '../Cart/CartContext';

const CheckoutForm = () => {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  const subtotal = cartItems.reduce((acc, product) => {
    const numericPrice = parseFloat(product.price?.toString().replace(/[^0-9.]/g, '')) || 0;
    return acc + numericPrice * (product.quantity || 1);
  }, 0);

  const shippingCost = 100;
  const total = subtotal + shippingCost;

  const [formData, setFormData] = useState({
    amount: subtotal.toFixed(2),
    tax_amount: "0",
    total_amount: total.toFixed(2),
    transaction_uuid: uuidv4(),
    product_service_charge: "0",
    product_delivery_charge: shippingCost.toString(),
    product_code: "EPAYTEST",
    success_url: "http://localhost:3000/paymentsuccess",  
    failure_url: "http://localhost:3000/paymentfailure",
    signed_field_names: "total_amount,transaction_uuid,product_code",
    signature: "",
    secret: "8gBm/:&EnhH.1/q",

    email: "",
    phone: "",
    firstName: "",
    lastName: "",
    address: "",
    landmark: "",
    paymentMethod: "cod",
  });

  const generateSignature = (total_amount, transaction_uuid, product_code, secret) => {
    const hashString = `total_amount=${total_amount},transaction_uuid=${transaction_uuid},product_code=${product_code}`;
    const hash = CryptoJS.HmacSHA256(hashString, secret);
    return CryptoJS.enc.Base64.stringify(hash);
  };

  useEffect(() => {
    const newSubtotal = cartItems.reduce((acc, product) => {
      const numericPrice = parseFloat(product.price?.toString().replace(/[^0-9.]/g, '')) || 0;
      return acc + numericPrice * (product.quantity || 1);
    }, 0);

    const newShipping = 100;
    const newTotal = newSubtotal + newShipping;

    setFormData(prev => ({
      ...prev,
      amount: newSubtotal.toFixed(2),
      total_amount: newTotal.toFixed(2),
      product_delivery_charge: newShipping.toString(),
    }));
  }, [cartItems]);

  useEffect(() => {
    const { total_amount, transaction_uuid, product_code, secret } = formData;
    const signature = generateSignature(total_amount, transaction_uuid, product_code, secret);
    setFormData(prev => ({ ...prev, signature }));
  }, [formData.total_amount, formData.transaction_uuid, formData.product_code]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
      ...(name === "amount" && { total_amount: value })
    }));
  };

  const handleConfirmOrder = () => {
    if (formData.paymentMethod === "wallet") {
      document.getElementById("esewa-form").submit();
    } else {
      alert("Order placed with Cash on Delivery!");
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-6">
        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">Email address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2"
            required
          />

          <label className="block text-sm font-medium text-gray-700">Phone No</label>
          <input
            type="number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2"
            required
          />
        </div>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">Shipping Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            className="border border-gray-300 rounded-md px-4 py-2"
          />
          <input
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className="border border-gray-300 rounded-md px-4 py-2"
          />
          <input
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address (Municipality-Wardno,City,District)"
            className="md:col-span-2 border border-gray-300 rounded-md px-4 py-2"
          />
          <input
            name="landmark"
            value={formData.landmark}
            onChange={handleChange}
            placeholder="Landmark (e.g. temple, street, etc.)"
            className="md:col-span-2 border border-gray-300 rounded-md px-4 py-2"
          />
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Payment Method</h2>
          <div className="space-y-2">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="paymentMethod"
                value="cod"
                checked={formData.paymentMethod === "cod"}
                onChange={handleChange}
              />
              Cash on Delivery
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="paymentMethod"
                value="wallet"
                checked={formData.paymentMethod === "wallet"}
                onChange={handleChange}
              />
              Pay with Wallet
            </label>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Order Summary</h1>
        <ul role="list" className="divide-y divide-gray-200">
          {cartItems.map((product) => (
            <li key={product.id} className="flex py-6">
              <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                <img src={product.image} alt={product.name} className="h-full w-full object-cover object-center" />
              </div>
              <div className="ml-4 flex flex-1 flex-col justify-between">
                <div>
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <h3>{product.name}</h3>
                    <p>Rs{(parseFloat(product.price.replace(/[^0-9.]/g, '')) * product.quantity).toFixed(2)}</p>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                </div>
                <div className="flex items-center justify-between text-sm mt-3">
                  <div className="flex items-center">
                    <button onClick={() => decreaseQuantity(product.id)} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-l-md">-</button>
                    <p className="mx-2 text-gray-500">Qty: {product.quantity}</p>
                    <button onClick={() => increaseQuantity(product.id)} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-r-md">+</button>
                  </div>
                  <button onClick={() => removeFromCart(product.id)} className="text-indigo-600 hover:text-indigo-500 font-medium">Remove</button>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-8 border-t border-gray-200 pt-6 text-base font-medium text-gray-900 flex justify-between">
          <span>Subtotal</span>
          <span>Rs{subtotal.toFixed(2)}</span>
        </div>
        <div className="mt-2 text-base font-medium text-gray-900 flex justify-between">
          <span>Delivery Charge</span>
          <span>Rs{shippingCost.toFixed(2)}</span>
        </div>
        <div className="mt-2 text-base font-bold text-gray-900 flex justify-between">
          <span>Total</span>
          <span>Rs{total.toFixed(2)}</span>
        </div>

        <div className="mt-6">
          <button
            onClick={handleConfirmOrder}
            className="w-full text-center bg-indigo-600 text-white px-6 py-3 rounded-md text-base font-medium hover:bg-indigo-700"
          >
            Confirm Order
          </button>
        </div>
      </div>

      <form id="esewa-form" action="https://rc-epay.esewa.com.np/api/epay/main/v2/form" method="POST" >
        <input type="hidden" name="amount" value={formData.amount} />
        <input type="hidden" name="tax_amount" value={formData.tax_amount} />
        <input type="hidden" name="total_amount" value={formData.total_amount} />
        <input type="hidden" name="transaction_uuid" value={formData.transaction_uuid} />
        <input type="hidden" name="product_code" value={formData.product_code} />
        <input type="hidden" name="product_service_charge" value={formData.product_service_charge} />
        <input type="hidden" name="product_delivery_charge" value={formData.product_delivery_charge} />
        <input type="hidden" name="success_url" value={formData.success_url} />
        <input type="hidden" name="failure_url" value={formData.failure_url} />
        <input type="hidden" name="signed_field_names" value={formData.signed_field_names} />
        <input type="hidden" name="signature" value={formData.signature} />
      </form>
    </div>
  );
};

export default CheckoutForm;
