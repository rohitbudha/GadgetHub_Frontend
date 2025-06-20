import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useRef } from 'react';
import AdminDashboard from './components/admin/AdminDashboard';
import Cate from './components/admin/Cate';
import Category from './components/admin/Category';
import CategoryList from './components/admin/CategoryList';
import CustomerList from './components/admin/CustomerList';
import Mainbar from './components/admin/Mainbar';
import Sidebar from './components/admin/Sidebar';
import Carousel from './components/Carousel';
import CustomerDashboard from './components/CustomerDashboard';
import Footer from './components/Footer';
import Login from './components/Login';
import Navbar from './components/Navbar';
import ProductList from './components/admin/product/ProductList';
import Register from './components/Register';
import HomeProductList from './components/HomeProductList';
import Cart from './components/Cart/Cart';
import CheckoutForm from './components/Checkout/CheckoutForm';
import PaymentFailure from './components/Payment/PaymentFailure';
import Home from './components/Home';
import AddProduct from './components/admin/product/AddProduct';
import EditProduct from './components/admin/product/EditProduct';
import { ViewProductDetails } from './components/ViewProductDetails';

function App() {
  const products = [
    {
      id: 1,
      image: "/imgs/product_img/p1.png",
      category: "Laptops",
      name: "MacBook Pro",
      price: "Rs 125000.00",
      oldPrice: "Rs 150000",
      discount: "-30%",
      rating: 5,
    },
    {
      id: 2,
      image: "/imgs/product_img/p3.webp",
      category: "Headphones",
      name: "Wireless Headphones",
      price: "Rs 1500.00",
      oldPrice: "Rs2500.00",
      discount: "NEW",
      rating: 4,
    },
    {
      id: 3,
      image: "/imgs/product_img/p4.png",
      category: "Laptops",
      name: "Gaming Laptop",
      price: "Rs 150000",
      oldPrice: "Rs 175000",
      discount: "-30%",
      rating: 5,
    },
    {
      id: 4,
      image: "/imgs/product_img/p2.webp",
      category: "Tablets",
      name: "Android Tablet",
      price: "Rs 25000",
      oldPrice: "Rs 30000",
      discount: "",
      rating: 5,
    },
  ];

  const [searchTerm, setSearchTerm] = useState('');
const [filteredProducts, setFilteredProducts] = useState(products);
const productListRef = useRef(null); 

const handleSearch = (keyword) => {
  const cleanedKeyword = keyword.trim().toLowerCase();
  setSearchTerm(cleanedKeyword);

  const results = products.filter((product) =>
    product.name.toLowerCase().includes(cleanedKeyword)
  );

  setFilteredProducts(results);

 
  if (productListRef.current) {
    productListRef.current.scrollIntoView({ behavior: 'smooth' });
  }
};


  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar onSearch={handleSearch} />
              <Carousel />
              <Cate />
              <div className="product-list-section" ref={productListRef}>
               
                  <>                   
                    <Home
  products={filteredProducts}
  originalCount={products.length}
  searchTerm={searchTerm}
/>
                  </>
              </div>
              <Footer />
            </>
          }
        />
        {/* Other routes */}
        <Route path="/Login" element={<><Navbar /><Login /><Footer /></>} />
        <Route path="/Register" element={<><Navbar /><Register /><Footer /></>} />
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
        <Route path="/CustomerList" element={<><Sidebar /><Mainbar /><CustomerList /></>} />
        <Route path="/Category" element={<><Sidebar /><Mainbar /><Category /></>} />
        <Route path="/CustomerDashboard" element={<><Navbar /><CustomerDashboard /><Footer /></>} />
        <Route path="/CategoryList" element={<><Sidebar /><Mainbar /><CategoryList /></>} />
        <Route path="/ProductList" element={<><Sidebar /><Mainbar /><ProductList /></>} />
        <Route path="/AddProduct" element={<><Sidebar /><Mainbar /><AddProduct /></>} />
        <Route path="/EditProduct/:id" element={<><Sidebar /><Mainbar /><EditProduct /></>} />
        <Route path="/Cart" element={<><Navbar /><Cart /><Footer /></>} />
        <Route path="/CheckoutForm" element={<><Navbar /><CheckoutForm /><Footer /></>} />
        <Route path="/paymentfailure" element={<><Navbar /><PaymentFailure /><Footer /></>} />
        <Route path="/productDetails" element={<><Navbar /><ViewProductDetails /><Footer /></>} />

      </Routes>
    </Router>
  );
}

export default App;


// return (
//   <Router>
//     <Routes>
//       {/* Public Routes */}
//       <Route
//         path="/"
//         element={
//           <>
//             <Navbar onSearch={handleSearch} />
//             <Carousel />
//             <Cate />
//             <div className="product-list-section" ref={productListRef}>
//               <HomeProductList
//                 products={filteredProducts}
//                 originalCount={products.length}
//                 searchTerm={searchTerm}
//               />
//             </div>
//             <Footer />
//           </>
//         }
//       />
//       <Route path="/Login" element={<><Navbar /><Login /><Footer /></>} />
//       <Route path="/Register" element={<><Navbar /><Register /><Footer /></>} />
//       <Route path="/Cart" element={<><Navbar /><Cart /><Footer /></>} />
//       <Route path="/CheckoutForm" element={<><Navbar /><CheckoutForm /><Footer /></>} />
//       <Route path="/paymentfailure" element={<><Navbar /><PaymentFailure /><Footer /></>} />
//       <Route path="/CustomerDashboard" element={<><Navbar /><CustomerDashboard /><Footer /></>} />

//       {/* Admin Routes (Protected) */}
//       <Route element={<AdminDashboard allowedRole="ADMIN" />}>

//         <Route path="/AdminDashboard" element={<AdminDashboard />} />
//         <Route path="/CustomerList" element={<><Sidebar /><Mainbar /><CustomerList /></>} />
//         <Route path="/Category" element={<><Sidebar /><Mainbar /><Category /></>} />
//         <Route path="/CategoryList" element={<><Sidebar /><Mainbar /><CategoryList /></>} />
//         <Route path="/ProductList" element={<><Sidebar /><Mainbar /><ProductList /></>} />
//       </Route>
//     </Routes>
//   </Router>
// );
// }

// export default App;