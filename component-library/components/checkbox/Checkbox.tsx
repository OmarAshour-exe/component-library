import { CheckboxVariant, checkbox } from '@/styled-system/recipes';
import React from 'react';

type checkboxProps = CheckboxVariant & {
    name: string
}

export const Checkbox = (props: checkboxProps) => {
    const { name } = props
    return (
        <label htmlFor={name}>
            <input name={name} className={checkbox()} type="checkbox"></input>
            <span>{name}</span>
        </label>
    )
}
