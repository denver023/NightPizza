import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Product from './pages/Product';
import Delivery from './pages/Delivery';
import Contact from './pages/Contact';
import Checkout from './pages/Checkout'; // Import the new Checkout component
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="bg-gray-900 text-white min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/products" element={<Product />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/checkout" element={<Checkout />} /> {/* Add the new route */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;