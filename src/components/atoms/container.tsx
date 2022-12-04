import React from 'react';

export interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = (props) => {
  return <div className={`w-100 max-w-[1000px] mx-auto ${props.className}`}>{props.children}</div>;
};
