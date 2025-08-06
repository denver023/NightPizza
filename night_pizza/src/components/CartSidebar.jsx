import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook

const CartSidebar = ({ isOpen, onClose, cartItems, onRemoveItem }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);
  const navigate = useNavigate(); // Initialize the hook

  const handleCheckout = () => {
    // You would typically process the order here (e.g., send data to a server)
    // For now, we'll just navigate to the checkout page and close the sidebar
    onClose();
    navigate('/checkout');
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-gray-700 text-white shadow-xl transform transition-transform duration-300 z-40 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Your Cart</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-300">
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M18.793 6.793a1 1 0 01-1.414 0L12 10.586 6.621 5.207a1 1 0 01-1.414 1.414L10.586 12l-5.379 5.379a1 1 0 111.414 1.414L12 13.414l5.379 5.379a1 1 0 01-1.414-1.414L13.414 12l5.379-5.379a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        {cartItems.length === 0 ? (
          <p className="text-gray-400">Your cart is empty.</p>
        ) : (
          <ul>
            {cartItems.map((item, index) => (
              <li key={index} className="flex items-center py-2 border-b border-gray-600">
                <img src={item.imageUrl} alt={item.name} className="w-16 h-16 object-cover rounded mr-4" />
                <div className="flex-grow">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-400">${item.price.toFixed(2)}</p>
                </div>
                <button
                  onClick={() => onRemoveItem(item.id)}
                  className="ml-2 text-red-400 hover:text-red-300 font-bold transition-colors duration-300"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-6 py-4 border-t border-gray-600">
          <h3 className="text-xl font-bold">Total: <span className="text-yellow-400">${total.toFixed(2)}</span></h3>
          <button
            onClick={handleCheckout}
            className="mt-4 w-full bg-yellow-500 text-gray-900 font-bold py-3 rounded-md hover:bg-yellow-400 transition-colors duration-300"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;