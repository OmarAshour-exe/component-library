import React from 'react';
import './checkbox.css'; // Import your CSS file

function Checkbox({ label, checked, onChange }) {
    return (
        <label className="custom-checkbox">
            <input checked={checked} onChange={onChange} type="checkbox" />
            {label}
        </label>
    );
}

export default Checkbox;
