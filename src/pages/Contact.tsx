import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicleType: '',
    vehicleModel: '',
    serviceType: '',
    date: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    error: boolean;
    message: string;
  }>({
    submitted: false,
    error: false,
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        error: false,
        message: 'Thank you for your booking request! We will contact you shortly to confirm your session.'
      });
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        vehicleType: '',
        vehicleModel: '',
        serviceType: '',
        date: '',
        message: '',
      });
    }, 1500);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 300, damping: 24 }
    }
  };

  return (
    <>
      <ContactHero>
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Book Your Session
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let's create stunning visuals for your automotive beauty
          </motion.p>
        </div>
      </ContactHero>

      <ContactSection>
        <div className="container">
          <ContactGrid>
            <ContactInfo
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.h2 variants={itemVariants}>Get in Touch</motion.h2>
              <motion.p variants={itemVariants}>
                Ready to capture your automotive beauty in stunning detail? Fill out the booking form or contact us directly using the information below.
              </motion.p>
              
              <motion.div className="info-item" variants={itemVariants}>
                <h3>Email</h3>
                <p>
                  <a href="mailto:info@punjikalens.com">info@punjikalens.com</a>
                </p>
              </motion.div>
              
              <motion.div className="info-item" variants={itemVariants}>
                <h3>Phone</h3>
                <p>
                  <a href="tel:+919876543210">+91 9876 543 210</a>
                </p>
              </motion.div>
              
              <motion.div className="info-item" variants={itemVariants}>
                <h3>Location</h3>
                <p>Dehradun, Uttarakhand, India</p>
              </motion.div>
              
              <motion.div className="info-item" variants={itemVariants}>
                <h3>Working Hours</h3>
                <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
                <p>Sunday: Closed (Special sessions available)</p>
              </motion.div>
              
              <motion.div className="social-links" variants={itemVariants}>
                <h3>Follow Us</h3>
                <div className="social-icons">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">IG</a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">FB</a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YT</a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">TW</a>
                </div>
              </motion.div>
            </ContactInfo>
            
            <ContactFormContainer>
              <motion.div
                className="form-container glass"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h2>Book Your Session</h2>
                {formStatus.submitted ? (
                  <SuccessMessage>
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                    >
                      <div className="success-icon">✓</div>
                      <h3>Booking Request Sent!</h3>
                      <p>{formStatus.message}</p>
                      <Button 
                        variant="primary" 
                        onClick={() => setFormStatus(prev => ({ ...prev, submitted: false }))}
                      >
                        Book Another Session
                      </Button>
                    </motion.div>
                  </SuccessMessage>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="email">Email Address *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="phone">Phone Number *</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="vehicleType">Vehicle Type *</label>
                        <select
                          id="vehicleType"
                          name="vehicleType"
                          value={formData.vehicleType}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select Vehicle Type</option>
                          <option value="superbike">Superbike</option>
                          <option value="sportbike">Sport Bike</option>
                          <option value="cruiser">Cruiser</option>
                          <option value="sportscar">Sports Car</option>
                          <option value="luxury">Luxury Car</option>
                          <option value="suv">SUV</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="vehicleModel">Make & Model *</label>
                        <input
                          type="text"
                          id="vehicleModel"
                          name="vehicleModel"
                          value={formData.vehicleModel}
                          onChange={handleChange}
                          placeholder="e.g., Ducati Panigale V4"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="serviceType">Service Type *</label>
                        <select
                          id="serviceType"
                          name="serviceType"
                          value={formData.serviceType}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select Service</option>
                          <option value="photoshoot">Photo Shoot</option>
                          <option value="videoshoot">Video Shoot</option>
                          <option value="both">Photo & Video</option>
                          <option value="event">Event Coverage</option>
                          <option value="commercial">Commercial Shoot</option>
                        </select>
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="date">Preferred Date *</label>
                        <input
                          type="date"
                          id="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="message">Additional Information</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Tell us about your vision for the shoot, preferred location, or any special requests."
                      ></textarea>
                    </div>
                    
                    <div className="form-submit">
                      <Button 
                        type="submit" 
                        variant="book" 
                        fullWidth
                      >
                        Book Your Session
                      </Button>
                    </div>
                  </form>
                )}
              </motion.div>
            </ContactFormContainer>
          </ContactGrid>
        </div>
      </ContactSection>
      
      <MapSection>
        <div className="map-container">
          {/* Google Maps iframe would go here */}
          <div className="map-placeholder">
            <h3>Punjikalens - Dehradun, India</h3>
            <p>Interactive map would appear here</p>
          </div>
        </div>
      </MapSection>
    </>
  );
};

