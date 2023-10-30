'use client'

import { dropdown } from '@/styled-system/recipes';
import Link from 'next/link';
import React, { useState } from 'react';

function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={dropdown()}>
            <button className={dropdown({ dropdown: 'title' })} onClick={() => setIsOpen(!isOpen)}>Toggle Dropdown</button>
            {isOpen && (
                <div>
                    <Link className={dropdown({ dropdown: 'hover' })} href="/about">About page</Link>
                    <p>Option B</p>
                    <p>Option C</p>
                </div>
            )}
        </div>
    );
}

export default Dropdown;