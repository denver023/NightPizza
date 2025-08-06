import React, { useState } from 'react';
import { products } from '../productData';
import CartSidebar from '../components/CartSidebar';

const Product = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const handleRemoveFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="py-20 px-4 md:px-8 relative">
      <h2 className="text-5xl font-bold text-yellow-400 mb-12 text-center">Our Delicious Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {products.map((product) => (
          <div key={product.id} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover mb-4" />
            <div className="p-6 text-center">
              <h4 className="text-2xl font-bold mb-2">{product.name}</h4>
              <p className="text-gray-400 mb-4">{product.description}</p>
              <span className="text-yellow-400 text-xl font-semibold">${product.price.toFixed(2)}</span>
              <button
                onClick={() => handleAddToCart(product)}
                className="mt-4 w-full bg-yellow-400 text-gray-900 font-bold py-2 rounded hover:bg-yellow-300 transition-colors duration-300"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <CartSidebar
        isOpen={isCartOpen}
        onClose={toggleCart}
        cartItems={cartItems}
        onRemoveItem={handleRemoveFromCart}
      />

      <button
        onClick={toggleCart}
        className="fixed bottom-4 right-4 bg-yellow-400 text-gray-900 font-bold py-3 px-6 rounded-full shadow-lg hover:bg-yellow-300 transition-colors duration-300 z-50"
      >
        View Cart ({cartItems.length})
      </button>
    </div>
  );
};

export default Product;