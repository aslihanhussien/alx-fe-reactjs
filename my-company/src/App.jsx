import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// --- Styles (Inline CSS Objects) ---
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
  },
  pageContent: {
    padding: '30px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    minHeight: '400px',
  },
  footer: {
    textAlign: 'center',
    padding: '15px 0',
    marginTop: '20px',
    borderTop: '1px solid #dee2e6',
    color: '#6c757d',
    fontSize: '14px',
  },
  formInput: {
    width: '100%',
    padding: '12px',
    margin: '10px 0',
    borderRadius: '6px',
    border: '1px solid #ced4da',
    boxSizing: 'border-box',
  },
  formTextarea: {
    width: '100%',
    padding: '12px',
    margin: '10px 0',
    borderRadius: '6px',
    border: '1px solid #ced4da',
    minHeight: '120px',
    resize: 'vertical',
    boxSizing: 'border-box',
  },
  submitButton: {
    padding: '12px 25px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.3s',
  },
  messageBox: {
    padding: '12px',
    borderRadius: '6px',
    marginBottom: '20px',
    fontWeight: '600',
  }
};
// --- Navbar Component ---
const Navbar = () => (
  <nav style={styles.navbar}>
    {/* Navigation Links using React Router's Link */}
    <Link to="/" style={styles.navLink} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#495057'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = ''}>Home</Link>
    <Link to="/about" style={styles.navLink} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#495057'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = ''}>About</Link>
    <Link to="/services" style={styles.navLink} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#495057'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = ''}>Services</Link>
    <Link to="/contact" style={styles.navLink} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#495057'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = ''}>Contact</Link>
  </nav>
);

// --- Home Component ---
const Home = () => (
  <div style={styles.pageContent}>
    <h1 style={{ color: '#007bff', marginBottom: '15px' }}>Welcome to Our Digital Company</h1>
    <p style={{ lineHeight: '1.6' }}>We are dedicated to delivering excellence in digital transformation, innovation, and strategic consulting for businesses worldwide. Start your future with us today.</p>
  </div>
);

// --- About Component ---
const About = () => (
  <div style={styles.pageContent}>
    <h1 style={{ color: '#28a745', marginBottom: '15px' }}>Our History and Mission</h1>
    <p style={{ lineHeight: '1.6', marginBottom: '15px' }}>Our company has been providing top-notch services since 1990. We specialize in various fields including technology, marketing, and consultancy.</p>
    <p style={{ lineHeight: '1.6' }}>Our mission is to empower our clients with cutting-edge technology and data-driven insights to achieve sustainable growth and market leadership.</p>
  </div>
);
// --- Services Component ---
const Services = () => (
  <div style={styles.pageContent}>
    <h1 style={{ color: '#ffc107', marginBottom: '15px' }}>Expert Services Offered</h1>
    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', lineHeight: '2.0' }}>
      <li><strong style={{ color: '#007bff' }}>Technology Consulting:</strong> Strategic IT planning and cloud migration.</li>
      <li><strong style={{ color: '#007bff' }}>Market Analysis:</strong> Comprehensive market research and trend forecasting.</li>
      <li><strong style={{ color: '#007bff' }}>Product Development:</strong> Full-stack engineering and agile product lifecycle management.</li>
    </ul>
  </div>
);
// --- Contact Component (with State) ---
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submissionMessage, setSubmissionMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Custom success message logic (instead of the forbidden alert())
    if (!formData.name || !formData.email || !formData.message) {
      setSubmissionMessage({ type: 'error', text: 'Please fill in all fields before submitting.' });
      return;
    }

    setSubmissionMessage({ type: 'success', text: `Thank you, ${formData.name}! Your message has been received.` });
    console.log("Form Submitted:", formData);
    
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };
  
  const getMessageStyle = (type) => ({
    ...styles.messageBox,
    backgroundColor: type === 'success' ? '#d4edda' : '#f8d7da',
    color: type === 'success' ? '#155724' : '#721c24',
    border: type === 'success' ? '1px solid #c3e6cb' : '1px solid #f5c6cb',
  });

  return (
    <div style={styles.pageContent}>
      <h1 style={{ color: '#dc3545', marginBottom: '15px' }}>Get in Touch</h1>
      {submissionMessage && <div style={getMessageStyle(submissionMessage.type)}>{submissionMessage.text}</div>}
      <form onSubmit={handleSubmit} style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={styles.formInput}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={styles.formInput}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          style={styles.formTextarea}
        />
        <button type="submit" style={styles.submitButton} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0056b3'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#007bff'}>Send Message</button>
      </form>
    </div>
  );
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
    // Must be wrapped in BrowserRouter for routing to work
    <BrowserRouter>
      <div style={styles.container}>
        <Navbar />
        {/* Routes define which component renders based on the path */}
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
