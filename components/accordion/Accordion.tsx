'use client'

import { accordion } from '@/styled-system/recipes';
import React, { useState } from 'react';

type AccordionProps = {
    title: string
    content: string
}

const Accordion = (props: AccordionProps) => {
    const [isActive, setIsActive] = useState(false)

    return (
        <div className={isActive ? accordion({ accordion: 'active' }) : accordion()}>
            <div className={accordion({ accordion: 'title' })} onClick={() => setIsActive((prevIsActive) => !prevIsActive)}>
                <div>{isActive ? "-" : "+"} {props.title}</div> <button>Button</button>
            </div>
            {isActive && <div>{props.content}</div>}
        </div>
    )
}

export default Accordion;
