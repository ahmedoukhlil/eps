import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Building2, Sparkles, Plane } from 'lucide-react';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  title: string;
  description: string;
}

interface ServiceGallery {
  id: number;
  title: string;
  icon: React.ComponentType<any>;
  color: string;
  images: GalleryImage[];
}

const Gallery: React.FC = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const services: ServiceGallery[] = [
    {
      id: 1,
      title: 'Nettoyage',
      icon: Building2,
      color: '#003366',
      images: [
        {
          id: 1,
          src: '/gallery/cleaning-1.jpg',
          alt: 'Nettoyage de bureaux',
          title: 'Nettoyage de Bureaux',
          description: 'Services de nettoyage professionnel pour entreprises et bureaux'
        },
        {
          id: 2,
          src: '/gallery/cleaning-2.jpg',
          alt: 'Nettoyage industriel',
          title: 'Nettoyage Industriel',
          description: 'Nettoyage spécialisé pour entrepôts et sites industriels'
        },
        {
          id: 3,
          src: '/gallery/cleaning-3.jpg',
          alt: 'Nettoyage résidentiel',
          title: 'Nettoyage Résidentiel',
          description: 'Services de nettoyage pour particuliers et résidences'
        },
        {
          id: 4,
          src: '/gallery/cleaning-4.jpg',
          alt: 'Désinfection',
          title: 'Désinfection & Sanitisation',
          description: 'Services de désinfection professionnelle'
        }
      ]
    },
    {
      id: 2,
      title: 'Communication',
      icon: Sparkles,
      color: '#FF0000',
      images: [
        {
          id: 1,
          src: '/gallery/communication-1.jpg',
          alt: 'Stratégie de communication',
          title: 'Stratégie de Communication',
          description: 'Planification et mise en œuvre de stratégies de communication'
        },
        {
          id: 2,
          src: '/gallery/communication-2.jpg',
          alt: 'Gestion réseaux sociaux',
          title: 'Gestion des Réseaux Sociaux',
          description: 'Animation et gestion de vos comptes sociaux'
        },
        {
          id: 3,
          src: '/gallery/communication-3.jpg',
          alt: 'Événementiel',
          title: 'Événementiel',
          description: 'Organisation et gestion d\'événements professionnels'
        },
        {
          id: 4,
          src: '/gallery/communication-4.jpg',
          alt: 'Création de contenu',
          title: 'Création de Contenu Digital',
          description: 'Production de contenu visuel et textuel'
        }
      ]
    },
    {
      id: 3,
      title: 'Manutention Aéroportuaire',
      icon: Plane,
      color: '#1e40af',
      images: [
        {
          id: 1,
          src: '/gallery/airport-1.jpg',
          alt: 'Manutention des bagages',
          title: 'Manutention des Bagages',
          description: 'Gestion professionnelle des bagages passagers'
        },
        {
          id: 2,
          src: '/gallery/airport-2.jpg',
          alt: 'Assistance au sol',
          title: 'Assistance au Sol',
          description: 'Services d\'assistance au sol pour les avions'
        },
        {
          id: 3,
          src: '/gallery/airport-3.jpg',
          alt: 'Gestion des cargaisons',
          title: 'Gestion des Cargaisons',
          description: 'Manutention et gestion des cargaisons aériennes'
        },
        {
          id: 4,
          src: '/gallery/airport-4.jpg',
          alt: 'Services de rampe',
          title: 'Services de Rampe',
          description: 'Coordination et gestion des opérations de rampe'
        }
      ]
    }
  ];

  const openServiceGallery = (serviceId: number) => {
    setSelectedService(serviceId);
  };

  const closeServiceGallery = () => {
    setSelectedService(null);
    setSelectedImage(null);
  };

  const openImageModal = (image: GalleryImage) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (!selectedImage || !selectedService) return;
    
    const currentService = services.find(s => s.id === selectedService);
    if (!currentService) return;
    
    const currentIndex = currentService.images.findIndex(img => img.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex === 0 ? currentService.images.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === currentService.images.length - 1 ? 0 : currentIndex + 1;
    }
    
    setSelectedImage(currentService.images[newIndex]);
  };

  return (
    <section id="gallery" className="gallery">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="gallery-title">Nos Réalisations</h2>
          <p className="gallery-subtitle">
            Découvrez nos réalisations par service
          </p>
        </motion.div>

        <div className="services-gallery-grid">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="service-gallery-card"
              onClick={() => openServiceGallery(service.id)}
            >
              <div className="service-gallery-icon" style={{ background: service.color }}>
                <service.icon size={40} color="white" />
              </div>
              <h3 className="service-gallery-title">{service.title}</h3>
              <p className="service-gallery-description">
                {service.images.length} réalisations
              </p>
              <div className="service-gallery-preview">
                {service.images.slice(0, 3).map((image, imgIndex) => (
                  <div
                    key={image.id}
                    className="gallery-preview-image"
                    style={{
                      backgroundImage: `url(${image.src})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  />
                ))}
              </div>
              <button className="gallery-view-btn">
                Voir la Galerie
              </button>
            </motion.div>
          ))}
        </div>

        {/* Service Gallery Modal */}
        <AnimatePresence>
          {selectedService && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="gallery-modal-overlay"
              onClick={closeServiceGallery}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="gallery-modal"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="gallery-modal-header">
                  <h3 className="gallery-modal-title">
                    {services.find(s => s.id === selectedService)?.title}
                  </h3>
                  <button className="gallery-close-btn" onClick={closeServiceGallery}>
                    <X size={24} />
                  </button>
                </div>
                
                <div className="gallery-grid">
                  {services.find(s => s.id === selectedService)?.images.map((image, index) => (
                    <motion.div
                      key={image.id}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="gallery-item"
                      onClick={() => openImageModal(image)}
                    >
                      <div
                        className="gallery-image"
                        style={{
                          backgroundImage: `url(${image.src})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }}
                      />
                      <div className="gallery-item-overlay">
                        <h4>{image.title}</h4>
                        <p>{image.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Image Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="image-modal-overlay"
              onClick={closeImageModal}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="image-modal"
                onClick={(e) => e.stopPropagation()}
              >
                <button className="image-modal-close" onClick={closeImageModal}>
                  <X size={24} />
                </button>
                
                <button className="image-nav-btn image-nav-prev" onClick={() => navigateImage('prev')}>
                  <ChevronLeft size={24} />
                </button>
                
                <button className="image-nav-btn image-nav-next" onClick={() => navigateImage('next')}>
                  <ChevronRight size={24} />
                </button>
                
                <div className="image-modal-content">
                  <div
                    className="image-modal-image"
                    style={{
                      backgroundImage: `url(${selectedImage.src})`,
                      backgroundSize: 'contain',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat'
                    }}
                  />
                  <div className="image-modal-info">
                    <h3>{selectedImage.title}</h3>
                    <p>{selectedImage.description}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;
