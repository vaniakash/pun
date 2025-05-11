import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'book' | 'outline';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  disabled?: boolean;
  external?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  to,
  href,
  onClick,
  className = '',
  type = 'button',
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  disabled = false,
  external = false,
}) => {
  // Button animation variants
  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: { type: 'spring', stiffness: 400, damping: 10 }
    },
    tap: { scale: 0.95 }
  };

  // Determine the base class based on variant
  const baseClass = `btn ${variant ? `btn-${variant}` : ''} ${size ? `btn-${size}` : ''} ${fullWidth ? 'btn-full' : ''} ${className}`;

  // If it's a react-router link
  if (to) {
    return (
      <StyledButtonLink
        as={motion.div}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        variants={buttonVariants}
        $fullWidth={fullWidth}
      >
        <Link to={to} className={baseClass} role="button">
          {children}
        </Link>
      </StyledButtonLink>
    );
  }

  // If it's an external link
  if (href) {
    return (
      <StyledButtonLink
        as={motion.div}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        variants={buttonVariants}
        $fullWidth={fullWidth}
      >
        <a 
          href={href} 
          className={baseClass} 
          role="button"
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
        >
          {children}
        </a>
      </StyledButtonLink>
    );
  }

  // Default button element
  return (
    <StyledButton
      as={motion.button}
      type={type}
      onClick={onClick}
      className={baseClass}
      disabled={disabled}
      initial="initial"
      whileHover={!disabled ? "hover" : "initial"}
      whileTap={!disabled ? "tap" : "initial"}
      variants={buttonVariants}
      $fullWidth={fullWidth}
    >
      {children}
    </StyledButton>
  );
};

interface StyledProps {
  $fullWidth?: boolean;
}

const StyledButtonLink = styled.div<StyledProps>`
  display: ${props => props.$fullWidth ? 'block' : 'inline-block'};
  width: ${props => props.$fullWidth ? '100%' : 'auto'};
  
  a {
    display: inline-block;
    width: ${props => props.$fullWidth ? '100%' : 'auto'};
  }
`;

const StyledButton = styled(motion.button)<StyledProps>`
  width: ${props => props.$fullWidth ? '100%' : 'auto'};
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export default Button; 