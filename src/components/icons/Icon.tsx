import React from 'react';
import { IconProps } from './types';

export const Icon: React.FC<IconProps> = ({
  size = 24,
//   color = 'currentColor',
  backgroundColor,
  children,
//   style,
  ...props
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={backgroundColor || 'none'}
    //   stroke={color}
    //   strokeWidth="2"
    //   strokeLinecap="round"
    //   strokeLinejoin="round"
    //   style={style}
      {...props}
    >
      {children}
    </svg>
  );
};