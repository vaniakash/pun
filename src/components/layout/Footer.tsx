import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Social media icon imports would go here (use react-icons or similar)

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
                  <Link to="/gallery">Gallery</Link>
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
            >
              <SocialIcon>IG</SocialIcon>
            </motion.a>
            <motion.a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
            >
              <SocialIcon>FB</SocialIcon>
            </motion.a>
            <motion.a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
            >
              <SocialIcon>YT</SocialIcon>
            </motion.a>
            <motion.a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
            >
              <SocialIcon>TW</SocialIcon>
            </motion.a>
          </SocialLinks>
          
          <Copyright>
            <p>&copy; {currentYear} Punjikalens. All rights reserved.</p>
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
  font-size: 1.2rem;
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
`;

export default Footer; 