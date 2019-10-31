import React from 'react';
import '../style/main.css';

const Checkbox = ({title, checked, onClick}) => {
    return (
        <div>
            <input
                className="checkmark"
                type="checkbox"
                checked={checked}
                onClick={onClick}
            />
            {title}
        </div>
    );
};

export default Checkbox;