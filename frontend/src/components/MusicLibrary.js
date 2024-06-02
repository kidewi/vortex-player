import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MusicLibrary = () => {
  const [library, setLibrary] = useState([]);

  useEffect(() => {
    const fetchLibrary = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await axios.get('http://localhost:5000/api/music', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setLibrary(response.data);
      } catch (error) {
        console.error('Error fetching library:', error);
      }
    };
    fetchLibrary();
  }, []);
  
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Music Library</h2>
      <ul className="list-disc">
        {library.map((song) => (
          <li key={song._id} className="mb-2">
            {song.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MusicLibrary;
