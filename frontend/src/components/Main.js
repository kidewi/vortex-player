import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Browse from './Browse';
import Radio from './Radio';
import Library from './Library';

const Main = ({ onImport }) => {
  return (
    <div className="flex-1 bg-gray-900 text-white p-6">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/radio" element={<Radio />} />
        <Route path="/library" element={<Library onImport={onImport} />} />
      </Routes>
    </div>
  );
};

export default Main;
