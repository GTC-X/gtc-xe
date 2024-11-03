import React from 'react';
import Language from './Language';

const TopBar = () => {
  return (
    <div className=" container hidden md:flex justify-end pb-2 items-center space-x-4">
      {/* Member Login */}
      <button className="flex items-center text-xs bg-gray-800 text-white hover:bg-gray-700 py-1 px-3 ">
        <span className="mr-2">🔑</span> Member Login
      </button>

      {/* Open an Account Button */}
      <button className="text-xs bg-green-600 text-white hover:bg-green-700 py-1 px-3 ">
        OPEN AN ACCOUNT
      </button>


      {/* Language Dropdown */}
      <div className=" flex gap-2 items-center">
        {/* <Language href={href} /> */}
        <Language />
        {/* <MobileMenu navigationData={navigationData} href={href} /> */}
      </div>
    </div>
  );
};

export default TopBar;
