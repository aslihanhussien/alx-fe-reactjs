import React from 'react';
import ProfilePage from './ProfilePage';
import UserContext from './UserContext'; // Import the new Context

function App() {
  // Data to be provided via Context
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    // The Provider makes the data available to all children below it.
    <UserContext.Provider value={userData}>
      <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', maxWidth: '400px', margin: '30px auto', textAlign: 'center' }}>
        <h2>App Component (Context Provider)</h2>
        <ProfilePage />
      </div>
    </UserContext.Provider>
  );
}

export default App;