'use client';
import React, { useState } from 'react';
import { Search, MapPin, Calendar, Users, Star, Phone, Mail, Shield, Award, Headphones, Clock } from 'lucide-react';

const TravelWebsite = () => {
  const [selectedTab, setSelectedTab] = useState('flights');

  const destinations = [
    { name: 'New York', image: '🏙️', price: '$299' },
    { name: 'Paris', image: '🗼', price: '$899' },
    { name: 'Tokyo', image: '🏯', price: '$1299' },
    { name: 'Bali', image: '🏝️', price: '$799' },
    { name: 'London', image: '🎡', price: '$699' }
  ];

  const visaTypes = [
    { type: 'Tourist Visa', duration: '30 Days', price: '$99', color: 'bg-green-100 border-green-300' },
    { type: 'Business Visa', duration: '90 Days', price: '$199', color: 'bg-blue-100 border-blue-300' },
    { type: 'Transit Visa', duration: '7 Days', price: '$49', color: 'bg-orange-100 border-orange-300' },
    { type: 'Student Visa', duration: '1 Year', price: '$299', color: 'bg-purple-100 border-purple-300' }
  ];

  const steps = [
    { icon: '📋', title: 'Fill Application', desc: 'Complete your visa application form online' },
    { icon: '📄', title: 'Upload Documents', desc: 'Submit required documents securely' },
    { icon: '☁️', title: 'Processing', desc: 'We process your application efficiently' },
    { icon: '✅', title: 'Get Visa', desc: 'Receive your approved visa digitally' }
  ];

  const pricingPlans = [
    { 
      name: 'Basic', 
      price: '$49.99', 
      features: ['Single destination', 'Email support', 'Basic processing'],
      color: 'border-gray-300',
      buttonColor: 'bg-gray-600 hover:bg-gray-700'
    },
    { 
      name: 'Standard', 
      price: '$99.99', 
      features: ['Multiple destinations', 'Priority support', 'Fast processing'],
      color: 'border-blue-300',
      buttonColor: 'bg-blue-600 hover:bg-blue-700'
    },
    { 
      name: 'Premium', 
      price: '$199.99', 
      features: ['Unlimited destinations', '24/7 support', 'Express processing'],
      color: 'border-orange-300',
      buttonColor: 'bg-orange-600 hover:bg-orange-700'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-green-600">TravelEase</div>
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

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-green-500 to-teal-400 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Let Us Get You There To Your Dream Destination
            </h1>
            <p className="text-xl mb-12 max-w-3xl mx-auto">
              Book flights, explore destinations, and get your visa approved in just a few clicks. 
              Your adventure starts here with our seamless travel solutions.
            </p>
            
            {/* Search Tabs */}
            <div className="bg-white rounded-lg p-6 shadow-2xl max-w-4xl mx-auto">
              <div className="flex border-b mb-6">
                {['flights', 'hotels', 'visa'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setSelectedTab(tab)}
                    className={`px-6 py-3 capitalize font-medium ${
                      selectedTab === tab 
                        ? 'text-green-600 border-b-2 border-green-600' 
                        : 'text-gray-600 hover:text-green-600'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="From"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900"
                  />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="To"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900"
                  />
                </div>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="date"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900"
                  />
                </div>
                <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 font-medium">
                  Search Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Destinations */}
      <section className="py-16 bg-gray-50">
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

      {/* Visa Types */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">All eVisa Types. One Place.</h2>
            <p className="text-xl text-gray-600">Choose the visa type that suits your travel needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {visaTypes.map((visa, index) => (
              <div key={index} className={`${visa.color} border-2 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300`}>
                <div className="mb-4">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-gray-600" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">{visa.type}</h3>
                  <p className="text-gray-600 mb-4">{visa.duration}</p>
                  <p className="text-2xl font-bold text-gray-900 mb-6">{visa.price}</p>
                </div>
                <ul className="text-sm text-gray-600 mb-6 space-y-2">
                  <li>✓ Fast processing</li>
                  <li>✓ 24/7 support</li>
                  <li>✓ Secure application</li>
                </ul>
                <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 font-medium">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">4 Easy Steps to Get Your eVisa</h2>
            <p className="text-xl text-gray-600">Simple and straightforward process</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
                  {step.icon}
                </div>
                <h3 className="font-bold text-xl mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 font-medium text-lg">
              Start Now
            </button>
          </div>
        </div>
      </section>

      {/* Customer Support */}
      <section className="py-16 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-yellow-100 rounded-xl p-8 flex items-center justify-between">
            <div className="flex items-center">
              <Headphones className="h-12 w-12 text-yellow-600 mr-4" />
              <div>
                <h3 className="text-2xl font-bold text-gray-900">24/7 Customer Support 🎧</h3>
                <p className="text-gray-600">Get help whenever you need it. We're here to assist you every step of the way.</p>
              </div>
            </div>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-medium">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">No rush fees. No hidden costs.</h2>
            <p className="text-xl text-gray-600">Just our low-cost fee of $49.99 per passenger</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`border-2 ${plan.color} rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300`}>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-gray-900 mb-4">{plan.price}</div>
                  <p className="text-gray-600">per application</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center justify-center">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full ${plan.buttonColor} text-white py-3 rounded-lg font-medium transition-colors duration-200`}>
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-xl p-12 shadow-lg">
            <Shield className="h-16 w-16 text-green-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Rejected? No worries — you get your service fee back.
            </h2>
            <p className="text-xl text-gray-600 mb-8">Guaranteed!</p>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We're so confident in our service that if your visa application gets rejected, 
              we'll refund your service fee completely. Your satisfaction is our guarantee.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-green-400 mb-4">TravelEase</div>
              <p className="text-gray-400 mb-4">
                Your trusted partner for seamless travel experiences worldwide.
              </p>
              <div className="flex space-x-4">
                <Phone className="h-5 w-5 text-gray-400" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Flight Booking</a></li>
                <li><a href="#" className="hover:text-white">Hotel Reservation</a></li>
                <li><a href="#" className="hover:text-white">Visa Processing</a></li>
                <li><a href="#" className="hover:text-white">Travel Insurance</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Destinations</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Europe</a></li>
                <li><a href="#" className="hover:text-white">Asia</a></li>
                <li><a href="#" className="hover:text-white">Americas</a></li>
                <li><a href="#" className="hover:text-white">Africa</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 TravelEase. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TravelWebsite;