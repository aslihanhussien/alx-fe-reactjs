import React from 'react';

const styles = {
  pageContent: {
    padding: '30px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    minHeight: '400px',
  }
};

export default function Services() {
  return (
    <div style={styles.pageContent}>
      <h1 style={{ color: '#ffc107', marginBottom: '15px' }}>Our Services</h1>
      <ul style={{ listStyleType: 'disc', paddingLeft: '20px', lineHeight: '2.0' }}>
        <li>Technology Consulting</li>
        <li>Market Analysis</li>
        <li>Product Development</li>
      </ul>
    </div>
  );
}