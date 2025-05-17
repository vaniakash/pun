import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';

const About: React.FC = () => {
  // Timeline data for experience
  const timeline = [
    {
      id: 1,
      year: '2022',
      title: 'Beginning the Journey',
      description: 'Started as an automotive enthusiast photographer, capturing friends\' bikes and cars with passion in Dehradun.',
    },
    {
      id: 2,
      year: '2023',
      title: 'Expanding Skills',
      description: 'Developed expertise in video editing and graphic design, creating more dynamic automotive content.',
    },
    {
      id: 3,
      year: '2024',
      title: 'Brand Collaborations',
      description: 'First major brand collaborations, documenting high-octane motorsports events across Uttarakhand.',
    },
    {
      id: 4,
      year: '2025',
      title: 'Studio Expansion',
      description: 'Plans to expand Punjikalens studio with advanced equipment and broader service offerings.',
    },
  ];

  return (
    <>
      <AboutHero>
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Punjikalens
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            The story behind Sagar Pun, Dehradun's premium automotive photographer
          </motion.p>
        </div>
      </AboutHero>

      <AboutSection>
        <div className="container">
          <AboutGrid>
            <motion.div 
              className="about-image"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <div className="photographer-image">
                <img 
                  src="assets/images/compressed/punimage/BVP06350.webp" 
                  alt="Professional automotive photographer from Punjikalens capturing stunning vehicle photography in Dehradun" 
                  width="600"
                  height="800"
                  loading="lazy"
                />
              </div>
            </motion.div>
            
            <motion.div 
              className="about-content"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <h2>The Passion Behind the Lens</h2>
              <p>
                Hello, I'm SAGAR PUN known as punjikalens. My journey as an automotive photographer began with a simple love for machines and a camera in hand.
              </p>
              <p>
                Based in the scenic mountains of Dehradun, I combine my passion for automotive excellence with technical photography skills to create visual stories that capture the essence of each vehicle.
              </p>
              <p>
                With 3 years of experience working with leading automotive brands, I've developed a unique style that emphasizes the power, design, and emotion that these machines evoke.
              </p>
              <p>
                What sets Punjikalens apart is our attention to detail, understanding of automotive engineering, and ability to find the perfect setting that complements each vehicle's character.
              </p>
              
              <div className="signature">
                <img 
                  src="assets/images/logo/logo.png" 
                  alt="Punjikalens - Automotive Photographer's Professional Signature" 
                  width="200"
                  height="80"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </AboutGrid>
        </div>
      </AboutSection>

      <MissionSection>
        <div className="container">
          <motion.div 
            className="mission-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Our Mission</h2>
            <p>
              At Punjikalens, our mission is to elevate automotive photography to an art form, celebrating the engineering marvels that are modern vehicles through stunning visuals that tell their unique stories.
            </p>
            <p>
              We believe every vehicle has a personality and character that deserves to be captured in its full glory, whether it's the raw power of a superbike, the elegant lines of a luxury car, or the rugged charm of an off-roader.
            </p>
            
            <div className="vision-values">
              <div className="vision">
                <h3>Our Vision</h3>
                <p>To become India's most sought-after automotive visual content creator, known for exceptional quality and innovative approaches to showcasing automotive beauty.</p>
              </div>
              
              <div className="values">
                <h3>Our Values</h3>
                <ul>
                  <li>Technical Excellence</li>
                  <li>Creative Innovation</li>
                  <li>Attention to Detail</li>
                  <li>Client Satisfaction</li>
                  <li>Automotive Passion</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </MissionSection>

      <TimelineSection>
        <div className="container">
          <SectionHeader
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h2>My Journey</h2>
            <p>The evolution of Punjikalens through the years</p>
          </SectionHeader>
          
          <div className="timeline">
            {timeline.map((item, index) => (
              <motion.div 
                key={item.id}
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="timeline-content">
                  <div className="year">{item.year}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </TimelineSection>

      <SkillsSection>
        <div className="container">
          <SectionHeader
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Visual Excellence</h2>
            <p>Where creativity meets technical precision</p>
          </SectionHeader>
          
          <ExpertiseGrid>
            <motion.div 
              className="expertise-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -15, boxShadow: '0 15px 30px rgba(226, 194, 84, 0.2)' }}
            >
              <div className="expertise-icon">🏎️</div>
              <h3>Automotive Photography</h3>
              <div className="expertise-meter">
                <span className="level expert">Expert</span>
              </div>
              <p>Capturing the soul of machines through dynamic compositions and perfect lighting that highlights every curve and detail.</p>
            </motion.div>

            <motion.div 
              className="expertise-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -15, boxShadow: '0 15px 30px rgba(226, 194, 84, 0.2)' }}
            >
              <div className="expertise-icon">🎬</div>
              <h3>Cinematic Videography</h3>
              <div className="expertise-meter">
                <span className="level advanced">Advanced</span>
              </div>
              <p>Creating immersive visual stories that convey speed, power and emotion through dynamic shooting and editing techniques.</p>
            </motion.div>

            <motion.div 
              className="expertise-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -15, boxShadow: '0 15px 30px rgba(226, 194, 84, 0.2)' }}
            >
              <div className="expertise-icon">💫</div>
              <h3>Post-Processing</h3>
              <div className="expertise-meter">
                <span className="level expert">Expert</span>
              </div>
              <p>Transforming raw footage into stunning visual masterpieces through color grading, retouching, and creative effects.</p>
            </motion.div>

            <motion.div 
              className="expertise-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -15, boxShadow: '0 15px 30px rgba(226, 194, 84, 0.2)' }}
            >
              <div className="expertise-icon">💡</div>
              <h3>Lighting Design</h3>
              <div className="expertise-meter">
                <span className="level advanced">Advanced</span>
              </div>
              <p>Crafting dramatic and evocative moods through expert manipulation of light and shadow to enhance automotive features.</p>
            </motion.div>

            <motion.div 
              className="expertise-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ y: -15, boxShadow: '0 15px 30px rgba(226, 194, 84, 0.2)' }}
            >
              <div className="expertise-icon">🚁</div>
              <h3>Aerial Photography</h3>
              <div className="expertise-meter">
                <span className="level intermediate">Intermediate</span>
              </div>
              <p>Delivering breathtaking perspectives that showcase vehicles in their environment from unique and impossible angles.</p>
            </motion.div>

            <motion.div 
              className="expertise-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ y: -15, boxShadow: '0 15px 30px rgba(226, 194, 84, 0.2)' }}
            >
              <div className="expertise-icon">🎨</div>
              <h3>Creative Direction</h3>
              <div className="expertise-meter">
                <span className="level advanced">Advanced</span>
              </div>
              <p>Developing compelling visual concepts that tell the unique story of each vehicle, from concept to execution.</p>
            </motion.div>
          </ExpertiseGrid>
        </div>
      </SkillsSection>

      <CTASection>
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Ready to Work With Us?</h2>
            <p>Let's create stunning visuals of your automotive pride and joy</p>
            <div className="cta-buttons">
              <Button variant="book" to="/contact" size="large">Book a Session</Button>
              <Button variant="outline" to="/gallery">View Our Work</Button>
            </div>
          </motion.div>
        </div>
      </CTASection>
    </>
  );
};

// Styled Components
const AboutHero = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('assets/images/compressed/ducati/automative.webp');
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

const AboutSection = styled.section`
  padding: 6rem 0;
  background-color: var(--color-black);
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 3rem;
  align-items: center;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
  
  .about-image {
    .photographer-image {
      position: relative;
      border-radius: var(--border-radius-md);
      overflow: hidden;
      box-shadow: var(--shadow-lg);
      
      &::before {
        content: '';
        position: absolute;
        top: -20px;
        left: -20px;
        width: 100px;
        height: 100px;
        background-color: var(--color-primary);
        opacity: 0.2;
        z-index: -1;
        border-radius: var(--border-radius-md);
      }
      
      &::after {
        content: '';
        position: absolute;
        bottom: -20px;
        right: -20px;
        width: 100px;
        height: 100px;
        background-color: var(--color-primary);
        opacity: 0.2;
        z-index: -1;
        border-radius: var(--border-radius-md);
      }
      
      img {
        width: 100%;
        height: auto;
        display: block;
      }
    }
  }
  
  .about-content {
    h2 {
      font-size: clamp(1.8rem, 3vw, 2.5rem);
      margin-bottom: 1.5rem;
    }
    
    p {
      margin-bottom: 1.5rem;
      font-size: 1.05rem;
      color: var(--color-light-gray);
    }
    
    .signature {
      margin-top: 2rem;
      
      img {
        max-width: 200px;
        height: auto;
      }
    }
  }
`;

const MissionSection = styled.section`
  padding: 5rem 0;
  background-color: var(--color-dark);
  
  .mission-content {
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
    }
    
    .vision-values {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      margin-top: 3rem;
      text-align: left;
      
      @media (max-width: 768px) {
        grid-template-columns: 1fr;
      }
      
      h3 {
        color: var(--color-primary);
        margin-bottom: 1rem;
        font-size: 1.5rem;
      }
      
      ul {
        list-style: none;
        
        li {
          position: relative;
          padding-left: 1.5rem;
          margin-bottom: 0.5rem;
          color: var(--color-light-gray);
          
          &::before {
            content: '✓';
            position: absolute;
            left: 0;
            color: var(--color-primary);
          }
        }
      }
    }
  }
`;

const TimelineSection = styled.section`
  padding: 6rem 0;
  background-color: var(--color-black);
  
  .timeline {
    position: relative;
    max-width: 1200px;
    margin: 2rem auto 0;
    
    &::after {
      content: '';
      position: absolute;
      width: 6px;
      background-color: var(--color-gray);
      top: 0;
      bottom: 0;
      left: 50%;
      margin-left: -3px;
      
      @media (max-width: 768px) {
        left: 31px;
      }
    }
    
    .timeline-item {
      padding: 10px 40px;
      position: relative;
      width: 50%;
      box-sizing: border-box;
      
      @media (max-width: 768px) {
        width: 100%;
        padding-left: 70px;
        padding-right: 25px;
      }
      
      &::after {
        content: '';
        position: absolute;
        width: 25px;
        height: 25px;
        right: -12.5px;
        background-color: var(--color-primary);
        border: 4px solid var(--color-dark);
        top: 15px;
        border-radius: 50%;
        z-index: 1;
        
        @media (max-width: 768px) {
          left: 20px;
          right: auto;
        }
      }
      
      &.left {
        left: 0;
        
        @media (max-width: 768px) {
          left: 0;
        }
      }
      
      &.right {
        left: 50%;
        
        @media (max-width: 768px) {
          left: 0;
        }
        
        &::after {
          left: -12.5px;
          
          @media (max-width: 768px) {
            left: 20px;
          }
        }
      }
    }
    
    .timeline-content {
      padding: 20px 30px;
      background-color: var(--color-dark-gray);
      position: relative;
      border-radius: var(--border-radius-md);
      
      .year {
        display: inline-block;
        padding: 5px 15px;
        background: var(--color-primary);
        color: var(--color-black);
        font-weight: 600;
        border-radius: var(--border-radius-sm);
        margin-bottom: 10px;
      }
      
      h3 {
        margin-bottom: 10px;
      }
      
      p {
        color: var(--color-light-gray);
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

const SkillsSection = styled.section`
  padding: 6rem 0;
  background-color: var(--color-dark);
`;

const ExpertiseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
  
  .expertise-card {
    background-color: rgba(30, 30, 30, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: var(--border-radius-md);
    padding: 2rem;
    transition: all 0.4s ease;
    position: relative;
    overflow: hidden;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: var(--gradient-gold);
    }
    
    .expertise-icon {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }
    
    h3 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      color: var(--color-primary);
    }
    
    p {
      color: var(--color-light-gray);
      font-size: 0.95rem;
      line-height: 1.6;
      margin-top: 1rem;
    }
    
    .expertise-meter {
      margin: 0.5rem 0;
      
      .level {
        display: inline-block;
        padding: 0.3rem 1rem;
        border-radius: 20px;
        font-size: 0.85rem;
        font-weight: 600;
      }
      
      .expert {
        background: linear-gradient(90deg, #D4AF37 0%, #F9DF74 100%);
        color: var(--color-black);
      }
      
      .advanced {
        background: linear-gradient(90deg, #C0C0C0 0%, #E8E8E8 100%);
        color: var(--color-black);
      }
      
      .intermediate {
        background: linear-gradient(90deg, #CD7F32 0%, #E9BE88 100%);
        color: var(--color-black);
      }
    }
  }
`;

const CTASection = styled.section`
  padding: 6rem 0;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('assets/images/compressed/ducati/DSC08382.webp');
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
    
    .cta-buttons {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
    }
  }
`;

export default About; 