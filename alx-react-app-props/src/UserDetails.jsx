import React, { useContext } from 'react';
import UserContext from './UserContext'; // Import the new Context

// Notice: { userData } prop is removed from the function signature
function UserDetails() {
  // Get the data directly using the useContext hook
  const userData = useContext(UserContext);

  const detailStyle = {
    backgroundColor: '#ecf0f1',
    padding: '10px',
    borderRadius: '4px',
    margin: '10px 0'
  };
  
  if (!userData) {
    return <div style={detailStyle}>Loading user data...</div>;
  }

  return (
    <div style={detailStyle}>
      <h5>UserDetails Component (Consuming Data)</h5>
      <p>Name: <strong>{userData.name}</strong></p>
      <p>Email: <strong>{userData.email}</strong></p>
    </div>
  );
}

export default UserDetails;