import React from 'react';

export enum HeadingLevel {
    H1 = 'h1',
    H2 = 'h2',
    H3 = 'h3',
    H4 = 'h4',
    H5 = 'h5',
    H6 = 'h6',
}

export interface HeadingProps {
    id?: string;
    level: HeadingLevel;
    className?: string;
    style?: React.CSSProperties;
    children: React.ReactNode;
}

export const Heading: React.FC<HeadingProps> = (props) => {
    let commonClasses = `font-normal leading-normal mt-0 mb-2 ${props.className}`;

    switch (props.level) {
        case HeadingLevel.H1: 
            return <h1 id={props.id??''} className={`text-4xl ${commonClasses} font-bold`} style={props.style}>{props.children}</h1>
        case HeadingLevel.H2:
            return <h2 id={props.id??''} className={`text-3xl ${commonClasses} font-semibold`} style={props.style}>{props.children}</h2>
        case HeadingLevel.H3:
            return <h3 id={props.id??''} className={`text-2xl ${commonClasses}`} style={props.style}>{props.children}</h3>
        case HeadingLevel.H4:
            return <h4 id={props.id??''} className={`text-xl ${commonClasses} font-bold`} style={props.style}>{props.children}</h4>
        case HeadingLevel.H5:
            return <h5 id={props.id??''} className={`text-xl ${commonClasses} font-semibold`} style={props.style}>{props.children}</h5>
        case HeadingLevel.H6:
            return <h6 id={props.id??''} className={`text-lg ${commonClasses} font-medium`} style={props.style}>{props.children}</h6>
        default:
            return <h1 id={props.id??''} className={`text-6xl ${commonClasses}`} style={props.style}>{props.children}</h1>
    }
    
}