import React, {ClassAttributes, HTMLAttributes, ReactNode} from "react";

export interface TextProps extends HTMLAttributes<any>, ClassAttributes<any>{
    component?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
    children?: ReactNode | string;
}