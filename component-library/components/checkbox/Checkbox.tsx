import { CheckboxVariant, checkbox } from '@/styled-system/recipes';
import React from 'react';

type checkboxProps = CheckboxVariant & {
    label: string
    disabled?: boolean
}

export const Checkbox = (props: checkboxProps) => {
    const { label ,disabled = false } = props
    return (
        <label htmlFor={label}>
            <input name={label} className={checkbox()} type="checkbox" disabled={disabled}></input>
            <span>{label}</span>
        </label>
    )
}
