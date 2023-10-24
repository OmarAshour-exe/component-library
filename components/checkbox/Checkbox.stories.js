import React, {useState} from 'react';
import Checkbox from '/components/checkbox/Checkbox';

export default {
    title: 'Checkbox',
    component: Checkbox,
    tags: ['autodocs'],
};

export const ToggleableCheckbox = () => {
    const [checked, setChecked] = useState(false);
    const handleToggle = () => { setChecked(!checked); };
    return <Checkbox label="Toggle me" checked={checked} onChange={handleToggle} />;
};
