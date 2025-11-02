import { useState } from 'react';
// Corrected imports to use the .jsx extension for better compatibility
import WelcomeMessage from './components/WelcomeMessage.jsx';
import Header from './components/Header.jsx';
import MainContent from './components/MainContent.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    // This top-level <div> is crucial for proper JSX structure
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

      {/* Task 2 Components - Assembled in the specified order */}
      <Header />
      <MainContent />
      <Footer />

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
      
    </div> // 👈 This closing tag must be here
  );
}

export default App;