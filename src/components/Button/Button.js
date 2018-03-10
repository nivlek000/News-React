import React from 'react';

const Button = ({ children, style, ...props }) => {
    const buttonStyle = {
        border: '1px solid',
        margin: '3px',
        cursor: 'pointer',
        backgroundColor: 'aliceblue',
        color: 'blue',
        padding: '2px 10px',
        ...style


    }


    return (
        <button style={buttonStyle} {...props}>
            {children}
        </button>
    );
}

export default Button;