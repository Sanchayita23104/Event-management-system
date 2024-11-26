import React, { useState } from 'react';
import './RegistrationForm.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    startDate: '',
    startTime: '',
    endDate: '',
    endTime: '',
    location: '',
    price: '',
    capacity: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Event Registration:', formData);
    // Here, you’d typically send data to the backend
  };

  return (
    <form onSubmit={handleSubmit} className="registration-form">
      <h2>Register for Event</h2>

      {/* Name and Email */}
      <input
        type="text"
        placeholder="Your Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        placeholder="Your Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      {/* Event Title */}
      <input
        type="text"
        placeholder="Event Title"
        name="title"
        value={formData.title}
        onChange={handleChange}
        required
      />

      {/* Start and End Date/Time */}
      <div className="datetime-container">
        <div>
          <label>Start Date</label>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            required
          />
          <label>Start Time</label>
          <input
            type="time"
            name="startTime"
            value={formData.startTime}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>End Date</label>
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            required
          />
          <label>End Time</label>
          <input
            type="time"
            name="endTime"
            value={formData.endTime}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      {/* Location */}
      <input
        type="text"
        placeholder="Event Location"
        name="location"
        value={formData.location}
        onChange={handleChange}
        required
      />

      {/* Price and Capacity */}
      <input
        type="number"
        placeholder="Ticket Price"
        name="price"
        value={formData.price}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        placeholder="Event Capacity"
        name="capacity"
        value={formData.capacity}
        onChange={handleChange}
        required
      />

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
