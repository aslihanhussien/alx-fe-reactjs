import { useState } from 'react';
import WelcomeMessage from './components/WelcomeMessage.jsx';
import Header from './components/Header.jsx';
import MainContent from './components/MainContent.jsx';
import Footer from './components/Footer.jsx';
import UserProfile from './components/UserProfile.jsx'; // Task 3: Import UserProfile

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ 
        maxWidth: '600px', 
        margin: '50px auto', 
        border: '1px solid #ccc', 
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        borderRadius: '10px',
        fontFamily: 'Arial, sans-serif'
    }}>
      
      {/* Task 1 Component */}
      <WelcomeMessage /> 

      {/* Task 2 Components */}
      <Header />
      <MainContent />
      
      {/* -------------------- */}
      {/* Task 3 Component - Passing data via props */}
      <UserProfile 
        name="Alice" 
        age="25" 
        bio="Loves hiking and photography, and is currently learning React components and props at ALX." 
      />
      
      {/* Example of reusing the component with different data */}
      <UserProfile
        name="Bob"
        age="30"
        bio="A software engineer focused on back-end systems, occasionally exploring frontend development."
      />
      {/* -------------------- */}


      {/* Default Vite/React counter example - Keeping it visible */}
      <div style={{ padding: '20px', textAlign: 'center', backgroundColor: '#eee' }}>
        <h2>Vite/React State Demo</h2>
        <button 
          onClick={() => setCount((count) => count + 1)}
          style={{
            padding: '10px 20px',
            fontSize: '1em',
            backgroundColor: '#61dafb',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          count is {count}
        </button>
      </div>
      
      <Footer />
      
    </div>
  );
}

export default App;