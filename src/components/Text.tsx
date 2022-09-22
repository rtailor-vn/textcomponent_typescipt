import React from "react";
import {TextProps} from 'types/TextTypes';

const Text = ({component, children, ...props}: TextProps) => {
    const DynamicTag: React.ReactHTMLElement<HTMLElement>= React.createElement(component || 'div', {...props}, children);
    return DynamicTag;
}

export default Text;