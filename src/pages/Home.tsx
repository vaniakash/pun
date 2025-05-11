import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const Home: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const heroYOffset = useTransform(scrollYProgress, [0, 1], [0, 100]);

  // Function to scroll to the about section
  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Brands data with local logo paths
  const brands = [
    { id: 1, name: 'BMW', logo: '/assets/images/brands/bmw logo.webp' },
    { id: 2, name: 'Audi', logo: '/assets/images/brands/audi.avif' },
    { id: 3, name: 'Porsche', logo: '/assets/images/brands/porche.png' },
    { id: 4, name: 'Hero', logo: '/assets/images/brands/Hero_MotoCorp-Logo.wine.png' },
    { id: 5, name: 'KTM', logo: '/assets/images/brands/ktml.jpg' },
    { id: 6, name: 'Ducati', logo: '/assets/images/brands/ducati-logo-11563160638f7zwepy3oa.png' },
    { id: 7, name: 'Triumph', logo: '/assets/images/brands/triump.png' },
    { id: 8, name: 'Kawasaki', logo: '/assets/images/brands/kawasaki.jpg' },
    { id: 9, name: 'Alpine Star', logo: '/assets/images/brands/alpinestar.jpg' },
    { id: 10, name: 'Apex Racing', logo: '/assets/images/brands/apexracing.png' },
    { id: 11, name: 'Indian Sports Carnival', logo: '/assets/images/brands/indiansportscarnival.jpeg' },
    { id: 12, name: 'ISBK', logo: '/assets/images/brands/isbk.png' },
    { id: 13, name: 'Nurifumi', logo: '/assets/images/brands/nurifumi.png' },
    { id: 14, name: 'Pahadi Racing', logo: '/assets/images/brands/pahadi_racing.webp' },
    { id: 15, name: 'Race Dynamic India', logo: '/assets/images/brands/racedynamic_india.png' },
    { id: 16, name: 'Red FM', logo: '/assets/images/brands/redfm.png' },
    { id: 17, name: 'Sajoba', logo: '/assets/images/brands/sajoba.jpeg' },
    { id: 18, name: 'Speed Striker', logo: '/assets/images/brands/speedstriker.jpeg' },
    { id: 19, name: 'TRT Racing', logo: '/assets/images/brands/trtworacing.png' },
  ];

  // Services data
  const services = [
    {
      id: 1,
      title: 'Automotive Photography',
      description: 'High-end automotive photography to showcase your prized vehicles in stunning detail.',
      icon: '🏎️',
      image: '/path-to-automotive-photo.jpg',
    },
    {
      id: 2,
      title: 'Event Coverage',
      description: 'Professional photography and videography for automotive events, races, and shows.',
      icon: '🎭',
      image: '/path-to-event-photo.jpg',
    },
    {
      id: 3,
      title: 'Commercial Shoots',
      description: 'Commercial photography services for manufacturers, dealerships, and automotive businesses.',
      icon: '💼',
      image: '/path-to-commercial-photo.jpg',
    },
    {
      id: 4,
      title: 'Cinematic Videos',
      description: 'Breathtaking cinematic videos that capture the essence and power of your vehicles.',
      icon: '🎬',
      image: '/path-to-video-frame.jpg',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <HeroSection ref={heroRef}>
        <motion.div
          className="hero-background"
          style={{
            opacity: heroOpacity,
            scale: heroScale,
            y: heroYOffset
          }}
        >
          <video autoPlay muted loop playsInline>
            <source src="/path-to-your-video.mp4" type="video/mp4" />
          </video>
          <div className="overlay"></div>
        </motion.div>
        
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1>Capturing Automotive Excellence</h1>
          <p>Premium automotive photography and videography in Dehradun</p>
          <div className="hero-buttons">
            <Button variant="book" to="/contact">Book Your Session</Button>
            <Button variant="outline" to="/gallery">View Portfolio</Button>
          </div>
        </motion.div>
        
        <ScrollIndicator 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          onClick={scrollToAbout}
        >
          <div className="chevron-container">
            <div className="chevron"></div>
            <div className="chevron"></div>
            <div className="chevron"></div>
          </div>
          <div className="scroll-text">EXPLORE</div>
        </ScrollIndicator>
      </HeroSection>

      {/* About Section */}
      <AboutSection ref={aboutRef}>
        <div className="container">
          <div className="about-content">
            <motion.div 
              className="about-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <h2>The Art of Automotive Imagery</h2>
              <p>
                At Punjikalens, we specialize in capturing the beauty, power, and engineering excellence of automobiles through premium photography and videography.
              </p>
              <p>
                Based in Dehradun, our passion for automotive photography has led us to work with renowned brands and create stunning visual content that highlights the true essence of these mechanical masterpieces.
              </p>
              <Button variant="primary" to="/about">Learn More About Us</Button>
            </motion.div>
            
            <motion.div 
              className="about-image"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <div className="image-container">
                <img src="/path-to-your-about-image.jpg" alt="Automotive Photographer at work" />
              </div>
            </motion.div>
          </div>
        </div>
      </AboutSection>

      {/* Services Section */}
      <ServicesSection>
        <div className="container">
          <SectionHeader
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Our Services</h2>
            <p>Professional automotive visual services tailored to your needs</p>
          </SectionHeader>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <ServiceCard 
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)' }}
              >
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                  <div className="service-icon">{service.icon}</div>
                </div>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <Link to="/services" className="learn-more">
                    Learn More <span>&rarr;</span>
                  </Link>
                </div>
              </ServiceCard>
            ))}
          </div>
          
          <motion.div 
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ delay: 0.4 }}
          >
            <Button variant="primary" to="/services">View All Services</Button>
          </motion.div>
        </div>
      </ServicesSection>

      {/* Featured Work Section */}
      <FeaturedSection>
        <div className="container">
          <SectionHeader
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Featured Work</h2>
            <p>Explore some of our finest automotive captures</p>
          </SectionHeader>
          
          <Swiper
            modules={[EffectFade, Pagination, Autoplay]}
            effect="fade"
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            className="featured-slider"
          >
            {[1, 2, 3, 4].map((item) => (
              <SwiperSlide key={item}>
                <div className="slide-content">
                  <div className="slide-image">
                    <img src={`/path-to-featured-${item}.jpg`} alt={`Featured work ${item}`} />
                  </div>
                  <div className="slide-info">
                    <h3>Project Title {item}</h3>
                    <p>Short description of this featured automotive photography project.</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          <motion.div 
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ delay: 0.2 }}
          >
            <Button variant="primary" to="/gallery">View Full Gallery</Button>
          </motion.div>
        </div>
      </FeaturedSection>

      {/* Brands Section */}
      <BrandsSection>
        <div className="container">
          <SectionHeader
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Brands We've Worked With</h2>
            <p>Trusted by leading automotive brands</p>
          </SectionHeader>
          
          <div className="brands-slider">
            <div className="slider-track">
              {brands.map(brand => (
                <motion.div 
                  key={brand.id} 
                  className="brand-item"
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  <img src={brand.logo} alt={brand.name} />
                </motion.div>
              ))}
              {/* Duplicate for infinite loop effect */}
              {brands.map(brand => (
                <motion.div 
                  key={`duplicate-${brand.id}`} 
                  className="brand-item"
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  <img src={brand.logo} alt={brand.name} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </BrandsSection>
      
      {/* Testimonials Section */}
      <TestimonialsSection>
        <div className="container">
          <SectionHeader
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Client Testimonials</h2>
            <p>What our clients say about our work</p>
          </SectionHeader>
          
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="testimonials-slider"
          >
            {[1, 2, 3, 4, 5].map((item) => (
              <SwiperSlide key={item}>
                <TestimonialCard>
                  <div className="quote-icon">❝</div>
                  <p className="testimonial-text">
                    "The photography service provided by Punjikalens was exceptional. They captured my car in ways I never imagined possible, highlighting every curve and detail perfectly."
                  </p>
                  <div className="testimonial-author">
                    <div className="author-image">
                      <img src={`/path-to-client-${item}.jpg`} alt={`Client ${item}`} />
                    </div>
                    <div className="author-info">
                      <h4>Client Name</h4>
                      <p>Superbike Owner</p>
                    </div>
                  </div>
                </TestimonialCard>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </TestimonialsSection>
      
      {/* CTA Section */}
      <CTASection>
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Ready to Showcase Your Automotive Beauty?</h2>
            <p>Let's create stunning visual content for your prized machines.</p>
            <Button variant="book" to="/contact" size="large">Book Your Session Today</Button>
          </motion.div>
        </div>
      </CTASection>
    </>
  );
};

// Styled Components
const HeroSection = styled.section`
  height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;
  
  .hero-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    
    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7));
    }
  }
  
  .hero-content {
    padding: 0 1rem;
    max-width: 900px;
    z-index: 2;
    
    h1 {
      font-size: clamp(2.5rem, 6vw, 4.5rem);
      margin-bottom: 1.5rem;
      text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
    }
    
    p {
      font-size: clamp(1.2rem, 3vw, 1.8rem);
      margin-bottom: 2.5rem;
      text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
      color: var(--color-off-white);
    }
    
    .hero-buttons {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
    }
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  
  .chevron-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0px;
  }
  
  .chevron {
    width: 20px;
    height: 8px;
    opacity: 0;
    transform: scale(0.3);
    animation: move-chevron 3s ease-out infinite;
    border-right: 2px solid var(--color-primary);
    border-bottom: 2px solid var(--color-primary);
    transform: rotate(45deg);
    
    &:nth-child(1) {
      animation-delay: 0s;
    }
    
    &:nth-child(2) {
      animation-delay: 0.5s;
    }
    
    &:nth-child(3) {
      animation-delay: 1s;
    }
  }
  
  @keyframes move-chevron {
    0% {
      opacity: 0;
      transform: rotate(45deg) translate(-10px, -10px);
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: rotate(45deg) translate(10px, 10px);
    }
  }
  
  .scroll-text {
    font-size: 0.8rem;
    letter-spacing: 3px;
    font-weight: 500;
    text-transform: uppercase;
    color: var(--color-primary);
    margin-top: 4px;
  }
  
  &:hover {
    .scroll-text {
      color: white;
    }
    .chevron {
      border-color: white;
    }
  }
`;

const AboutSection = styled.section`
  padding: 8rem 0;
  background-color: var(--color-dark);
  
  .about-content {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 3rem;
    
    .about-text, .about-image {
      flex: 1;
      min-width: 300px;
    }
    
    .about-text {
      h2 {
        margin-bottom: 1.5rem;
      }
      
      p {
        margin-bottom: 1.5rem;
        color: var(--color-light-gray);
      }
      
      button {
        margin-top: 1rem;
      }
    }
    
    .about-image {
      .image-container {
        border-radius: var(--border-radius-md);
        overflow: hidden;
        box-shadow: var(--shadow-lg);
        transform: rotate(2deg);
        border: 5px solid var(--color-white);
        
        img {
          width: 100%;
          height: auto;
          display: block;
          transition: transform 0.5s ease;
          
          &:hover {
            transform: scale(1.05);
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

const ServicesSection = styled.section`
  padding: 6rem 0;
  background-color: var(--color-black);
  
  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
  }
  
  .text-center {
    text-align: center;
    margin-top: 2rem;
  }
`;

const ServiceCard = styled(motion.div)`
  background-color: var(--color-dark-gray);
  border-radius: var(--border-radius-md);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  .service-image {
    height: 200px;
    position: relative;
    overflow: hidden;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }
    
    .service-icon {
      position: absolute;
      bottom: -20px;
      right: 20px;
      width: 50px;
      height: 50px;
      background: var(--gradient-gold);
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.5rem;
      box-shadow: var(--shadow-md);
    }
  }
  
  .service-content {
    padding: 1.5rem;
    
    h3 {
      margin-bottom: 1rem;
    }
    
    p {
      color: var(--color-light-gray);
      margin-bottom: 1.5rem;
    }
    
    .learn-more {
      display: inline-flex;
      align-items: center;
      color: var(--color-primary);
      font-weight: 500;
      transition: gap 0.3s ease;
      gap: 0.5rem;
      
      span {
        transition: transform 0.3s ease;
      }
      
      &:hover {
        gap: 0.7rem;
        
        span {
          transform: translateX(3px);
        }
      }
    }
  }
  
  &:hover {
    .service-image img {
      transform: scale(1.1);
    }
  }
`;

const FeaturedSection = styled.section`
  padding: 6rem 0;
  background-color: var(--color-dark);
  
  .featured-slider {
    margin-bottom: 3rem;
    border-radius: var(--border-radius-md);
    overflow: hidden;
    box-shadow: var(--shadow-lg);
    
    .swiper-pagination-bullet {
      background-color: var(--color-white);
      opacity: 0.5;
      
      &-active {
        background-color: var(--color-primary);
        opacity: 1;
      }
    }
    
    .slide-content {
      position: relative;
      height: 70vh;
      max-height: 600px;
      
      .slide-image {
        width: 100%;
        height: 100%;
        
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      
      .slide-info {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 2rem;
        background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
        
        h3 {
          margin-bottom: 0.5rem;
          font-size: 1.5rem;
        }
        
        p {
          color: var(--color-light-gray);
        }
      }
    }
  }
  
  .text-center {
    text-align: center;
  }
`;

const BrandsSection = styled.section`
  padding: 5rem 0;
  background-color: var(--color-black);
  overflow: hidden;
  
  .brands-slider {
    width: 100%;
    overflow: hidden;
    margin: 2rem 0;
    padding: 1rem 0;
    
    .slider-track {
      display: flex;
      animation: scroll 40s linear infinite;
      width: fit-content;
      
      @keyframes scroll {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      }
    }
    
    .brand-item {
      flex: 0 0 auto;
      width: 160px;
      height: 90px;
      margin: 0 1.5rem;
      padding: 0.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: transparent;
      border: none;
      border-radius: var(--border-radius-sm);
      transition: all 0.3s ease;
      position: relative;
      text-align: center;
      
      img {
        max-width: 100%;
        max-height: 80px;
        filter: brightness(1.1);
        transition: all 0.3s ease;
        object-fit: contain;
      }
      
      &:hover {
        transform: translateY(-5px) scale(1.05);
        
        img {
          filter: brightness(1.3);
          transform: scale(1.05);
        }
      }
    }
  }
  
  @media (max-width: 768px) {
    .brands-slider {
      .slider-track {
        animation: scroll 30s linear infinite;
      }
      
      .brand-item {
        width: 140px;
        height: 80px;
        margin: 0 1rem;
        
        img {
          max-height: 60px;
        }
      }
    }
  }
`;

const TestimonialsSection = styled.section`
  padding: 6rem 0;
  background-color: var(--color-dark);
  
  .testimonials-slider {
    padding-bottom: 3rem;
    
    .swiper-pagination-bullet {
      background-color: var(--color-white);
      opacity: 0.5;
      
      &-active {
        background-color: var(--color-primary);
        opacity: 1;
      }
    }
  }
`;

const TestimonialCard = styled.div`
  background-color: var(--color-dark-gray);
  border-radius: var(--border-radius-md);
  padding: 2rem;
  height: 100%;
  min-height: 300px;
  position: relative;
  display: flex;
  flex-direction: column;
  
  .quote-icon {
    font-size: 4rem;
    line-height: 1;
    color: var(--color-primary);
    opacity: 0.2;
    position: absolute;
    top: 10px;
    left: 20px;
  }
  
  .testimonial-text {
    flex: 1;
    font-style: italic;
    color: var(--color-light-gray);
    position: relative;
    z-index: 1;
    margin-bottom: 1.5rem;
  }
  
  .testimonial-author {
    display: flex;
    align-items: center;
    gap: 1rem;
    
    .author-image {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      overflow: hidden;
      
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    
    .author-info {
      h4 {
        font-size: 1rem;
        margin-bottom: 0;
      }
      
      p {
        font-size: 0.9rem;
        color: var(--color-light-gray);
      }
    }
  }
`;

const CTASection = styled.section`
  padding: 6rem 0;
  background: linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('/path-to-cta-bg.jpg');
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

export default Home; 