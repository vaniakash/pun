import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <FooterTop>
          <FooterLogo>
            <Link to="/">
              <h2>Punjikalens</h2>
              <p>Premium Automotive Photography</p>
            </Link>
          </FooterLogo>
          
          <FooterLinks>
            <FooterSection>
              <h3>Explore</h3>
              <ul>
                <motion.li whileHover={{ x: 5 }}>
                  <Link to="/">Home</Link>
                </motion.li>
                <motion.li whileHover={{ x: 5 }}>
                  <Link to="/about">About</Link>
                </motion.li>
                <motion.li whileHover={{ x: 5 }}>
                  <Link to="/services">Services</Link>
                </motion.li>
                <motion.li whileHover={{ x: 5 }}>
                  <Link to="/gallery">My Work</Link>
                </motion.li>
                <motion.li whileHover={{ x: 5 }}>
                  <Link to="/contact">Contact</Link>
                </motion.li>
              </ul>
            </FooterSection>
            
            <FooterSection>
              <h3>Services</h3>
              <ul>
                <motion.li whileHover={{ x: 5 }}>
                  <Link to="/services">Automotive Photography</Link>
                </motion.li>
                <motion.li whileHover={{ x: 5 }}>
                  <Link to="/services">Event Coverage</Link>
                </motion.li>
                <motion.li whileHover={{ x: 5 }}>
                  <Link to="/services">Commercial Shoots</Link>
                </motion.li>
                <motion.li whileHover={{ x: 5 }}>
                  <Link to="/services">Cinematic Videos</Link>
                </motion.li>
              </ul>
            </FooterSection>
            
            <FooterSection>
              <h3>Contact</h3>
              <ul>
                <motion.li whileHover={{ x: 5 }}>
                  <a href="mailto:info@punjikalens.com">info@punjikalens.com</a>
                </motion.li>
                <motion.li whileHover={{ x: 5 }}>
                  <a href="tel:+919876543210">+91 9876 543 210</a>
                </motion.li>
                <motion.li whileHover={{ x: 5 }}>
                  <address>Dehradun, Uttarakhand, India</address>
                </motion.li>
              </ul>
            </FooterSection>
            
            <FooterSection>
              <h3>Legal</h3>
              <ul>
                <motion.li whileHover={{ x: 5 }}>
                  <Link to="/terms">Terms & Conditions</Link>
                </motion.li>
                <motion.li whileHover={{ x: 5 }}>
                  <Link to="/privacy">Privacy Policy</Link>
                </motion.li>
              </ul>
            </FooterSection>
          </FooterLinks>
        </FooterTop>
        
        <BookCTA>
          <div>
            <h3>Ready to Capture Your Automotive Beauty?</h3>
            <p>Let's create stunning visuals for your prized machines.</p>
          </div>
          <motion.a 
            href="/contact" 
            className="btn btn-book"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Your Session
          </motion.a>
        </BookCTA>
        
        <FooterBottom>
          <SocialLinks>
            <motion.a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              aria-label="Instagram"
            >
              <SocialIcon>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </SocialIcon>
            </motion.a>
            <motion.a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              aria-label="Facebook"
            >
              <SocialIcon>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </SocialIcon>
            </motion.a>
          </SocialLinks>
          
          <Copyright>
            <p>&copy; {currentYear} Punjikalens. All rights reserved.</p>
            <LegalLinks>
              <Link to="/terms">Terms & Conditions</Link> • <Link to="/privacy">Privacy Policy</Link>
            </LegalLinks>
          </Copyright>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
};

// Styled Components
const FooterContainer = styled.footer`
  background-color: var(--color-dark);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 4rem 0 2rem;
`;

const FooterContent = styled.div`
  width: 90%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FooterLogo = styled.div`
  flex: 1;
  min-width: 250px;
  
  h2 {
    font-family: var(--font-heading);
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    
    /* Gold gradient text effect */
    background: var(--gradient-gold);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  p {
    color: var(--color-light-gray);
  }
`;

const FooterLinks = styled.div`
  flex: 2;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const FooterSection = styled.div`
  min-width: 150px;
  
  h3 {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
    color: var(--color-primary);
  }
  
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
  
  li a, li address {
    color: var(--color-light-gray);
    font-style: normal;
    font-size: 0.95rem;
    transition: var(--transition-fast);
    
    &:hover {
      color: var(--color-primary);
    }
  }
`;

const BookCTA = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/path-to-your-image.jpg');
  background-size: cover;
  background-position: center;
  border-radius: var(--border-radius-md);
  padding: 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
  
  p {
    color: var(--color-light-gray);
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    text-align: center;
    
    a {
      width: 100%;
    }
  }
`;

const FooterBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--color-gray);
  color: var(--color-white);
  transition: var(--transition-fast);
  
  &:hover {
    background-color: var(--color-primary);
    color: var(--color-black);
  }
`;

const Copyright = styled.div`
  text-align: center;
  color: var(--color-light-gray);
  font-size: 0.9rem;
  
  p {
    margin-bottom: 0.5rem;
  }
`;

const LegalLinks = styled.div`
  margin-top: 0.5rem;
  font-size: 0.85rem;
  
  a {
    color: var(--color-light-gray);
    transition: var(--transition-fast);
    
    &:hover {
      color: var(--color-primary);
    }
  }
`;

export default Footer; 