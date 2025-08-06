import React from 'react';

const Contact = () => {
  return (
    <div className="py-20 px-4 md:px-8 max-w-xl mx-auto">
      <h2 className="text-5xl font-bold text-yellow-400 mb-6 text-center">Contact Us</h2>
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center">
        <p className="text-lg text-gray-300 mb-4">Have a question or a comment? We'd love to hear from you!</p>
        <div className="space-y-4">
          <p className="text-lg text-gray-300">
            <strong>Email:</strong> info@nightpizza.com
          </p>
          <p className="text-lg text-gray-300">
            <strong>Phone:</strong> (123) 456-7890
          </p>
          <p className="text-lg text-gray-300">
            <strong>Address:</strong> 123 Pizza Lane, Night City, 54321
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;