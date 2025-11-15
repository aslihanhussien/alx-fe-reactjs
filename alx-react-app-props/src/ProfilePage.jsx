import React from 'react';
import UserInfo from './UserInfo';

// Notice: { userData } prop is removed from the function signature
function ProfilePage() {
  return (
    <div style={{ padding: '15px', border: '1px solid #eee', margin: '10px', borderRadius: '6px' }}>
      <h3>ProfilePage Component (Skipping Data)</h3>
      <UserInfo /> 
    </div>
  );
}

export default ProfilePage;