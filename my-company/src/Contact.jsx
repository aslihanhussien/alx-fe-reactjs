import React, { useState } from 'react';

const styles = {
  pageContent: {
    padding: '30px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    minHeight: '400px',
  },
  messageBox: {
    padding: '12px',
    borderRadius: '6px',
    marginBottom: '20px',
    fontWeight: '600',
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
  }
};

export default function Contact() {
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
    if (!formData.name || !formData.email || !formData.message) {
      setSubmissionMessage({ type: 'error', text: 'Please fill in all fields.' });
      return;
    }
    setSubmissionMessage({ type: 'success', text: `Message received from ${formData.name}.` });
    setFormData({ name: '', email: '', message: '' });
  };
  
  const getMessageStyle = (type) => ({
    ...styles.messageBox,
    backgroundColor: type === 'success' ? '#d4edda' : '#f8d7da',
    color: type === 'success' ? '#155724' : '#721c24',
  });

  return (
    <div style={styles.pageContent}>
      <h1 style={{ color: '#dc3545', marginBottom: '15px' }}>Contact Us</h1>
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
        <button type="submit" style={styles.submitButton}>Send Message</button>
      </form>
    </div>
  );
}