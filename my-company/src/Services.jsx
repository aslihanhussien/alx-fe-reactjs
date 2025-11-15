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
      <h1 style={{ color: '#ffc107', marginBottom: '15px' }}>Expert Services Offered</h1>
      <ul style={{ listStyleType: 'disc', paddingLeft: '20px', lineHeight: '2.0' }}>
        <li><strong style={{ color: '#007bff' }}>Technology Consulting:</strong> Strategic IT planning and cloud migration.</li>
        <li><strong style={{ color: '#007bff' }}>Market Analysis:</strong> Comprehensive market research and trend forecasting.</li>
        <li><strong style={{ color: '#007bff' }}>Product Development:</strong> Full-stack engineering and agile product lifecycle management.</li>
      </ul>
    </div>
  );
}