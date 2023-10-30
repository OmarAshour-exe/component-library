'use client'

import React, { useState } from 'react';
import { collapseRecipe } from './Collapse.recipe';
import { collapse } from '@/styled-system/recipes/collapse';

type CollapseProps = {
    title: string,
    children?: React.ReactNode
}

const Collapse = (props: CollapseProps) => {
    const [isActive, setIsActive] = useState(false)
    const toggleAccordion = () => {
        setIsActive((prevIsActive) => !prevIsActive);
    };

    return (
        <div className={isActive ? collapse({ collapse: 'active' }) : collapse()}>
            <div className={collapse({ collapse: 'title' })} onClick={toggleAccordion}>
                <div>{isActive ? "-" : "+"} {props.title}</div> <button>Button</button>
            </div>
            {isActive && <div>{props.children}</div>}
        </div>
    )
}

export default Collapse;
