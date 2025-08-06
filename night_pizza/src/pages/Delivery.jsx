import React from 'react';

const Delivery = () => {
  return (
    <div className="py-20 px-4 md:px-8 max-w-4xl mx-auto">
      <h2 className="text-5xl font-bold text-yellow-400 mb-6 text-center">Delivery & Hours</h2>
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
        <h3 className="text-3xl font-bold mb-4">Our Service</h3>
        <p className="text-lg text-gray-300 mb-6">
          We offer fast and reliable delivery to your area. Our drivers are committed to getting your hot pizza to you as quickly as possible. We currently serve the greater downtown metro area. Check our map to see if we deliver to you!
        </p>

        <h3 className="text-3xl font-bold mb-4">Hours of Operation</h3>
        <ul className="text-lg text-gray-300 space-y-2">
          <li>
            <strong>Monday - Thursday:</strong> 8:00 PM - 3:00 AM
          </li>
          <li>
            <strong>Friday - Saturday:</strong> 8:00 PM - 5:00 AM
          </li>
          <li>
            <strong>Sunday:</strong> 8:00 PM - 2:00 AM
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Delivery;