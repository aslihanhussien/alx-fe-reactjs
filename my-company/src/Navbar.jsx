import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'center',
    padding: '15px 0',
    backgroundColor: '#343a40',
    borderRadius: '8px',
    marginBottom: '20px',
  },
  navLink: {
    color: '#ffffff',
    textDecoration: 'none',
    margin: '0 20px',
    fontWeight: '600',
    fontSize: '16px',
    padding: '8px 15px',
    borderRadius: '6px',
    transition: 'background-color 0.3s',
  }
};

export default function Navbar() {
  return (
    <nav style={styles.navbar}>
      <Link to="/" style={styles.navLink} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#495057'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = ''}>Home</Link>
      <Link to="/about" style={styles.navLink} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#495057'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = ''}>About</Link>
      <Link to="/services" style={styles.navLink} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#495057'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = ''}>Services</Link>
      <Link to="/contact" style={styles.navLink} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#495057'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = ''}>Contact</Link>
    </nav>
  );
}