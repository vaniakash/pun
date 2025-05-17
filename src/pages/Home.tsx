import React, { useRef, memo } from 'react';
import styled from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '../components/ui/Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

// Performance optimization: Memoize brand item component
const BrandItem = memo(({ brand }: { brand: { id: number, name: string, logo: string } }) => (
  <motion.div 
    key={brand.id} 
    className="brand-item"
    whileHover={{ scale: 1.05 }}
  >
    <img 
      src={brand.logo} 
      alt={brand.name} 
      loading="lazy"
      width="120" 
      height="60" 
    />
  </motion.div>
));

const Home: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const heroYOffset = useTransform(scrollYProgress, [0, 1], [0, 50]);

  // Function to scroll to the about section
  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Brands data - limit to fewer brands for better performance
  const brands = [
    { id: 1, name: 'BMW', logo: 'assets/images/brands/bmw logo.webp' },
    { id: 2, name: 'Audi', logo: 'assets/images/brands/audi.avif' },
    { id: 3, name: 'Porsche', logo: 'assets/images/brands/porche.png' },
    { id: 4, name: 'Hero', logo: 'assets/images/brands/Hero_MotoCorp-Logo.wine.png' },
    { id: 5, name: 'KTM', logo: 'assets/images/brands/ktml.jpg' },
    { id: 6, name: 'Ducati', logo: 'assets/images/brands/ducati-logo-11563160638f7zwepy3oa.png' },
    { id: 7, name: 'Triumph', logo: 'assets/images/brands/triump.png' },
    { id: 8, name: 'Kawasaki', logo: 'assets/images/brands/kawasaki.jpg' },
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
          <div className="hero-image"></div>
          <div className="overlay"></div>
        </motion.div>
        
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
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
          transition={{ delay: 0.8 }}
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
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
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
              className="about-images"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <div className="images-grid">
                <div className="image-container primary">
                  <img 
                    src="assets/images/compressed/bmw/DSC00497.webp" 
                    alt="BMW automotive photography by Punjikalens" 
                    loading="lazy"
                    width="600"
                    height="400"
                  />
                </div>
                <div className="image-container secondary">
                  <img 
                    src="assets/images/compressed/ducati/DSC00928.webp" 
                    alt="Ducati motorcycle photography by Punjikalens" 
                    loading="lazy"
                    width="400"
                    height="300"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </AboutSection>

      {/* Featured Work Section */}
      <FeaturedSection>
        <div className="container">
          <SectionHeader
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <h2>Featured Work</h2>
            <p>Explore some of our finest automotive captures</p>
          </SectionHeader>
          
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            className="featured-slider"
          >
            <SwiperSlide>
              <div className="slide-content">
                <div className="slide-image">
                  <img 
                    src="assets/images/compressed/ducati/DSC08382.webp" 
                    alt="Ducati motorcycle photography by Punjikalens"
                    loading="lazy" 
                    width="800"
                    height="600"
                  />
                </div>
                <div className="slide-info">
                  <h3>Trackside Assembly</h3>
                  <p>Riders gear up, moments before the action begins. Captured by PunjikaLens..</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-content">
                <div className="slide-image">
                  <img 
                    src="assets/images/compressed/ducati/DSC05282.webp" 
                    alt="Ducati motorcycle detail photography by Punjikalens"
                    loading="lazy" 
                    width="800"
                    height="600"
                  />
                </div>
                <div className="slide-info">
                  <h3>Full Throttlee</h3>
                  <p>A rider blitzes down the track in perfect form. Shot by PunjikaLens.</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-content">
                <div className="slide-image">
                  <img 
                    src="assets/images/compressed/ducati/DSC00481.webp" 
                    alt="Ducati action photography by Punjikalens"
                    loading="lazy" 
                    width="800"
                    height="600"
                  />
                </div>
                <div className="slide-info">
                  <h3>Precision in Motion</h3>
                  <p>A high-speed capture of a superbike rider carving through the track with perfect control and lean. Shot by PunjikaLens.</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          
          <motion.div 
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: 0.2 }}
          >
            <Button variant="primary" to="/gallery">View Full Gallery</Button>
          </motion.div>
        </div>
      </FeaturedSection>

      {/* Brands Section - Optimized */}
      <BrandsSection>
        <div className="container">
          <SectionHeader
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <h2>Brands We've Worked With</h2>
            <p>Trusted by leading automotive brands</p>
          </SectionHeader>
          
          <div className="brands-slider">
            <div className="slider-track">
              {brands.map(brand => (
                <BrandItem key={brand.id} brand={brand} />
              ))}
              {/* Limit duplicates for better performance */}
              {brands.slice(0, 8).map(brand => (
                <BrandItem key={`duplicate-${brand.id}`} brand={brand} />
              ))}
            </div>
          </div>
        </div>
      </BrandsSection>
      
      {/* CTA Section */}
      <CTASection>
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
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

// Styled Components - Optimized
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
    will-change: transform, opacity;
    
    .hero-image {
      width: 100%;
      height: 100%;
      background-image: url('assets/images/compressed/nature/DSC05693.webp');
      background-size: cover;
      background-position: center;
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
    25% {
      opacity: 1;
    }
    33% {
      opacity: 1;
      transform: rotate(45deg) translate(5px, 5px);
    }
    67% {
      opacity: 1;
      transform: rotate(45deg) translate(10px, 10px);
    }
    100% {
      opacity: 0;
      transform: rotate(45deg) translate(15px, 15px);
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
    
    .about-text, .about-images {
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
    
    .about-images {
      .images-grid {
        position: relative;
        height: 450px;
        
        .image-container {
          border-radius: var(--border-radius-md);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
          transition: all 0.3s ease;
          position: absolute;
          
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
            transition: transform 0.3s ease;
          }
          
          &:hover {
            z-index: 2;
            img {
              transform: scale(1.03);
            }
          }
          
          &.primary {
            width: 75%;
            height: 350px;
            top: 0;
            right: 0;
            z-index: 1;
            border: 5px solid var(--color-white);
            transform: rotate(2deg);
          }
          
          &.secondary {
            width: 60%;
            height: 250px;
            left: 0;
            bottom: 0;
            border: 5px solid var(--color-primary);
            transform: rotate(-3deg);
          }
        }
      }
    }
  }
  
  @media (max-width: 992px) {
    .about-content {
      .about-images {
        .images-grid {
          height: 400px;
          
          .image-container {
            &.primary {
              width: 70%;
            }
            
            &.secondary {
              width: 55%;
            }
          }
        }
      }
    }
  }
  
  @media (max-width: 768px) {
    .about-content {
      .about-images {
        margin-top: 2rem;
        
        .images-grid {
          height: 350px;
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
      height: 60vh;
      max-height: 500px;
      
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
      animation: scroll 60s linear infinite;
      width: fit-content;
      will-change: transform;
      
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
      transition: transform 0.3s ease;
      position: relative;
      text-align: center;
      
      img {
        max-width: 100%;
        max-height: 80px;
        filter: brightness(1.1);
        transition: all 0.3s ease;
        object-fit: contain;
      }
    }
  }
  
  @media (max-width: 768px) {
    .brands-slider {
      .slider-track {
        animation: scroll 40s linear infinite;
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

const CTASection = styled.section`
  padding: 6rem 0;
  background: linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('assets/images/compressed/ducati/automative.webp');
  background-size: cover;
  background-position: center;
  
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

export default React.memo(Home); 