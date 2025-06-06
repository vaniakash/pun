import React from 'react';

interface IconProps {
  size?: number;
  color?: string;
}

const CommercialIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor' }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <path d="M12 11v3" />
      <path d="M8 10v5" />
      <path d="M16 10v5" />
    </svg>
  );
};

export default CommercialIcon; 