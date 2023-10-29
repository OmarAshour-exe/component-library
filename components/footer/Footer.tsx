import React from 'react';
import {footer} from "@/styled-system/recipes";

type footerProps = {
    text: string
}
const Footer = (props: footerProps) => {
    const {text} = props
    return (
        <footer className={footer()}>
            <span>{text}</span>
        </footer>
    );
};

export default Footer;
