// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import LoginScreen from './components/LoginScreen';
import RegistrationScreen from './components/RegistrationScreen';
import AdminDashboard from './components/AdminDashboard';
import CustomerDashboard from './components/CustomerDashboard';

function App() {
  const [userRole, setUserRole] = useState(null);
  const [plans, setPlans] = useState([]);
  const [videos, setVideos] = useState([]);
  const [videoPlanMapping, setVideoPlanMapping] = useState([]);

  const handlePlanCreation = (plan) => {
    setPlans([...plans, { ...plan, id: (plans.length + 1).toString() }]);
  };

  const handleVideoUpload = (video) => {
    setVideos([...videos, { ...video, id: (videos.length + 1).toString() }]);
  };

  const handleMappingVideoToPlan = (mapping) => {
    setVideoPlanMapping([...videoPlanMapping, mapping]);
  };

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        {userRole === 'admin' && <Link to="/admin">Admin Dashboard</Link>}
        {userRole === 'customer' && <Link to="/customer">Customer Dashboard</Link>}
        {!userRole && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
      <div className="app">
        <Routes>
          <Route path="/" element={<h1>Welcome to Streaming App</h1>} />
          <Route path="/login" element={<LoginScreen setUserRole={setUserRole} />} />
          <Route path="/register" element={<RegistrationScreen />} />
          {userRole === 'admin' && (
            <Route
              path="/admin"
              element={
                <AdminDashboard
                  onPlanCreation={handlePlanCreation}
                  onVideoUpload={handleVideoUpload}
                  onMappingVideoToPlan={handleMappingVideoToPlan}
                />
              }
            />
          )}
          {userRole === 'customer' && (
            <Route
              path="/customer"
              element={
                <CustomerDashboard
                  plans={plans}
                  videos={videos}
                  videoPlanMapping={videoPlanMapping}
                />
              }
            />
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
