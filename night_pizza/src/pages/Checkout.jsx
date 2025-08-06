import React from 'react';

const Checkout = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-16rem)] px-4 py-20 text-center">
      <h2 className="text-5xl font-bold text-yellow-400 mb-6">Order Confirmed! 🍕</h2>
      <p className="text-xl text-gray-300 mb-8 max-w-2xl">
        Thank you for your order! Your delicious pizza is being prepared and will be delivered to you shortly.
      </p>
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
        <p className="text-2xl font-semibold mb-2">Estimated Delivery Time:</p>
        <p className="text-4xl font-extrabold text-yellow-400">45-60 minutes</p>
      </div>
    </div>
  );
};

export default Checkout;