import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// These imports MUST match the file names exactly (Navbar.jsx, Home.jsx, etc.)
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';

const styles = {
  container: {
    fontFamily: 'Inter, sans-serif',
    maxWidth: '900px',
    margin: '30px auto',
    padding: '20px',
    backgroundColor: '#f8f9fa',
    borderRadius: '12px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
  },
  footer: {
    textAlign: 'center',
    padding: '15px 0',
    marginTop: '20px',
    borderTop: '1px solid #dee2e6',
    color: '#6c757d',
    fontSize: '14px',
  }
};

// --- Footer Component (Extra Feature) ---
const Footer = () => (
  <footer style={styles.footer}>
    &copy; {new Date().getFullYear()} My Company, Inc. All rights reserved. | Built with React
  </footer>
);

// --- Main App Component (Implements Routing) ---
export default function App() {
  return (
    <BrowserRouter>
      <div style={styles.container}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}