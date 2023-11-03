import React from 'react';
import {outputs} from "@/styled-system/recipes/outputs";

type OutputProps = {
    items: string[];
};

const Outputs = ({items}: OutputProps) => {
    return (
        <ul>
            {items.map((item, index) => (
                <li className={index % 2 === 0 ? outputs({output: 'li'}) : outputs({output: 'secli'})} key={index}>
                    {item}
                    {index < items.length - 1}
                </li>
            ))}
        </ul>
    );
};

export default Outputs;
