// src/components/Footer.jsx

import React from 'react';

function Footer() {
    // 1. Define styles for the main footer container
    const footerStyle = {
        backgroundColor: '#2c3e50', // A slightly richer dark color
        padding: '15px 10px', // Increased vertical padding
        color: '#ecf0f1', // Light, soft color for text
        textAlign: 'center',
        fontSize: '0.9em',
        borderTop: '3px solid #3498db', // Adds a colored line separator
        fontFamily: 'Arial, sans-serif'
    };

    // 2. Define styles for the paragraph text
    const copyrightTextStyle = {
        margin: 0, // Remove default paragraph margin
        letterSpacing: '0.5px'
    };

    return (
        <footer style={footerStyle}>
            <p style={copyrightTextStyle}>
                &copy; 2025 My React App | Built with Love 🌍
            </p>
        </footer>
    );
}

export default Footer;