import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';

// Mock gallery data
const galleryItems = [
  // BMW Images
  {
    id: 1,
    title: 'BMW M Series',
    category: 'bmw',
    image: '/assets/images/compressed/bmw/bbmw.webp',
    description: 'Stunning BMW M Series photographed with precision.',
  },
  {
    id: 2,
    title: 'BMW Classic',
    category: 'bmw',
    image: '/assets/images/compressed/bmw/bmw.webp',
    description: 'Classic BMW showcasing timeless German engineering.',
  },
  {
    id: 3,
    title: 'BMW Performance',
    category: 'bmw',
    image: '/assets/images/compressed/bmw/bmwa.webp',
    description: 'BMW performance engineering captured in perfect detail.',
  },
  {
    id: 4,
    title: 'BMW Lifestyle',
    category: 'bmw',
    image: '/assets/images/compressed/bmw/cbmw.webp',
    description: 'The BMW lifestyle captured through our lens.',
  },
  {
    id: 5,
    title: 'BMW Excellence',
    category: 'bmw',
    image: '/assets/images/compressed/bmw/ebmw.webp',
    description: 'BMW excellence showcased with artistic photography.',
  },
  {
    id: 6,
    title: 'BMW Sport',
    category: 'bmw',
    image: '/assets/images/compressed/bmw/DSC00910.webp',
    description: 'BMW sport model captured in dynamic composition.',
  },
  {
    id: 7,
    title: 'BMW Prestige',
    category: 'bmw',
    image: '/assets/images/compressed/bmw/llmbmw.webp',
    description: 'BMW prestige and luxury on full display.',
  },

  // Superbikes Images
  {
    id: 8,
    title: 'Performance Superbike',
    category: 'superbikes',
    image: '/assets/images/compressed/ducati/DSC00481.webp',
    description: 'High-performance superbike captured in perfect lighting.',
  },
  {
    id: 9,
    title: 'Track Ready Superbike',
    category: 'superbikes',
    image: '/assets/images/compressed/ducati/DSC08955.webp',
    description: 'Track-ready superbike showcasing power and precision.',
  },
  {
    id: 10,
    title: 'Italian Engineering',
    category: 'superbikes',
    image: '/assets/images/compressed/ducati/DSC09989.webp',
    description: 'Italian engineering excellence in superbike design.',
  },
  {
    id: 11,
    title: 'Racing Heritage',
    category: 'superbikes',
    image: '/assets/images/compressed/ducati/DSC08955.webp',
    description: 'Racing heritage embodied in this powerful superbike.',
  },
  {
    id: 12,
    title: 'Rider and Machine',
    category: 'superbikes',
    image: '/assets/images/compressed/ducati/personalbranding.webp',
    description: 'The bond between rider and machine captured beautifully.',
  },

  // Ducati Images
  {
    id: 13,
    title: 'Ducati Power',
    category: 'ducati',
    image: '/assets/images/compressed/ducati/automative.webp',
    description: 'Ducati power and engineering excellence on display.',
  },
  {
    id: 14,
    title: 'Ducati Detail',
    category: 'ducati',
    image: '/assets/images/compressed/ducati/DSC00481.webp',
    description: 'Fine details of Ducati craftsmanship.',
  },
  {
    id: 15,
    title: 'Ducati Design',
    category: 'ducati',
    image: '/assets/images/compressed/ducati/DSC00823.webp',
    description: 'Elegant Ducati design captured with artistic flair.',
  },
  {
    id: 16,
    title: 'Ducati Performance',
    category: 'ducati',
    image: '/assets/images/compressed/ducati/DSC00928.webp',
    description: 'Ducati performance engineering at its finest.',
  },
  {
    id: 17,
    title: 'Ducati Elegance',
    category: 'ducati',
    image: '/assets/images/compressed/ducati/DSC05282.webp',
    description: 'The elegance of Italian motorcycle design by Ducati.',
  },
  {
    id: 18,
    title: 'Ducati Legacy',
    category: 'ducati',
    image: '/assets/images/compressed/ducati/DSC05712.webp',
    description: 'The Ducati legacy of power and beauty.',
  },
  
  // Cinematic (using the nature image for now)
  {
    id: 19,
    title: 'Mountain Majesty',
    category: 'cinematic',
    image: '/assets/images/compressed/nature/IMG_1528.webp',
    description: 'Breathtaking cinematic capture of mountain landscapes.',
  },
  
  // Wedding (using the wedding image)
  {
    id: 20,
    title: 'Wedding Moments',
    category: 'wedding',
    image: '/assets/images/compressed/wedding/weddding.webp',
    description: 'Beautiful wedding moments captured with timeless elegance.',
  },
  
  // Concert (using the Red FM image)
  {
    id: 21,
    title: 'Concert Energy',
    category: 'concert',
    image: '/assets/images/compressed/red fm/BVP08727.webp',
    description: 'The electric energy of live concert performances.',
  },
  
  // Bike Event (duplicating a Ducati image temporarily)
  {
    id: 22,
    title: 'Bike Event',
    category: 'bikeevent',
    image: '/assets/images/compressed/ducati/DSC09989.webp',
    description: 'Exciting bike event with enthusiasts and beautiful machines.',
  },
];

