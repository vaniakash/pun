import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';

const About: React.FC = () => {
  // Timeline data for experience
  const timeline = [
    {
      id: 1,
      year: '2016',
      title: 'First Steps',
      description: 'Started as an automotive enthusiast photographer, capturing friends\' bikes and cars with passion.',
    },
    {
      id: 2,
      year: '2018',
      title: 'First Professional Work',
      description: 'Shot the KTM Duke series for a local dealership, which became the starting point of professional career.',
    },
    {
      id: 3,
      year: '2019',
      title: 'Major Brand Collaboration',
      description: 'First major brand collaboration with Ducati for their new model launch in Dehradun.',
    },
    {
      id: 4,
      year: '2020',
      title: 'Expanded Services',
      description: 'Expanded from photography to include cinematic videography services for automotive clients.',
    },
    {
      id: 5,
      year: '2021',
      title: 'National Recognition',
      description: 'Featured in Auto India magazine for innovative automotive photography techniques.',
    },
    {
      id: 6,
      year: '2023',
      title: 'Punjikalens Studio',
      description: 'Established dedicated Punjikalens studio in Dehradun with state-of-the-art equipment.',
    },
  ];

  // Skills data
  const skills = [
    {
      id: 1,
      name: 'Automotive Photography',
      percentage: 95,
    },
    {
      id: 2,
      name: 'Cinematic Videography',
      percentage: 90,
    },
    {
      id: 3,
      name: 'Lighting Setup',
      percentage: 85,
    },
    {
      id: 4,
      name: 'Post-Processing',
      percentage: 92,
    },
    {
      id: 5,
      name: 'Aerial Photography',
      percentage: 80,
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
            The story behind Dehradun's premium automotive photographer
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
                <img src="/path-to-photographer-image.jpg" alt="Punjikalens Photographer" />
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
                Hello, I'm [Photographer Name], the founder of Punjikalens. My journey as an automotive photographer began with a simple love for machines and a camera in hand.
              </p>
              <p>
                Based in the scenic mountains of Dehradun, I combine my passion for automotive excellence with technical photography skills to create visual stories that capture the essence of each vehicle.
              </p>
              <p>
                With over 7 years of experience working with leading automotive brands, I've developed a unique style that emphasizes the power, design, and emotion that these machines evoke.
              </p>
              <p>
                What sets Punjikalens apart is our attention to detail, understanding of automotive engineering, and ability to find the perfect setting that complements each vehicle's character.
              </p>
              
              <div className="signature">
                <img src="/path-to-signature.png" alt="Photographer's Signature" />
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
            <h2>Our Journey</h2>
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
            <h2>Our Expertise</h2>
            <p>Professional skills that set us apart</p>
          </SectionHeader>
          
          <div className="skills-container">
            {skills.map((skill, index) => (
              <motion.div 
                key={skill.id}
                className="skill-item"
                initial={{ opacity: 0, width: 0 }}
                whileInView={{ opacity: 1, width: '100%' }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="skill-info">
                  <h3>{skill.name}</h3>
                  <span>{skill.percentage}%</span>
                </div>
                <div className="skill-bar">
                  <motion.div 
                    className="skill-progress" 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                    style={{ width: `${skill.percentage}%` }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SkillsSection>

      <EquipmentSection>
        <div className="container">
          <SectionHeader
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Our Equipment</h2>
            <p>Professional gear for exceptional results</p>
          </SectionHeader>
          
          <div className="equipment-grid">
            <motion.div 
              className="equipment-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -10, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)' }}
            >
              <div className="equipment-icon">📷</div>
              <h3>Cameras</h3>
              <ul>
                <li>Sony Alpha 1</li>
                <li>Canon EOS R5</li>
                <li>Nikon Z9</li>
                <li>Phase One XF IQ4</li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="equipment-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -10, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)' }}
            >
              <div className="equipment-icon">🔭</div>
              <h3>Lenses</h3>
              <ul>
                <li>24-70mm f/2.8 GM</li>
                <li>70-200mm f/2.8 GM</li>
                <li>16-35mm f/2.8 GM</li>
                <li>85mm f/1.4 GM</li>
                <li>35mm f/1.4 GM</li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="equipment-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -10, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)' }}
            >
              <div className="equipment-icon">💡</div>
              <h3>Lighting</h3>
              <ul>
                <li>Profoto B10X Plus</li>
                <li>Godox AD600Pro</li>
                <li>Broncolor Siros L</li>
                <li>Various Light Modifiers</li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="equipment-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -10, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)' }}
            >
              <div className="equipment-icon">🚁</div>
              <h3>Aerial</h3>
              <ul>
                <li>DJI Inspire 2</li>
                <li>DJI Mavic 3 Pro</li>
                <li>X7 Camera</li>
                <li>Various ND Filters</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </EquipmentSection>

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
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/path-to-about-hero.jpg');
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
  
  .skills-container {
    max-width: 800px;
    margin: 0 auto;
    
    .skill-item {
      margin-bottom: 2rem;
      
      .skill-info {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
        
        h3 {
          font-size: 1.2rem;
          font-weight: 500;
        }
        
        span {
          color: var(--color-primary);
          font-weight: 600;
        }
      }
      
      .skill-bar {
        height: 10px;
        background-color: var(--color-gray);
        border-radius: 5px;
        overflow: hidden;
        
        .skill-progress {
          height: 100%;
          background: var(--gradient-gold);
          border-radius: 5px;
        }
      }
    }
  }
`;

const EquipmentSection = styled.section`
  padding: 6rem 0;
  background-color: var(--color-black);
  
  .equipment-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
    
    .equipment-item {
      background-color: var(--color-dark-gray);
      border-radius: var(--border-radius-md);
      padding: 2rem;
      transition: all 0.3s ease;
      
      .equipment-icon {
        font-size: 2.5rem;
        margin-bottom: 1rem;
      }
      
      h3 {
        font-size: 1.3rem;
        margin-bottom: 1rem;
        color: var(--color-primary);
      }
      
      ul {
        list-style: none;
        
        li {
          margin-bottom: 0.5rem;
          color: var(--color-light-gray);
          
          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    }
  }
`;

const CTASection = styled.section`
  padding: 6rem 0;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/path-to-cta-bg.jpg');
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