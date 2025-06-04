'use client';

import React from 'react';

interface Destination {
  name: string;
  image: string;
  price: string;
}

const TopDestinations = () => {
  const destinations: Destination[] = [
    { name: 'New York', image: '🏙️', price: '$299' },
    { name: 'Paris', image: '🗼', price: '$899' },
    { name: 'Tokyo', image: '🏯', price: '$1299' },
    { name: 'Bali', image: '🏝️', price: '$799' },
    { name: 'London', image: '🎡', price: '$699' }
  ];

  return (
    <section className="py-16 bg-[#FAF6E9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Top Travel Destinations in 2025</h2>
          <p className="text-xl text-gray-600">Discover amazing places around the world</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {destinations.map((dest, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-green-400 flex items-center justify-center text-6xl">
                {dest.image}
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{dest.name}</h3>
                <p className="text-green-600 font-semibold text-lg">From {dest.price}</p>
                <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopDestinations;