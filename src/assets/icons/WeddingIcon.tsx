import React from 'react';

interface IconProps {
  size?: number;
  color?: string;
}

const WeddingIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor' }) => {
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
      <path d="M8 19h8a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2z" />
      <path d="M12 4a2 2 0 1 0 0 4 2 2 0 1 0 0-4z" />
      <path d="M16 11V9a4 4 0 0 0-8 0v2" />
      <path d="M9 14h6" />
    </svg>
  );
};

export default WeddingIcon; 