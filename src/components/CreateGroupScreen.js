// src/components/CreateGroupScreen.js
import React, { useState } from 'react';

function CreateGroupScreen() {
  const [groupName, setGroupName] = useState('');

  const handleChange = (e) => {
    setGroupName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Creating Group:', groupName);
  };

  return (
    <div className="container">
      <h2>Create Group</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Group Name" value={groupName} onChange={handleChange} required />
        <button type="submit">Create Group</button>
      </form>
    </div>
  );
}

export default CreateGroupScreen;
