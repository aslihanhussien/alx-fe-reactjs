// src/components/UserProfile.jsx

import React from 'react';

// Accept the full 'props' object
const UserProfile = (props) => {
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
      {/* ACCESSING PROPS USING DOT NOTATION: props.name, props.age, props.bio */}
      <h2 style={nameStyle}>{props.name}</h2>
      <p><strong>Age:</strong> {props.age}</p>
      <p><strong>Bio:</strong> {props.bio}</p>
    </div>
  );
};

export default UserProfile;