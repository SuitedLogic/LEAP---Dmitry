import { SVGProps } from 'react';

export interface BaseIconProps {
  size?: number;
  width?: number;
  height?: number;
  color?: string;
  backgroundColor?: string;
  className?: string;
}

export interface IconProps extends BaseIconProps, Omit<SVGProps<SVGSVGElement>, keyof BaseIconProps> {}

export type IconComponent = React.FC<IconProps>;

export interface IconRegistry {
  [key: string]: IconComponent;
}