import React from 'react';

const EventCard = ({ title, date, description }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem 0' }}>
      <h3>{title}</h3>
      <p>{date}</p>
      <p>{description}</p>
    </div>
  );
};

export default EventCard;
