import React from 'react';

const styles = {
  pageContent: {
    padding: '30px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    minHeight: '400px',
  }
};

export default function About() {
  return (
    <div style={styles.pageContent}>
      <h1 style={{ color: '#28a745', marginBottom: '15px' }}>About Us</h1>
      <p style={{ lineHeight: '1.6', marginBottom: '15px' }}>Our company has been providing top-notch services since 1990. We specialize in various fields including technology, marketing, and consultancy.</p>
    </div>
  );
}