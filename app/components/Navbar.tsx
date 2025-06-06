'use client';

import React from 'react';

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-green-600">UnitedeVisa</div>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-green-600">Home</a>
            <a href="#" className="text-gray-700 hover:text-green-600">Destinations</a>
            <a href="#" className="text-gray-700 hover:text-green-600">Visa Services</a>
            <a href="#" className="text-gray-700 hover:text-green-600">Contact</a>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-green-600">Login</button>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;