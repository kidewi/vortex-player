import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MusicPlayer from './components/MusicPlayer';
import MusicLibrary from './components/MusicLibrary';
import Login from './components/Login';
import Signup from './components/Signup';
import './App.css';

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="flex-1 overflow-y-auto p-6 bg-gray-100">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/library" element={<MusicLibrary />} />
              <Route path="/" element={<MusicPlayer />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
