import React from 'react';

const TopBar = () => {
  return (
    <div className="bg-black container flex justify-end items-center space-x-4">
      {/* Member Login */}
      <button className="flex items-center text-xs bg-gray-800 text-white hover:bg-gray-700 py-1 px-3 ">
        <span className="mr-2">🔑</span> Member Login
      </button>

      {/* Open an Account Button */}
      <button className="text-xs bg-green-600 text-white hover:bg-green-700 py-1 px-3 ">
        OPEN AN ACCOUNT
      </button>

      {/* Register as Partner Button */}
      <button className="text-xs bg-blue-600 text-white hover:bg-blue-700 py-1 px-3 ">
        REGISTER AS PARTNER
      </button>

      {/* Language Dropdown */}
      <div className="relative">
        <select className="text-xs bg-gray-800 text-white py-1 px-3  focus:outline-none appearance-none">
          <option value="en">LANGUAGES</option>
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="es">Spanish</option>
          {/* Add more languages as needed */}
        </select>
      </div>
    </div>
  );
};

export default TopBar;