// Available filter categories
const categories = [
  { id: 'all', name: 'All' },
  { id: 'superbikes', name: 'Superbikes' },
  { id: 'bmw', name: 'BMW' },
  { id: 'ducati', name: 'Ducati' },
  { id: 'cinematic', name: 'Cinematic' },
  { id: 'wedding', name: 'Wedding' },
  { id: 'concert', name: 'Concert' },
  { id: 'bikeevent', name: 'Bike Event' },
];

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredItems, setFilteredItems] = useState(galleryItems);

  // Filter gallery items when selected category changes
  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredItems(galleryItems);
    } else {
      const filtered = galleryItems.filter(item => item.category === selectedCategory);
      setFilteredItems(filtered);
    }
  }, [selectedCategory]);

  return (
    <>
      <GalleryHero>
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            My Work
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore our collection of premium automotive photography
          </motion.p>
        </div>
      </GalleryHero>

      <GallerySection>
        <div className="container">
          <FilterContainer>
            {categories.map(category => (
              <FilterButton
                key={category.id}
                $isActive={selectedCategory === category.id}
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
              </FilterButton>
            ))}
          </FilterContainer>

          <GalleryGrid
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {filteredItems.map(item => (
              <GalleryItem key={item.id}>
                <div className="gallery-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="gallery-caption">
                  <h3>{item.title}</h3>
                  <p>{item.category}</p>
                </div>
              </GalleryItem>
            ))}
          </GalleryGrid>

          <BookSessionContainer>
            <h2>Love what you see?</h2>
            <p>Book a photography session for your prized vehicle today</p>
            <Button variant="book" to="/contact" size="large">Book Your Session</Button>
          </BookSessionContainer>
        </div>
      </GallerySection>
    </>
  );
};

// Styled Components
const GalleryHero = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/assets/images/compressed/ducati/automative.webp');
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

const GallerySection = styled.section`
  padding: 5rem 0;
  background-color: var(--color-black);
`;

const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
`;

interface FilterButtonProps {
  $isActive: boolean;
}

const FilterButton = styled(motion.button)<FilterButtonProps>`
  padding: 0.75rem 1.5rem;
  background-color: ${props => props.$isActive ? 'var(--color-primary)' : 'var(--color-dark-gray)'};
  color: ${props => props.$isActive ? 'var(--color-black)' : 'var(--color-white)'};
  border: none;
  border-radius: var(--border-radius-md);
  font-family: var(--font-body);
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.$isActive ? 'var(--color-primary)' : 'var(--color-gray)'};
    transform: translateY(-5px);
  }
`;

const GalleryGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const GalleryItem = styled.div`
  position: relative;
  border-radius: var(--border-radius-md);
  overflow: hidden;
  height: 300px;
  
  .gallery-image {
    width: 100%;
    height: 90%;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  
  .gallery-caption {
    height: 10%;
    background-color: var(--color-dark-gray);
    padding: 0.5rem 1rem;
    
    h3 {
      margin: 0;
      font-size: 1rem;
    }
    
    p {
      margin: 0;
      color: var(--color-primary);
      font-size: 0.8rem;
      text-transform: uppercase;
    }
  }
`;

const BookSessionContainer = styled.div`
  text-align: center;
  padding: 3rem;
  background-color: rgba(44, 44, 44, 0.5);
  border-radius: var(--border-radius-md);
  margin-top: 2rem;
  
  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  
  p {
    color: var(--color-light-gray);
    margin-bottom: 2rem;
  }
`;

export default Gallery; 