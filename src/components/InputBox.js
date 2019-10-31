import React from 'react';
import '../style/main.css';

const InputBox = ({label, placeholder, value, onChange, name}) => {
    return (
        <div>
            <div className="textLabel">
                {label}
            </div>
            <input
                className="textbox"
                type="text"
                value={value}
                name={name}
                id={name}
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
    );
};

export default InputBox;