import React from 'react';
import '../style/main.css';

const Button = ({title, onClick}) => {
    return (
        <div className="buttonContainer">
            <button className="button" onClick={onClick}>{title}</button>
        </div>
    );
};

export default Button;