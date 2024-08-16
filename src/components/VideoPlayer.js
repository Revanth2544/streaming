// src/components/VideoPlayer.js
import React, { useState, useEffect } from 'react';

function VideoPlayer({ videos = [] }) {
  // Ensure videos is always an array
  const [selectedVideo, setSelectedVideo] = useState(videos[0] || null);

  useEffect(() => {
    // Update the selected video when the videos prop changes
    setSelectedVideo(videos[0] || null);
  }, [videos]);

  const handleVideoChange = (event) => {
    const video = videos.find(v => v.file === event.target.value);
    setSelectedVideo(video);
  };

  return (
    <div className="container">
      <h2>Watch Videos</h2>
      {videos.length > 0 ? (
        <>
          <div className="video-selector">
            <label htmlFor="videoSelect">Select a video:</label>
            <select
              id="videoSelect"
              onChange={handleVideoChange}
              value={selectedVideo ? selectedVideo.file : ''}
            >
              {videos.map((video) => (
                <option key={video.file} value={video.file}>
                  {video.title || 'Untitled'}
                </option>
              ))}
            </select>
          </div>
          {selectedVideo && (
            <video controls>
              <source src={selectedVideo.file} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </>
      ) : (
        <p>No videos available</p>
      )}
    </div>
  );
}

export default VideoPlayer;
