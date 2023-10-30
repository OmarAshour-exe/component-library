'use client'

import { accordion } from '@/styled-system/recipes';
import React, { useState } from 'react';

type AccordionProps = {
    title: string,
    children?: React.ReactNode
}

const Accordion = (props: AccordionProps) => {
    const [isActive, setIsActive] = useState(false)
    const toggleAccordion = () => {
        setIsActive((prevIsActive) => !prevIsActive);
    };

    return (
        <div className={isActive ? accordion({ accordion: 'active' }) : accordion()}>
            <div className={accordion({ accordion: 'title' })} onClick={toggleAccordion}>
                <div>{isActive ? "-" : "+"} {props.title}</div> <button>Button</button>
            </div>
            {isActive && <div>{props.children}</div>}
        </div>
    )
}

export default Accordion;
