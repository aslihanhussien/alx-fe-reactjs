import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import MainContent from './components/MainContent';
import Counter from './components/Counter'; // <-- Import the new Counter component

function App() {
  const appContainerStyle = {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '960px',
    margin: '0 auto',
    padding: '20px',
    boxShadow: '0 0 15px rgba(0,0,0,0.1)',
    borderRadius: '10px',
    backgroundColor: '#fff'
  };

  // Mock data for UserProfile component
  const mockUserProfile = {
    name: 'Alexandra R.',
    age: 28,
    bio: 'React developer focused on state management and component architecture.'
  };

  return (
    <div style={appContainerStyle}>
      {/* Existing components */}
      <Header />
      <UserProfile 
        name={mockUserProfile.name} 
        age={mockUserProfile.age} 
        bio={mockUserProfile.bio} 
      />
      
      {/* 🎯 NEW: Include the Counter component here */}
      <Counter />
      
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;