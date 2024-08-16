// src/components/AddPlanScreen.js
import React, { useState } from 'react';

function AddPlanScreen({ onPlanCreation }) {
  const [planData, setPlanData] = useState({
    name: '',
    duration: '',
    price: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlanData({ ...planData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onPlanCreation(planData);
    setPlanData({ name: '', duration: '', price: '' });
  };

  return (
    <div className="container">
      <h2>Add Plan</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Plan Name"
          value={planData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="duration"
          placeholder="Duration (e.g., Monthly, Yearly)"
          value={planData.duration}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={planData.price}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Plan</button>
      </form>
    </div>
  );
}

export default AddPlanScreen;
