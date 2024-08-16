// src/components/UploadVideoScreen.js
import React, { useState } from 'react';

const UploadVideoScreen = ({ videos, setVideos }) => {
  const [videoData, setVideoData] = useState({
    title: '',
    url: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVideoData({ ...videoData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setVideos([...videos, { ...videoData, id: (videos.length + 1).toString() }]);
    setVideoData({ title: '', url: '' });
  };

  return (
    <div className="container">
      <h2>Upload Video</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Video Title"
          value={videoData.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="url"
          placeholder="Video URL"
          value={videoData.url}
          onChange={handleChange}
          required
        />
        <button type="submit">Upload Video</button>
      </form>
    </div>
  );
};

export default UploadVideoScreen;
