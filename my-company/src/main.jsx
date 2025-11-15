import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
// If you have a global CSS file, it should be imported here. 
// For this task, we can ignore the default CSS import.

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);