import React, { useState } from 'react';

/**
 * A simple counter component that manages a number state 
 * and provides controls to increment, decrement, and reset it.
 */
function Counter() {
    // 1. Initialize state with the useState hook, starting the count at 0
    const [count, setCount] = useState(0);

    // Styles for presentation
    const containerStyle = {
        padding: '20px',
        margin: '30px auto',
        border: '1px solid #ddd',
        borderRadius: '12px',
        backgroundColor: '#f4f7f9',
        maxWidth: '400px',
        textAlign: 'center',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
    };
    
    const countDisplayStyle = {
        fontSize: '3em',
        fontWeight: '700',
        color: count > 0 ? '#2ecc71' : (count < 0 ? '#e74c3c' : '#34495e'),
        margin: '15px 0'
    };
    
    const buttonGroupStyle = {
        display: 'flex',
        justifyContent: 'center',
        gap: '10px'
    };
    
    const baseButtonStyle = {
        padding: '10px 15px',
        borderRadius: '8px',
        cursor: 'pointer',
        border: 'none',
        fontWeight: '600',
        transition: 'background-color 0.2s, transform 0.1s'
    };
    
    // Specific button styles for actions
    const incrementStyle = { ...baseButtonStyle, backgroundColor: '#3498db', color: 'white' };
    const decrementStyle = { ...baseButtonStyle, backgroundColor: '#e74c3c', color: 'white' };
    const resetStyle = { ...baseButtonStyle, backgroundColor: '#bdc3c7', color: '#2c3e50' };


    return (
        <div style={containerStyle}>
            <h2>Simple Counter</h2>
            
            <p style={{ color: '#555', fontSize: '1.2em' }}>Current Count:</p>
            
            {/* Display the current count from state */}
            <div style={countDisplayStyle}>{count}</div>
            
            <div style={buttonGroupStyle}>
                {/* Increment Button */}
                <button 
                    onClick={() => setCount(count + 1)} 
                    style={incrementStyle}
                >
                    Increment
                </button>
                
                {/* Decrement Button */}
                <button 
                    onClick={() => setCount(count - 1)} 
                    style={decrementStyle}
                >
                    Decrement
                </button>
                
                {/* Reset Button */}
                <button 
                    onClick={() => setCount(0)} 
                    style={resetStyle}
                >
                    Reset
                </button>
            </div>
        </div>
    );
}

export default Counter;