import React, { useState } from 'react';

const Library = ({ onImport }) => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
    const importedFiles = Array.from(event.target.files);
    setFiles(importedFiles);
    onImport(importedFiles);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Your Music Library</h2>
      <input
        type="file"
        multiple
        accept="audio/*"
        onChange={handleFileChange}
        className="mb-4 p-2"
      />
      <ul className="list-disc pl-5">
        {files.map((file, index) => (
          <li key={index} className="mb-2">
            {file.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Library;
