// src/components/CustomerDashboard.js
import React, { useState } from 'react';
import CreateGroupScreen from './CreateGroupScreen';
import FavoriteGallery from './FavoriteGallery';
import VideoPlayer from './VideoPlayer';

function CustomerDashboard({ plans, videos, videoPlanMapping }) {
  const [selectedPlan, setSelectedPlan] = useState('');
  const [activeScreen, setActiveScreen] = useState('plans');

  const filteredVideos = videoPlanMapping
    .filter(mapping => mapping.planId === selectedPlan)
    .map(mapping => videos.find(video => video.id === mapping.videoId));

  return (
    <div className="container">
      <h2>Customer Dashboard</h2>
      <nav>
        <button onClick={() => setActiveScreen('plans')}>View Plans</button>
        <button onClick={() => setActiveScreen('group')}>Create Group</button>
        <button onClick={() => setActiveScreen('gallery')}>Favorite Gallery</button>
        <button onClick={() => setActiveScreen('player')}>Video Player</button>
      </nav>
      {activeScreen === 'plans' && (
        <div>
          <h3>Available Plans</h3>
          <div className="plans-container">
            {plans.map(plan => (
              <div
                key={plan.id}
                className="plan-box"
                onClick={() => {
                  setSelectedPlan(plan.id);
                  setActiveScreen('video');
                }}
              >
                <h4>{plan.name}</h4>
                <p>{plan.duration}</p>
                <p>${plan.price}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      {activeScreen === 'video' && selectedPlan && (
        <VideoPlayer videos={filteredVideos} />
      )}
      {activeScreen === 'group' && <CreateGroupScreen />}
      {activeScreen === 'gallery' && <FavoriteGallery />}
      {activeScreen === 'player' && <VideoPlayer />}
    </div>
  );
}

export default CustomerDashboard;

