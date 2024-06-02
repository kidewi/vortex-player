import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-gray-900 text-white w-64 min-h-screen flex flex-col">
      <div className="p-4">
        <h1 className="text-2xl font-bold">Vortex Player</h1>
      </div>
      <nav className="flex-1 px-2 py-4">
        <Link to="/" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
          Home
        </Link>
        <Link to="/library" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
          Library
        </Link>
        <Link to="/login" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
          Login
        </Link>
        <Link to="/signup" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
          Signup
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
