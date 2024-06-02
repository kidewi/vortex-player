import React from 'react';

const Header = () => {
  return (
    <header className="bg-green-500 text-white p-4 flex items-center">
      <img src={`${process.env.PUBLIC_URL}/default.png`} alt="Vortex Logo" className="h-10 w-10 mr-2" />
      <h1 className="text-2xl font-bold">Vortex Player</h1>
    </header>
  );
};

export default Header;
