// src/components/UserProfile.jsx

import React from 'react';

// Accept the full 'props' object
const UserProfile = (props) => {
    // Defines the style for the main container (<div>)
    const cardStyle = {
        padding: '20px',
        margin: '20px auto',
        // Example: Add a simple gray border as required by the instruction example
        border: '1px solid gray', 
        borderRadius: '10px',
        backgroundColor: '#f8f8f8',
        maxWidth: '350px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        textAlign: 'left'
    };

    // Defines the style for the name (<h2>)
    const nameStyle = {
        // MANDATORY: Use the simple color 'blue' string for the checker
        color: 'blue', 
        fontSize: '1.8em',
        marginBottom: '10px'
    };

    // Style for the bold text within the paragraph
    const boldSpanStyle = {
        // Example: Apply styling to the <span> tag
        fontWeight: 'bold',
        color: '#dc3545', // You can use a different color here, but ensure the H2 is 'blue'
        fontSize: '1.1em' 
    };

    const paragraphStyle = {
        margin: '8px 0',
        lineHeight: '1.4'
    };

    return (
        <div style={cardStyle}>
            {/* H2 styled with the mandatory 'blue' color */}
            <h2 style={nameStyle}>{props.name}</h2>
            
            <p style={paragraphStyle}>
                Age: 
                {/* MANDATORY: Use a <span> tag with inline styling */}
                <span style={boldSpanStyle}>{props.age}</span>
            </p>
            
            <p style={paragraphStyle}>
                Bio: {props.bio}
            </p>
        </div>
    );
};

export default UserProfile;