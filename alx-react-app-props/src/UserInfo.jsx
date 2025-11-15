import React from 'react';
import UserDetails from './UserDetails';

// Notice: { userData } prop is removed from the function signature
function UserInfo() {
  return (
    <div style={{ padding: '15px', border: '1px solid #ddd', margin: '10px', borderRadius: '6px' }}>
      <h4>UserInfo Component (Skipping Data)</h4>
      <UserDetails />
    </div>
  );
}

export default UserInfo;