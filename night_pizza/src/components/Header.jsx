import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-900 py-6 px-4 md:px-8 flex justify-between items-center text-white">
      <Link to="/" className="text-3xl font-bold text-yellow-400">Night Pizza 🌙🍕</Link>

      {/* Hamburger Icon for Mobile */}
      <button onClick={toggleMenu} className="md:hidden text-white focus:outline-none">
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Desktop Menu */}
      <nav className="hidden md:block">
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:text-yellow-400 transition-colors duration-300">Home</Link></li>
          <li><Link to="/about" className="hover:text-yellow-400 transition-colors duration-300">About Us</Link></li>
          <li><Link to="/products" className="hover:text-yellow-400 transition-colors duration-300">Products</Link></li>
          <li><Link to="/delivery" className="hover:text-yellow-400 transition-colors duration-300">Delivery</Link></li>
          <li><Link to="/contact" className="hover:text-yellow-400 transition-colors duration-300">Contact</Link></li>
        </ul>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-gray-900 bg-opacity-95 transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-end p-6">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col items-center mt-12 space-y-8 text-2xl">
          <Link to="/" onClick={toggleMenu} className="hover:text-yellow-400 transition-colors duration-300">Home</Link>
          <Link to="/about" onClick={toggleMenu} className="hover:text-yellow-400 transition-colors duration-300">About Us</Link>
          <Link to="/products" onClick={toggleMenu} className="hover:text-yellow-400 transition-colors duration-300">Products</Link>
          <Link to="/delivery" onClick={toggleMenu} className="hover:text-yellow-400 transition-colors duration-300">Delivery</Link>
          <Link to="/contact" onClick={toggleMenu} className="hover:text-yellow-400 transition-colors duration-300">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;