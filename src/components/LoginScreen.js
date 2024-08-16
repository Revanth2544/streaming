// src/components/LoginScreen.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginScreen({ setUserRole }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate login
    if (email === 'admin@gmail.com') {
      setUserRole('admin');
      navigate('/admin');
    } else if (email === 'customer@gmail.com') {
      setUserRole('customer');
      navigate('/customer');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginScreen;
