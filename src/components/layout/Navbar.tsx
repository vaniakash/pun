import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <StyledHeader scrolled={scrolled}>
      <Container>
        <LogoContainer>
          <Link to="/">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <LogoImage src="/assets/images/logo/logo.png" alt="Punjikalens - Premium Automotive Photography" />
            </motion.div>
          </Link>
        </LogoContainer>

        <HamburgerButton onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
          <span></span>
          <span></span>
          <span></span>
        </HamburgerButton>

        <NavLinks isOpen={isOpen}>
          <motion.ul>
            {navLinks.map((link) => (
              <motion.li
                key={link.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={link.url}
                  className={location.pathname === link.url ? 'active' : ''}
                >
                  {link.text}
                </Link>
              </motion.li>
            ))}
            <li>
              <BookButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-book"
              >
                Book Your Session
              </BookButton>
            </li>
          </motion.ul>
        </NavLinks>

        <AnimatePresence>
          {isOpen && (
            <MobileMenu
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ul>
                {navLinks.map((link) => (
                  <motion.li
                    key={link.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      to={link.url}
                      className={location.pathname === link.url ? 'active' : ''}
                    >
                      {link.text}
                    </Link>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2, delay: 0.4 }}
                >
                  <BookButtonMobile className="btn btn-book">
                    Book Your Session
                  </BookButtonMobile>
                </motion.li>
              </ul>
            </MobileMenu>
          )}
        </AnimatePresence>
      </Container>
    </StyledHeader>
  );
};

// Navigation links data
const navLinks = [
  {
    id: 1,
    text: 'Home',
    url: '/',
  },
  {
    id: 2,
    text: 'About',
    url: '/about',
  },
  {
    id: 3,
    text: 'Services',
    url: '/services',
  },
  {
    id: 4,
    text: 'My Work',
    url: '/gallery',
  },
  {
    id: 5,
    text: 'Contact',
    url: '/contact',
  },
];

// Styled Components
interface HeaderProps {
  scrolled: boolean;
}

const StyledHeader = styled.header<HeaderProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: all 0.3s ease-in-out;
  background: ${props => props.scrolled ? 'rgba(10, 10, 10, 0.95)' : 'transparent'};
  backdrop-filter: ${props => props.scrolled ? 'blur(10px)' : 'none'};
  box-shadow: ${props => props.scrolled ? '0 4px 20px rgba(0, 0, 0, 0.3)' : 'none'};
  height: ${props => props.scrolled ? '70px' : '90px'};
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  width: 90%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const LogoContainer = styled.div`
  z-index: 2;
`;

const LogoImage = styled.img`
  height: 50px;
  width: auto;
  object-fit: contain;
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    height: 40px;
  }
`;

interface NavProps {
  isOpen: boolean;
}

const NavLinks = styled.nav<NavProps>`
  @media (max-width: 768px) {
    display: none;
  }

  ul {
    display: flex;
    align-items: center;
    list-style: none;
    gap: 2rem;
  }

  li a {
    font-family: var(--font-body);
    font-weight: 500;
    font-size: 1rem;
    color: var(--color-white);
    position: relative;
    padding: 0.5rem 0;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background: var(--color-primary);
      transition: width 0.3s ease;
    }
    
    &:hover::after, &.active::after {
      width: 100%;
    }
    
    &.active {
      color: var(--color-primary);
    }
  }
`;

const HamburgerButton = styled.button<NavProps>`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1000;
  
  span {
    width: 2rem;
    height: 0.25rem;
    background: var(--color-white);
    border-radius: 10px;
    transition: all 0.3s ease;
    position: relative;
    transform-origin: 1px;
    
    &:first-child {
      transform: ${({ isOpen }) => isOpen ? 'rotate(45deg)' : 'rotate(0)'};
    }
    
    &:nth-child(2) {
      opacity: ${({ isOpen }) => isOpen ? '0' : '1'};
      transform: ${({ isOpen }) => isOpen ? 'translateX(20px)' : 'translateX(0)'};
    }
    
    &:nth-child(3) {
      transform: ${({ isOpen }) => isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
  
  @media (max-width: 768px) {
    display: flex;
  }
`;

const MobileMenu = styled(motion.div)`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(10, 10, 10, 0.95);
  backdrop-filter: blur(10px);
  padding: 6rem 2rem 2rem;
  overflow: hidden;
  
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  
  li {
    text-align: center;
  }
  
  li a {
    font-family: var(--font-body);
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--color-white);
    
    &.active {
      color: var(--color-primary);
    }
  }
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const BookButton = styled(motion.a)`
  cursor: pointer;
  animation: pulse 2s infinite;
`;

const BookButtonMobile = styled.a`
  display: inline-block;
  margin-top: 1rem;
  width: 80%;
  animation: pulse 2s infinite;
`;

export default Navbar; 