import React, { useState, useRef, useEffect } from 'react';
import { parseBlob } from 'music-metadata-browser';

const MusicPlayer = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [currentFileIndex, setCurrentFileIndex] = useState(null);
  const audioRef = useRef(null);

  const handleFileChange = async (event) => {
    const files = Array.from(event.target.files);
    const newFiles = await Promise.all(files.map(async (file) => {
      let albumArt = `${process.env.PUBLIC_URL}/default.png`;
      try {
        const metadata = await parseBlob(file);
        if (metadata.common.picture && metadata.common.picture.length > 0) {
          const picture = metadata.common.picture[0];
          const base64String = Buffer.from(picture.data).toString('base64');
          albumArt = `data:${picture.format};base64,${base64String}`;
        }
      } catch (error) {
        console.error('Error parsing metadata:', error);
      }
      return {
        url: URL.createObjectURL(file),
        name: file.name,
        albumArt: albumArt,
      };
    }));
    setSelectedFiles([...selectedFiles, ...newFiles]);
  };

  const handleRemoveFile = (index) => {
    const updatedFiles = selectedFiles.filter((_, i) => i !== index);
    setSelectedFiles(updatedFiles);
    if (index === currentFileIndex) {
      setCurrentFileIndex(null);
    }
  };

  const handlePlayFile = (index) => {
    setCurrentFileIndex(index);
  };

  useEffect(() => {
    if (audioRef.current && currentFileIndex !== null) {
      audioRef.current.load();
      audioRef.current.play();
    }
  }, [currentFileIndex]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-6 mb-6">
        <input
          type="file"
          accept="audio/*"
          multiple
          onChange={handleFileChange}
          className="mb-4 p-2 border border-gray-300 rounded"
        />
        {selectedFiles.length > 0 && (
          <>
            <h2 className="text-xl font-bold mb-2">Song List</h2>
            <ul className="list-disc mb-4">
              {selectedFiles.map((file, index) => (
                <li key={index} className="flex justify-between items-center mb-2">
                  <span className="flex-grow cursor-pointer" onClick={() => handlePlayFile(index)}>
                    {file.name}
                  </span>
                  <button
                    onClick={() => handlePlayFile(index)}
                    className="ml-2 text-green-500 hover:text-green-700"
                  >
                    Play
                  </button>
                  <button
                    onClick={() => handleRemoveFile(index)}
                    className="ml-2 text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
      {currentFileIndex !== null && (
        <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-6">
          <img
            src={selectedFiles[currentFileIndex].albumArt}
            alt="Album Art"
            className="w-full h-64 object-cover rounded-lg mb-4"
            onError={(e) => e.target.src = `${process.env.PUBLIC_URL}/default.png`} // Fallback to default
          />
          <audio controls ref={audioRef} className="w-full">
            <source src={selectedFiles[currentFileIndex].url} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      )}
    </div>
  );
};

export default MusicPlayer;