// Styled Components
const ContactHero = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/path-to-contact-hero.jpg');
  background-size: cover;
  background-position: center;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-top: 70px;
  
  h1 {
    font-size: clamp(2.5rem, 5vw, 4rem);
    margin-bottom: 1rem;
  }
  
  p {
    font-size: clamp(1rem, 2vw, 1.3rem);
    color: var(--color-light-gray);
  }
`;

const ContactSection = styled.section`
  padding: 5rem 0;
  background-color: var(--color-black);
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 3rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled(motion.div)`
  h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
  
  > p {
    margin-bottom: 2rem;
    color: var(--color-light-gray);
  }
  
  .info-item {
    margin-bottom: 1.5rem;
    
    h3 {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
      color: var(--color-primary);
    }
    
    p {
      color: var(--color-light-gray);
      
      a {
        color: var(--color-white);
        transition: var(--transition-fast);
        
        &:hover {
          color: var(--color-primary);
        }
      }
    }
  }
  
  .social-links {
    margin-top: 2rem;
    
    h3 {
      font-size: 1.2rem;
      margin-bottom: 1rem;
      color: var(--color-primary);
    }
    
    .social-icons {
      display: flex;
      gap: 1rem;
      
      a {
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
          transform: translateY(-5px);
        }
      }
    }
  }
`;

const ContactFormContainer = styled.div`
  .form-container {
    padding: 3rem;
    border-radius: var(--border-radius-md);
    
    h2 {
      font-size: 1.8rem;
      margin-bottom: 2rem;
      text-align: center;
    }
    
    .form-group {
      margin-bottom: 1.5rem;
      
      label {
        display: block;
        margin-bottom: 0.5rem;
        font-weight: 500;
      }
      
      input,
      select,
      textarea {
        width: 100%;
        padding: 0.75rem 1rem;
        background-color: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: var(--border-radius-sm);
        color: var(--color-white);
        font-family: var(--font-body);
        font-size: 1rem;
        transition: var(--transition-fast);
        
        &:focus {
          outline: none;
          border-color: var(--color-primary);
          box-shadow: 0 0 0 2px rgba(212, 175, 55, 0.3);
        }
        
        &::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }
      }
      
      textarea {
        resize: vertical;
      }
    }
    
    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;
      
      @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 1rem;
      }
    }
    
    .form-submit {
      margin-top: 2rem;
    }
  }
`;

const SuccessMessage = styled.div`
  text-align: center;
  padding: 2rem 0;
  
  .success-icon {
    width: 80px;
    height: 80px;
    background: var(--gradient-gold);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    color: var(--color-black);
    margin: 0 auto 1.5rem;
  }
  
  h3 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
  
  p {
    color: var(--color-light-gray);
    margin-bottom: 2rem;
  }
`;

const MapSection = styled.section`
  padding: 0;
  height: 400px;
  
  .map-container {
    width: 100%;
    height: 100%;
    
    .map-placeholder {
      width: 100%;
      height: 100%;
      background-color: var(--color-dark-gray);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      
      h3 {
        margin-bottom: 1rem;
      }
      
      p {
        color: var(--color-light-gray);
      }
    }
  }
`;

export default Contact; 