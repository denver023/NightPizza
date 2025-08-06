import React from 'react';
import { products } from 'Products';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <main className="text-center py-20 px-4 md:px-8">
        <h2 className="text-6xl font-extrabold leading-tight tracking-tight mb-4">
          Crave a Slice? We're Open.
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          The best pizza for your late-night cravings. Fast delivery, fresh ingredients.
        </p>
        <a href="/products" className="bg-yellow-400 text-gray-900 font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-300 transition-colors duration-300">
          Order Now
        </a>
      </main>

      {/* Features Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-800">
        <h3 className="text-4xl font-bold text-center mb-12">Why Choose Night Pizza?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
          <div className="p-6">
            <h4 className="text-2xl font-bold mb-2">Late-Night Delivery</h4>
            <p className="text-gray-400">We're open when others are closed, so you're never left hungry.</p>
          </div>
          <div className="p-6">
            <h4 className="text-2xl font-bold mb-2">Fresh Ingredients</h4>
            <p className="text-gray-400">Hand-tossed dough and premium toppings for the perfect bite every time.</p>
          </div>
          <div className="p-6">
            <h4 className="text-2xl font-bold mb-2">Fast & Easy</h4>
            <p className="text-gray-400">Simple online ordering and speedy delivery right to your door.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
