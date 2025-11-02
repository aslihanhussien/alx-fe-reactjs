
// src/App.jsx
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import WelcomeMessage from './components/WelcomeMessage'; // Your import

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <WelcomeMessage /> {/* <--- INCLUDE THE COMPONENT HERE */}
      
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        {/* ... rest of the default Vite JSX */}
      </div>
      {/* ... rest of the default App.jsx content */}
    </>
  )
}

export default App