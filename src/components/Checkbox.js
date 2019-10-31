import React from 'react';
import '../style/main.css';

const Checkbox = ({title, checked, onClick}) => {
    return (
        <div>
            <input
                className="regular-checkbox"
                type="checkbox"
                checked={checked}
                onClick={onClick}
            />
            <label>
                {title}
            </label>
        </div>
    );
};

export default Checkbox;