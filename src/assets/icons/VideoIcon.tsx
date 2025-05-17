import React from 'react';

interface IconProps {
  size?: number;
  color?: string;
}

const VideoIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor' }) => {
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
      <path d="M22 8l-6 4 6 4V8z" />
      <rect x="2" y="6" width="14" height="12" rx="2" ry="2" />
      <line x1="6" y1="12" x2="6" y2="12.01" />
    </svg>
  );
};

export default VideoIcon; 