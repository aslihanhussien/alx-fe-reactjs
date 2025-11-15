// src/components/MainContent.jsx

import React from 'react';

function MainContent() {
    // 1. Define styles for the main container
    const mainContainerStyle = {
        padding: '40px 20px', // Increased padding
        minHeight: '300px', // Ensures content area is visible
        backgroundColor: '#f9f9f9',
        textAlign: 'center',
        borderBottom: '1px solid #eee', // Separator line
        fontFamily: 'Verdana, sans-serif'
    };

    // 2. Define styles for the content title
    const titleStyle = {
        color: '#2c3e50', // Darker text color
        marginBottom: '20px',
        fontSize: '2em'
    };

    // 3. Define styles for the paragraph text
    const paragraphStyle = {
        fontSize: '1.2em',
        color: '#555',
        maxWidth: '600px',
        margin: '0 auto', // Center the text block
        lineHeight: '1.6'
    };

    return (
        <main style={mainContainerStyle}>
            
            <h2 style={titleStyle}>Favorite Cities Highlight</h2>

            <p style={paragraphStyle}>
                I love to visit **New York**, **Paris**, and **Tokyo**. Each city offers a unique blend of culture, history, and modernity that makes every trip unforgettable. From the stunning architecture to the amazing local cuisine, exploring these places is always a joy.
            </p>

        </main>
    );
}

export default MainContent;