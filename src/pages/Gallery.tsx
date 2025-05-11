import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../components/ui/Button';

// Mock gallery data
const galleryItems = [
  {
    id: 1,
    title: 'Ducati Panigale V4',
    category: 'superbikes',
    image: '/path-to-gallery/superbike-1.jpg',
    description: 'The iconic Ducati Panigale V4 captured in the mountains of Dehradun.',
  },
  {
    id: 2,
    title: 'BMW M4 Competition',
    category: 'cars',
    image: '/path-to-gallery/car-1.jpg',
    description: 'BMW M4 Competition shot at sunset with dramatic lighting.',
  },
  {
    id: 3,
    title: 'Arai Helmet',
    category: 'accessories',
    image: '/path-to-gallery/accessory-1.jpg',
    description: 'Premium Arai helmet with custom graphics under studio lighting.',
  },
  {
    id: 4,
    title: 'Track Day Event',
    category: 'events',
    image: '/path-to-gallery/event-1.jpg',
    description: 'Annual track day event at Buddh International Circuit.',
  },
  {
    id: 5,
    title: 'KTM 390 Duke',
    category: 'streetbikes',
    image: '/path-to-gallery/streetbike-1.jpg',
    description: 'KTM 390 Duke shot in the urban landscape of Dehradun.',
  },
  {
    id: 6,
    title: 'Porsche 911 GT3',
    category: 'cars',
    image: '/path-to-gallery/car-2.jpg',
    description: 'Porsche 911 GT3 captured during a mountain drive at dawn.',
  },
  {
    id: 7,
    title: 'Kawasaki Ninja ZX-10R',
    category: 'superbikes',
    image: '/path-to-gallery/superbike-2.jpg',
    description: 'Kawasaki Ninja ZX-10R in racing livery on a closed circuit.',
  },
  {
    id: 8,
    title: 'Dainese Leathers',
    category: 'accessories',
    image: '/path-to-gallery/accessory-2.jpg',
    description: 'Premium Dainese racing leathers with detailed stitching.',
  },
  {
    id: 9,
    title: 'Auto Expo Coverage',
    category: 'events',
    image: '/path-to-gallery/event-2.jpg',
    description: 'Highlights from the annual Auto Expo featuring the latest models.',
  },
  {
    id: 10,
    title: 'Triumph Street Triple',
    category: 'streetbikes',
    image: '/path-to-gallery/streetbike-2.jpg',
    description: 'Triumph Street Triple shot against an industrial backdrop.',
  },
  {
    id: 11,
    title: 'Audi RS7',
    category: 'cars',
    image: '/path-to-gallery/car-3.jpg',
    description: 'Audi RS7 Sportback captured with dramatic lighting at night.',
  },
  {
    id: 12,
    title: 'MV Agusta F4',
    category: 'superbikes',
    image: '/path-to-gallery/superbike-3.jpg',
    description: 'The beautiful MV Agusta F4 showcasing Italian engineering excellence.',
  },
];

