import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-semibold">
          <a href="#">Logo</a>
        </div>
        <div className="space-x-6">
          <a href="#" className="text-white hover:text-gray-300">Home</a>
          <a href="#about" className="text-white hover:text-gray-300">About</a>
          <a href="#services" className="text-white hover:text-gray-300">Services</a>
          <a href="#contact" className="text-white hover:text-gray-300">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
