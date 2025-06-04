import React from 'react';

export interface IconProps extends Omit<React.SVGProps<SVGSVGElement>, 'width' | 'height'> {
  size?: number;
  width?: number;
  height?: number;
  color?: string;
  backgroundColor?: string;
}

export const IconWrapper: React.FC<IconProps> = ({
  size,
  width,
  height,
  backgroundColor,
  children,
  ...props
}) => {
  const finalWidth = size ?? width ?? 24;
  const finalHeight = size ?? height ?? 24;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={finalWidth}
      height={finalHeight}
      viewBox="0 0 24 24"
      fill={backgroundColor || 'none'}
      {...props}
    >
      {children}
    </svg>
  );
};