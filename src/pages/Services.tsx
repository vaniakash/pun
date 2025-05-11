import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';

interface ServicePackage {
  id: number;
  name: string;
  price: string;
  features: string[];
  popular: boolean;
}

interface ServiceType {
  id: number;
  title: string;
  description: string;
  icon: string;
  image: string;
  packages: ServicePackage[];
}

const Services: React.FC = () => {
  // Array of service types
  const serviceTypes: ServiceType[] = [
    {
      id: 1,
      title: 'Automotive Photography',
      description: 'Professional photography services for cars, motorcycles, and other vehicles, capturing their beauty, design, and character.',
      icon: '📷',
      image: '/path-to-photography-service.jpg',
      packages: [
        {
          id: 101,
          name: 'Basic',
          price: '₹8,500',
          features: [
            '2-hour photo session',
            '10 professionally edited photos',
            '1 location',
            'Digital delivery',
            'Commercial usage rights'
          ],
          popular: false
        },
        {
          id: 102,
          name: 'Premium',
          price: '₹15,000',
          features: [
            '4-hour photo session',
            '25 professionally edited photos',
            'Up to 2 locations',
            'Digital delivery',
            'Commercial usage rights',
            'Express delivery (48 hours)',
            'Basic retouching'
          ],
          popular: true
        },
        {
          id: 103,
          name: 'Ultimate',
          price: '₹25,000',
          features: [
            'Full-day photo session',
            '50+ professionally edited photos',
            'Multiple locations',
            'Digital & printed delivery',
            'Full commercial usage rights',
            'Express delivery (24 hours)',
            'Advanced retouching',
            'Behind-the-scenes photos'
          ],
          popular: false
        }
      ]
    },
    {
      id: 2,
      title: 'Cinematic Videography',
      description: 'Stunning cinematic videos that highlight the beauty, power, and sound of your vehicle, perfect for personal or commercial use.',
      icon: '🎬',
      image: '/path-to-videography-service.jpg',
      packages: [
        {
          id: 201,
          name: 'Basic',
          price: '₹15,000',
          features: [
            '3-hour video session',
            '60-90 second final video',
            '1 location',
            'Basic color grading',
            'Background music',
            'Digital delivery',
            'YouTube/social media optimization'
          ],
          popular: false
        },
        {
          id: 202,
          name: 'Premium',
          price: '₹25,000',
          features: [
            '6-hour video session',
            '2-3 minute final video',
            'Up to 2 locations',
            'Professional color grading',
            'Custom music selection',
            'Digital delivery',
            'YouTube/social media optimization',
            'Basic drone footage'
          ],
          popular: true
        },
        {
          id: 203,
          name: 'Ultimate',
          price: '₹40,000',
          features: [
            'Full-day video session',
            '3-5 minute final video',
            'Multiple locations',
            'Premium color grading',
            'Custom music selection',
            'Voice-over option',
            'Extensive drone footage',
            'Raw footage included'
          ],
          popular: false
        }
      ]
    },
    {
      id: 3,
      title: 'Event Coverage',
      description: 'Comprehensive photo and video coverage for automotive events, races, launches, and meets to capture all the action and excitement.',
      icon: '🎭',
      image: '/path-to-event-service.jpg',
      packages: [
        {
          id: 301,
          name: 'Basic',
          price: '₹20,000',
          features: [
            'Half-day event coverage',
            '100+ edited photos',
            'Highlight video (2-3 minutes)',
            'Digital delivery',
            'Social media ready content',
            '1 photographer'
          ],
          popular: false
        },
        {
          id: 302,
          name: 'Premium',
          price: '₹35,000',
          features: [
            'Full-day event coverage',
            '250+ edited photos',
            'Highlight video (4-5 minutes)',
            'Digital delivery',
            'Social media ready content',
            '2 photographers',
            'Basic drone coverage'
          ],
          popular: true
        },
        {
          id: 303,
          name: 'Ultimate',
          price: '₹60,000',
          features: [
            'Multi-day event coverage',
            '500+ edited photos',
            'Full event video (10+ minutes)',
            'Highlights reel (3-5 minutes)',
            'Digital & physical delivery',
            'Team of photographers',
            'Extensive drone coverage',
            'Live social media updates'
          ],
          popular: false
        }
      ]
    },
    {
      id: 4,
      title: 'Commercial Photography',
      description: 'High-end commercial photography services for dealerships, manufacturers, and automotive businesses to showcase products effectively.',
      icon: '💼',
      image: '/path-to-commercial-service.jpg',
      packages: [
        {
          id: 401,
          name: 'Basic',
          price: '₹30,000',
          features: [
            'Half-day studio session',
            'Up to 5 vehicles',
            '10 edited photos per vehicle',
            'Commercial usage rights',
            'Digital delivery',
            'Basic retouching'
          ],
          popular: false
        },
        {
          id: 402,
          name: 'Premium',
          price: '₹50,000',
          features: [
            'Full-day studio session',
            'Up to 10 vehicles',
            '15 edited photos per vehicle',
            'Commercial usage rights',
            'Digital delivery',
            'Professional retouching',
            'Product catalog layout'
          ],
          popular: true
        },
        {
          id: 403,
          name: 'Ultimate',
          price: 'Custom',
          features: [
            'Multi-day shoots',
            'Unlimited vehicles',
            '20+ edited photos per vehicle',
            'Full commercial usage rights',
            'Digital & print-ready files',
            'Advanced retouching',
            'Ad campaign ready',
            'Marketing consultation'
          ],
          popular: false
        }
      ]
    }
  ];

  const [activeService, setActiveService] = useState<number>(1);

  // Find the current active service
  const currentService = serviceTypes.find(service => service.id === activeService);

  return (
    <>
      <ServicesHero>
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Professional automotive photography and videography services
          </motion.p>
        </div>
      </ServicesHero>

      <ServicesIntro>
        <div className="container">
          <motion.div 
            className="intro-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Capturing Automotive Excellence</h2>
            <p>
              At Punjikalens, we offer a range of specialized photography and videography services designed 
              to showcase your automotive beauty in stunning detail. From individual vehicle shoots to 
              comprehensive event coverage, our services are tailored to meet your specific needs and vision.
            </p>
            <p>
              Each service includes professional editing, high-resolution deliverables, and the expertise of 
              our automotive visual specialists who understand the unique characteristics and highlights of 
              different vehicles.
            </p>
          </motion.div>
        </div>
      </ServicesIntro>

      <ServicesTabs>
        <div className="container">
          <div className="tabs-container">
            {serviceTypes.map((service) => (
              <motion.button
                key={service.id}
                className={`tab-button ${activeService === service.id ? 'active' : ''}`}
                onClick={() => setActiveService(service.id)}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="icon">{service.icon}</span>
                <span>{service.title}</span>
              </motion.button>
            ))}
          </div>
          
          {currentService && (
            <motion.div 
              className="service-detail"
              key={currentService.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="service-info">
                <div className="service-text">
                  <h2>{currentService.title}</h2>
                  <p>{currentService.description}</p>
                </div>
                <div className="service-image">
                  <img src={currentService.image} alt={currentService.title} />
                </div>
              </div>
              
              <div className="packages-container">
                <h3>Choose Your Package</h3>
                <div className="packages-grid">
                  {currentService.packages.map((pkg) => (
                    <motion.div 
                      key={pkg.id}
                      className={`package-card ${pkg.popular ? 'popular' : ''}`}
                      whileHover={{ y: -10, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)' }}
                    >
                      {pkg.popular && <div className="popular-tag">Most Popular</div>}
                      <h4>{pkg.name}</h4>
                      <div className="price">{pkg.price}</div>
                      <ul className="features">
                        {pkg.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                      <Button variant={pkg.popular ? 'book' : 'primary'} to="/contact" fullWidth>
                        Book This Package
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </ServicesTabs>

      <ProcessSection>
        <div className="container">
          <SectionHeader
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Our Process</h2>
            <p>How we craft stunning automotive visuals</p>
          </SectionHeader>
          
          <div className="process-steps">
            <motion.div 
              className="process-step"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="step-number">1</div>
              <h3>Consultation</h3>
              <p>We start with a detailed consultation to understand your vehicle, vision, and specific requirements.</p>
            </motion.div>
            
            <motion.div 
              className="process-step"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="step-number">2</div>
              <h3>Planning</h3>
              <p>Our team scouts locations, plans lighting setups, and creates a detailed shot list tailored to your vehicle.</p>
            </motion.div>
            
            <motion.div 
              className="process-step"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="step-number">3</div>
              <h3>Shooting Day</h3>
              <p>On the day of the shoot, our professional team works methodically to capture your vehicle at its best.</p>
            </motion.div>
            
            <motion.div 
              className="process-step"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="step-number">4</div>
              <h3>Post-Production</h3>
              <p>Our editing team carefully processes each image or video clip to ensure perfect color, contrast, and detail.</p>
            </motion.div>
            
            <motion.div 
              className="process-step"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="step-number">5</div>
              <h3>Delivery</h3>
              <p>The final images or videos are delivered in high resolution, ready for print, web, or social media use.</p>
            </motion.div>
          </div>
        </div>
      </ProcessSection>

      <FAQSection>
        <div className="container">
          <SectionHeader
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Frequently Asked Questions</h2>
            <p>Answers to common questions about our services</p>
          </SectionHeader>
          
          <div className="faq-container">
            <motion.div 
              className="faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5 }}
            >
              <h3>How far in advance should I book a photography session?</h3>
              <p>We recommend booking at least 2-3 weeks in advance for standard shoots, and 4-6 weeks for commercial or event coverage to ensure availability and proper planning.</p>
            </motion.div>
            
            <motion.div 
              className="faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <h3>Do you travel outside of Dehradun for shoots?</h3>
              <p>Yes, we travel throughout India for shoots. Travel expenses will be added for locations outside Dehradun, with exact costs depending on distance and duration.</p>
            </motion.div>
            
            <motion.div 
              className="faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <h3>What happens if it rains on the day of an outdoor shoot?</h3>
              <p>In case of unfavorable weather, we'll reschedule the shoot to the next available date at no additional cost, or we can adapt to indoor locations if available.</p>
            </motion.div>
            
            <motion.div 
              className="faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -5 }}
            >
              <h3>How long does it take to receive the final edited photos/videos?</h3>
              <p>Standard delivery is 1-2 weeks for photos and 2-3 weeks for videos. Express delivery options are available with our Premium and Ultimate packages.</p>
            </motion.div>
            
            <motion.div 
              className="faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <h3>Can I request specific shots or styles for my vehicle?</h3>
              <p>Absolutely! During the consultation phase, we'll discuss your vision, preferences, and any specific angles or styles you want for your vehicle.</p>
            </motion.div>
            
            <motion.div 
              className="faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <h3>Do you offer custom packages for special requirements?</h3>
              <p>Yes, we offer customized packages for clients with specific needs. Please contact us to discuss your requirements and we'll create a tailored solution.</p>
            </motion.div>
          </div>
        </div>
      </FAQSection>

      <CTASection>
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Ready to Showcase Your Vehicle?</h2>
            <p>Book a session today and let us capture your automotive pride in stunning detail</p>
            <Button variant="book" to="/contact" size="large">Book Your Session</Button>
          </motion.div>
        </div>
      </CTASection>
    </>
  );
};

// Styled Components
const ServicesHero = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/path-to-services-hero.jpg');
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

const ServicesIntro = styled.section`
  padding: 5rem 0;
  background-color: var(--color-black);
  
  .intro-content {
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
    
    h2 {
      font-size: clamp(1.8rem, 3vw, 2.5rem);
      margin-bottom: 1.5rem;
    }
    
    p {
      margin-bottom: 1.5rem;
      font-size: 1.1rem;
      color: var(--color-light-gray);
      
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;

const ServicesTabs = styled.section`
  padding: 5rem 0;
  background-color: var(--color-dark);
  
  .tabs-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 3rem;
    
    .tab-button {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.75rem 1.5rem;
      background-color: var(--color-dark-gray);
      border: none;
      border-radius: var(--border-radius-md);
      color: var(--color-white);
      font-family: var(--font-body);
      font-weight: 500;
      font-size: 1rem;
      cursor: pointer;
      transition: all 0.3s ease;
      
      .icon {
        font-size: 1.2rem;
      }
      
      &:hover {
        background-color: var(--color-gray);
      }
      
      &.active {
        background-color: var(--color-primary);
        color: var(--color-black);
      }
    }
  }
  
  .service-detail {
    .service-info {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      margin-bottom: 3rem;
      
      @media (max-width: 768px) {
        grid-template-columns: 1fr;
      }
      
      .service-text {
        h2 {
          font-size: 2rem;
          margin-bottom: 1.5rem;
        }
        
        p {
          color: var(--color-light-gray);
          font-size: 1.1rem;
          line-height: 1.6;
        }
      }
      
      .service-image {
        img {
          width: 100%;
          height: 300px;
          object-fit: cover;
          border-radius: var(--border-radius-md);
          box-shadow: var(--shadow-md);
        }
      }
    }
    
    .packages-container {
      h3 {
        text-align: center;
        margin-bottom: 2rem;
        font-size: 1.8rem;
      }
      
      .packages-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
        
        .package-card {
          background-color: var(--color-dark-gray);
          border-radius: var(--border-radius-md);
          padding: 2.5rem;
          position: relative;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.1);
          
          &.popular {
            background-color: rgba(44, 44, 44, 0.8);
            border: 1px solid var(--color-primary);
            transform: scale(1.05);
            z-index: 2;
            box-shadow: var(--shadow-lg);
            
            @media (max-width: 992px) {
              transform: scale(1);
            }
          }
          
          .popular-tag {
            position: absolute;
            top: -15px;
            left: 50%;
            transform: translateX(-50%);
            background: var(--gradient-gold);
            color: var(--color-black);
            padding: 0.5rem 1.5rem;
            border-radius: var(--border-radius-sm);
            font-weight: 600;
            font-size: 0.9rem;
            white-space: nowrap;
          }
          
          h4 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
            text-align: center;
          }
          
          .price {
            font-size: 2.5rem;
            font-weight: 700;
            text-align: center;
            margin-bottom: 1.5rem;
            color: var(--color-primary);
            font-family: var(--font-heading);
          }
          
          .features {
            list-style: none;
            margin-bottom: 2rem;
            
            li {
              position: relative;
              padding-left: 1.5rem;
              margin-bottom: 0.8rem;
              color: var(--color-light-gray);
              
              &::before {
                content: '✓';
                position: absolute;
                left: 0;
                color: var(--color-primary);
              }
            }
          }
          
          button, a {
            margin-top: auto;
          }
        }
      }
    }
  }
`;

const SectionHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 3rem;
  
  h2 {
    font-size: clamp(2rem, 4vw, 3rem);
    margin-bottom: 0.5rem;
  }
  
  p {
    color: var(--color-light-gray);
    font-size: 1.1rem;
  }
`;

const ProcessSection = styled.section`
  padding: 6rem 0;
  background-color: var(--color-black);
  
  .process-steps {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    margin-top: 3rem;
    
    .process-step {
      flex: 1;
      min-width: 200px;
      max-width: 280px;
      text-align: center;
      padding: 2rem;
      background-color: var(--color-dark-gray);
      border-radius: var(--border-radius-md);
      box-shadow: var(--shadow-md);
      
      .step-number {
        width: 50px;
        height: 50px;
        background: var(--gradient-gold);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        font-weight: 600;
        color: var(--color-black);
        margin: 0 auto 1.5rem;
      }
      
      h3 {
        margin-bottom: 1rem;
        font-size: 1.3rem;
      }
      
      p {
        color: var(--color-light-gray);
        font-size: 0.95rem;
      }
    }
  }
`;

const FAQSection = styled.section`
  padding: 6rem 0;
  background-color: var(--color-dark);
  
  .faq-container {
    max-width: 900px;
    margin: 0 auto;
    
    .faq-item {
      background-color: var(--color-dark-gray);
      border-radius: var(--border-radius-md);
      padding: 1.5rem 2rem;
      margin-bottom: 1.5rem;
      box-shadow: var(--shadow-sm);
      transition: all 0.3s ease;
      
      &:hover {
        box-shadow: var(--shadow-md);
      }
      
      h3 {
        margin-bottom: 0.75rem;
        font-size: 1.2rem;
        color: var(--color-primary);
      }
      
      p {
        color: var(--color-light-gray);
        font-size: 1rem;
      }
    }
  }
`;

const CTASection = styled.section`
  padding: 6rem 0;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/path-to-cta-bg.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  
  .cta-content {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
    
    h2 {
      font-size: clamp(1.8rem, 4vw, 2.5rem);
      margin-bottom: 1rem;
    }
    
    p {
      color: var(--color-light-gray);
      margin-bottom: 2rem;
      font-size: 1.1rem;
    }
  }
`;

export default Services; 