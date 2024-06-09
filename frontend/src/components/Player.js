import React, { useState, useRef } from 'react';

const Player = ({ files }) => {
  const [currentFile, setCurrentFile] = useState(null);
  const audioRef = useRef(null);

  const handlePlay = (file) => {
    setCurrentFile(file);
    if (audioRef.current) {
      audioRef.current.load();
      audioRef.current.play();
    }
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <img src="default.png" alt="Album Art" className="h-12 w-12 mr-4" />
        <div>
          <p className="text-sm">{currentFile ? currentFile.name : 'No file selected'}</p>
          <p className="text-xs text-gray-400">{currentFile ? 'Local File' : ''}</p>
        </div>
      </div>
      <div className="flex items-center">
        <button className="p-2" onClick={() => audioRef.current && audioRef.current.pause()}>⏮️</button>
        <button className="p-2" onClick={() => audioRef.current && audioRef.current.play()}>⏯️</button>
        <button className="p-2" onClick={() => audioRef.current && audioRef.current.pause()}>⏭️</button>
      </div>
      <div className="flex items-center">
        <input type="range" className="w-32" />
      </div>
      <audio ref={audioRef} controls className="hidden">
        <source src={currentFile ? URL.createObjectURL(currentFile) : ''} type={currentFile ? currentFile.type : ''} />
      </audio>
    </div>
  );
};

export default Player;
