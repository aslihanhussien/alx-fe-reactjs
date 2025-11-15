// src/components/UserProfile.jsx (Fully Styled Version)
import React from 'react';

// Accept the full 'props' object
const UserProfile = (props) => {
    // Style objects for the main container and name
    const cardStyle = {
        padding: '20px',
        margin: '20px auto',
        border: '1px solid #ddd',
        borderRadius: '10px',
        backgroundColor: '#fff',
        maxWidth: '350px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)', // Enhanced shadow
        textAlign: 'left'
    };

    const nameStyle = {
        color: '#3498db',
        borderBottom: '2px solid #3498db',
        paddingBottom: '5px',
        marginBottom: '10px',
        fontSize: '24px' // Added font size
    };

    const paragraphStyle = {
        margin: '8px 0',
        lineHeight: '1.5',
        color: '#555' // A slightly darker color for readability
    };

    const boldStyle = {
        fontWeight: 'bold',
        color: '#333' // Stronger emphasis on the labels
    };

    return (
        <div style={cardStyle}>
            {/* 1. Styled H2 */}
            <h2 style={nameStyle}>{props.name}</h2>
            
            {/* 2. Styled P tag */}
            <p style={paragraphStyle}>
                <strong style={boldStyle}>Age:</strong> {props.age}
            </p>
            
            {/* 3. Styled P tag */}
            <p style={paragraphStyle}>
                <strong style={boldStyle}>Bio:</strong> {props.bio}
            </p>
        </div>
    );
};

export default UserProfile;