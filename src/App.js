import './App.css';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Login from './components/Login';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Register from './components/Register';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar /> {/* Keep Navbar outside Routes if it should be visible on all pages */}
      <Routes>
        <Route path="/" element={<><Carousel /> <ProductList/></>} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
