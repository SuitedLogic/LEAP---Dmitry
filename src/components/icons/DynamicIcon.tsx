import React from 'react';
import { IconProps } from './types';
import { iconRegistry, IconName } from './registry';

interface DynamicIconProps extends IconProps {
  name: IconName;
}

export const DynamicIcon: React.FC<DynamicIconProps> = ({ name, ...props }) => {
  const IconComponent = iconRegistry[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return <IconComponent {...props} />;
};