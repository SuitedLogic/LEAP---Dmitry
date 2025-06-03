import React from 'react';
import { IconWrapper, IconProps } from '../IconWrapper';

export const LightningBolt: React.FC<IconProps> = (props) => {
  return (
    <IconWrapper stroke="currentColor" fill="none" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13 10V3L4 14h7v7l9-11h-7z"
    />
    </IconWrapper>
  );
};

export const LockClosed: React.FC<IconProps> = (props) => {
  return (
    <IconWrapper stroke="currentColor" fill="none" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
      />
    </IconWrapper>
  );
};


export const TrendingUp: React.FC<IconProps> = (props) => {
  return (
    <IconWrapper stroke="currentColor" fill="none" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
      />
    </IconWrapper>
  );
};


export const Alert: React.FC<IconProps> = (props) => {
  return (
    <IconWrapper fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
        clipRule="evenodd"
      />
    </IconWrapper>
  );
};

export const LoadingSpinner: React.FC<IconProps> = (props) => {
  return (
    <IconWrapper className="h-5 w-5 text-red-500" fill="none" {...props}>
      <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
      ></circle>
      <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </IconWrapper>
  );
};