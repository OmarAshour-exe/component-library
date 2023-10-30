'use client'
import { accordion } from '@/styled-system/recipes/accordion';
import React, { useState } from 'react';

type AccordionProps = {
    items: { title: string; child?: React.ReactNode }[];
}

const Accordion = ({ items }: AccordionProps) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(-3);

    const handleClick = (index: number) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div>
            {items.map((item, index) => (
                <div key={item.title}>
                    <div className={accordion()}>
                        <button className={accordion({accordion: 'title'})} onClick={() => handleClick(index)}>{item.title}</button>
                        {index === activeIndex && <p>{item.child}</p>}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Accordion;