// Available filter categories
const categories = [
  { id: 'all', name: 'All' },
  { id: 'superbikes', name: 'Superbikes' },
  { id: 'cars', name: 'Cars' },
  { id: 'streetbikes', name: 'Street Bikes' },
  { id: 'accessories', name: 'Accessories' },
  { id: 'events', name: 'Events' },
];

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredItems, setFilteredItems] = useState(galleryItems);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<number | null>(null);

  // Filter gallery items when selected category changes
  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredItems(galleryItems);
    } else {
      const filtered = galleryItems.filter(item => item.category === selectedCategory);
      setFilteredItems(filtered);
    }
  }, [selectedCategory]);

  // Open lightbox with selected image
  const openLightbox = (id: number) => {
    setCurrentImage(id);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
  };

  // Close lightbox
  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto'; // Restore scrolling
  };

  // Navigate through images in lightbox
  const goToPrevious = () => {
    if (currentImage === null) return;
    
    const currentIndex = filteredItems.findIndex(item => item.id === currentImage);
    if (currentIndex > 0) {
      setCurrentImage(filteredItems[currentIndex - 1].id);
    } else {
      // Wrap around to the last image
      setCurrentImage(filteredItems[filteredItems.length - 1].id);
    }
  };

  const goToNext = () => {
    if (currentImage === null) return;
    
    const currentIndex = filteredItems.findIndex(item => item.id === currentImage);
    if (currentIndex < filteredItems.length - 1) {
      setCurrentImage(filteredItems[currentIndex + 1].id);
    } else {
      // Wrap around to the first image
      setCurrentImage(filteredItems[0].id);
    }
  };

  // Get current image data for lightbox
  const getCurrentImageData = () => {
    if (currentImage === null) return null;
    return galleryItems.find(item => item.id === currentImage);
  };

  return (
    <>
      <GalleryHero>
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Gallery
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
            <AnimatePresence>
              {filteredItems.map(item => (
                <GalleryItem
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  onClick={() => openLightbox(item.id)}
                  whileHover={{ y: -10, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)' }}
                  data-aos="fade-up"
                >
                  <div className="gallery-image">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="gallery-overlay">
                    <h3>{item.title}</h3>
                    <p>{item.category}</p>
                  </div>
                </GalleryItem>
              ))}
            </AnimatePresence>
          </GalleryGrid>

          <BookSessionContainer>
            <h2>Love what you see?</h2>
            <p>Book a photography session for your prized vehicle today</p>
            <Button variant="book" to="/contact" size="large">Book Your Session</Button>
          </BookSessionContainer>
        </div>
      </GallerySection>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && currentImage !== null && (
          <Lightbox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <LightboxContent>
              <CloseButton onClick={closeLightbox}>×</CloseButton>
              <NavButton onClick={goToPrevious} className="prev">‹</NavButton>
              
              {getCurrentImageData() && (
                <motion.div 
                  className="lightbox-image-container"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <img src={getCurrentImageData()?.image} alt={getCurrentImageData()?.title} />
                  <div className="image-details">
                    <h3>{getCurrentImageData()?.title}</h3>
                    <p>{getCurrentImageData()?.description}</p>
                  </div>
                </motion.div>
              )}
              
              <NavButton onClick={goToNext} className="next">›</NavButton>
            </LightboxContent>
          </Lightbox>
        )}
      </AnimatePresence>
    </>
  );
};

// Styled Components
const GalleryHero = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/path-to-gallery-hero.jpg');
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

const GalleryItem = styled(motion.div)`
  position: relative;
  border-radius: var(--border-radius-md);
  overflow: hidden;
  cursor: pointer;
  height: 300px;
  
  .gallery-image {
    width: 100%;
    height: 100%;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }
  }
  
  .gallery-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 1.5rem;
    background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
    transform: translateY(100px);
    opacity: 0;
    transition: all 0.3s ease;
    
    h3 {
      margin-bottom: 0.5rem;
    }
    
    p {
      color: var(--color-primary);
      font-size: 0.9rem;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
  }
  
  &:hover {
    .gallery-image img {
      transform: scale(1.1);
    }
    
    .gallery-overlay {
      transform: translateY(0);
      opacity: 1;
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

const Lightbox = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const LightboxContent = styled.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  
  .lightbox-image-container {
    display: flex;
    flex-direction: column;
    
    img {
      max-width: 100%;
      max-height: 70vh;
      object-fit: contain;
      border-radius: var(--border-radius-sm);
    }
    
    .image-details {
      margin-top: 1rem;
      text-align: center;
      
      h3 {
        margin-bottom: 0.5rem;
      }
      
      p {
        color: var(--color-light-gray);
      }
    }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: -40px;
  right: 0;
  background: none;
  border: none;
  color: var(--color-white);
  font-size: 2.5rem;
  cursor: pointer;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--color-primary);
  }
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  border: none;
  color: var(--color-white);
  font-size: 3rem;
  width: 50px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--color-primary);
    color: var(--color-black);
  }
  
  &.prev {
    left: -70px;
    border-top-right-radius: var(--border-radius-sm);
    border-bottom-right-radius: var(--border-radius-sm);
  }
  
  &.next {
    right: -70px;
    border-top-left-radius: var(--border-radius-sm);
    border-bottom-left-radius: var(--border-radius-sm);
  }
  
  @media (max-width: 768px) {
    &.prev {
      left: -20px;
    }
    
    &.next {
      right: -20px;
    }
  }
`;

export default Gallery; 