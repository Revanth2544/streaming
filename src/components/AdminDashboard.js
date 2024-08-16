// src/components/AdminDashboard.js
import React, { useState } from 'react';
import UploadVideoScreen from './UploadVideoScreen';
import AddPlanScreen from './AddPlanScreen';
// import MapVideoToPlanScreen from './MapVideoToPlanScreen';

function AdminDashboard({ onPlanCreation, onVideoUpload, onMappingVideoToPlan }) {
  const [activeScreen, setActiveScreen] = useState('upload');
  const [plans, setPlans] = useState([]);

  const handlePlanCreation = (plan) => {
    setPlans([...plans, { ...plan, id: (plans.length + 1).toString() }]);
    onPlanCreation(plan); // Propagate plan data if needed
  };

  return (
    <div className="container">
      <h2>Admin Dashboard</h2>
      <nav>
        <button onClick={() => setActiveScreen('upload')}>Upload Video</button>
        <button onClick={() => setActiveScreen('plan')}>Add Plan</button>
        {/* <button onClick={() => setActiveScreen('map')}>Map Video to Plan</button> */}
      </nav>
      {activeScreen === 'upload' && <UploadVideoScreen onVideoUpload={onVideoUpload} />}
      {activeScreen === 'plan' && <AddPlanScreen onPlanCreation={handlePlanCreation} />}
      {/* {activeScreen === 'map' && <MapVideoToPlanScreen onMappingVideoToPlan={onMappingVideoToPlan} />} */}
    </div>
  );
}

export default AdminDashboard;
