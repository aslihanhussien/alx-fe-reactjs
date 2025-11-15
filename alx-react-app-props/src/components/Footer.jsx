// src/components/Footer.jsx

import React from 'react';

function Footer() {
    return (
        <footer style={{ 
            backgroundColor: '#282c34', 
            padding: '10px', 
            color: 'white', 
            textAlign: 'center',
            fontSize: '0.9em',
            borderRadius: '0 0 8px 8px'
        }}>
            <p>© 2023 City Lovers</p>
        </footer>
    );
}

export default Footer;