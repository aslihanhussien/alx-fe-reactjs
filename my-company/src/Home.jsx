import React from 'react';

const styles = {
  pageContent: {
    padding: '30px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    minHeight: '400px',
  }
};

export default function Home() {
  return (
    <div style={styles.pageContent}>
      <h1 style={{ color: '#007bff', marginBottom: '15px' }}>Welcome to Our Digital Company</h1>
      <p style={{ lineHeight: '1.6' }}>We are dedicated to delivering excellence in digital transformation, innovation, and strategic consulting for businesses worldwide. Start your future with us today.</p>
    </div>
  );
}