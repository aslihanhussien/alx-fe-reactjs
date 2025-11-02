// src/components/UserProfile.jsx

import React from 'react';

// Destructure the props directly in the function signature for cleaner code
const UserProfile = ({ name, age, bio }) => {
  // Simple card style for visual appeal
  const cardStyle = {
    padding: '20px',
    margin: '20px auto',
    border: '1px solid #ddd',
    borderRadius: '10px',
    backgroundColor: '#fff',
    maxWidth: '350px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    textAlign: 'left'
  };

  const nameStyle = {
    color: '#3498db',
    borderBottom: '2px solid #3498db',
    paddingBottom: '5px',
    marginBottom: '10px'
  };

  return (
    <div style={cardStyle}>
      <h2 style={nameStyle}>{name}</h2>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Bio:</strong> {bio}</p>
    </div>
  );
};

export default UserProfile;