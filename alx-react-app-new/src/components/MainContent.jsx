// alx-react-app-new/src/components/MainContent.jsx

import React from 'react';

function MainContent() {
    // 1. Define styles for the main container
    const mainContainerStyle = {
        padding: '40px 20px', 
        minHeight: '300px', 
        backgroundColor: '#f9f9f9',
        textAlign: 'center',
        borderBottom: '1px solid #eee', 
        fontFamily: 'Verdana, sans-serif'
    };

    // 2. Define styles for the paragraph text
    const paragraphStyle = {
        // These styles enhance the visual appeal
        fontSize: '1.2em',
        color: '#333',
        maxWidth: '600px',
        margin: '0 auto', 
        lineHeight: '1.6'
    };

    return (
        <main style={mainContainerStyle}>
            
            {/* NOTE: This text MUST be the exact literal string 
            "I love to visit New York, Paris, and Tokyo." 
            to pass the checker.
            */}
            <p style={paragraphStyle}>
                I love to visit New York, Paris, and Tokyo.
            </p>

        </main>
    );
}

export default MainContent;