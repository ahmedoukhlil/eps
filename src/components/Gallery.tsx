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
        { id: 1, src: '/gallery/cleaning-1.jpg', alt: 'Nettoyage de bureaux', title: 'Nettoyage de Bureaux', description: 'Services de nettoyage professionnel pour entreprises et bureaux' },
        { id: 2, src: '/gallery/cleaning-2.jpg', alt: 'Nettoyage industriel', title: 'Nettoyage Industriel', description: 'Nettoyage spécialisé pour entrepôts et sites industriels' },
        { id: 3, src: '/gallery/cleaning-3.jpg', alt: 'Nettoyage résidentiel', title: 'Nettoyage Résidentiel', description: 'Services de nettoyage pour particuliers et résidences' },
        { id: 4, src: '/gallery/cleaning-4.jpg', alt: 'Désinfection', title: 'Désinfection & Sanitisation', description: 'Services de désinfection professionnelle' }
      ]
    },
    {
      id: 2,
      title: 'Communication',
      icon: Sparkles,
      color: '#FF0000',
      images: [
        { id: 1, src: '/gallery/communication-1.jpg', alt: 'Stratégie de communication', title: 'Stratégie de Communication', description: 'Planification et mise en œuvre de stratégies de communication' },
        { id: 2, src: '/gallery/communication-2.jpg', alt: 'Gestion réseaux sociaux', title: 'Gestion des Réseaux Sociaux', description: 'Animation et gestion de vos comptes sociaux' },
        { id: 3, src: '/gallery/communication-3.jpg', alt: 'Événementiel', title: 'Événementiel', description: 'Organisation et gestion d\'événements professionnels' },
        { id: 4, src: '/gallery/communication-4.jpg', alt: 'Création de contenu', title: 'Création de Contenu Digital', description: 'Production de contenu visuel et textuel' }
      ]
    },
    {
      id: 3,
      title: 'Manutention Aéroportuaire',
      icon: Plane,
      color: '#1e40af',
      images: [
        { id: 1, src: '/gallery/airport-1.jpg', alt: 'Manutention des bagages', title: 'Manutention des Bagages', description: 'Gestion professionnelle des bagages passagers' },
        { id: 2, src: '/gallery/airport-2.jpg', alt: 'Assistance au sol', title: 'Assistance au Sol', description: 'Services d\'assistance au sol pour les avions' },
        { id: 3, src: '/gallery/airport-3.jpg', alt: 'Gestion des cargaisons', title: 'Gestion des Cargaisons', description: 'Manutention et gestion des cargaisons aériennes' },
        { id: 4, src: '/gallery/airport-4.jpg', title: 'Services de Rampe', alt: 'Services de rampe', description: 'Coordination et gestion des opérations de rampe' }
      ]
    }
  ];

  const openServiceGallery = (serviceId: number) => setSelectedService(serviceId);
  const closeServiceGallery = () => { setSelectedService(null); setSelectedImage(null); };
  const openImageModal = (image: GalleryImage) => setSelectedImage(image);
  const closeImageModal = () => setSelectedImage(null);

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
    <section id="gallery" className="gallery section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <h2 className="gallery-title" style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            color: '#003366',
            marginBottom: '1rem'
          }}>
            Nos Réalisations
          </h2>
          <p className="gallery-subtitle" style={{
            fontSize: '1.1rem',
            color: '#666',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
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
              style={{
                background: 'white',
                borderRadius: '1rem',
                padding: '2rem',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                border: '1px solid #e5e7eb',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden'
              }}
              onClick={() => openServiceGallery(service.id)}
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="service-gallery-icon" style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                background: service.color,
                transition: 'all 0.3s ease'
              }}>
                <service.icon size={40} color="white" />
              </div>
              
              <h3 className="service-gallery-title" style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: '#003366',
                marginBottom: '0.5rem',
                textAlign: 'center'
              }}>
                {service.title}
              </h3>
              
              <p className="service-gallery-description" style={{
                fontSize: '0.95rem',
                color: '#666',
                textAlign: 'center',
                marginBottom: '1.5rem'
              }}>
                {service.images.length} réalisations
              </p>
              
              <div className="service-gallery-preview" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '0.5rem',
                marginBottom: '1.5rem'
              }}>
                {service.images.slice(0, 3).map((image) => (
                  <div
                    key={image.id}
                    className="gallery-preview-image"
                    style={{
                      width: '100%',
                      height: '80px',
                      borderRadius: '0.5rem',
                      backgroundImage: `url(${image.src})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundColor: '#f3f4f6'
                    }}
                  />
                ))}
              </div>
              
              <button className="gallery-view-btn" style={{
                background: service.color,
                color: 'white',
                border: 'none',
                padding: '0.75rem 1.5rem',
                borderRadius: '0.5rem',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                width: '100%',
                fontSize: '0.95rem'
              }}>
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
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(0, 0, 0, 0.8)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1000,
                padding: '1rem'
              }}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="gallery-modal"
                onClick={(e) => e.stopPropagation()}
                style={{
                  background: 'white',
                  borderRadius: '1rem',
                  maxWidth: '90vw',
                  maxHeight: '90vh',
                  overflow: 'hidden',
                  position: 'relative',
                  width: '100%'
                }}
              >
                <div className="gallery-modal-header" style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '1.5rem',
                  borderBottom: '1px solid #e5e7eb'
                }}>
                  <h3 className="gallery-modal-title" style={{
                    fontSize: '1.5rem',
                    fontWeight: '600',
                    color: '#1f2937',
                    margin: 0
                  }}>
                    {services.find(s => s.id === selectedService)?.title}
                  </h3>
                  <button
                    className="gallery-close-btn"
                    onClick={closeServiceGallery}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#6b7280',
                      cursor: 'pointer',
                      padding: '0.5rem',
                      borderRadius: '0.5rem',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <X size={24} />
                  </button>
                </div>
                
                <div className="gallery-grid" style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                  gap: '1rem',
                  padding: '1.5rem',
                  maxHeight: '70vh',
                  overflowY: 'auto'
                }}>
                  {services.find(s => s.id === selectedService)?.images.map((image, index) => (
                    <motion.div
                      key={image.id}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="gallery-item"
                      onClick={() => openImageModal(image)}
                      style={{
                        position: 'relative',
                        borderRadius: '0.5rem',
                        overflow: 'hidden',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div
                        className="gallery-image"
                        style={{
                          width: '100%',
                          height: '200px',
                          backgroundImage: `url(${image.src})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          backgroundColor: '#f3f4f6'
                        }}
                      />
                      <div className="gallery-item-overlay" style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        background: 'linear-gradient(transparent, rgba(0, 0, 0, 0.8))',
                        color: 'white',
                        padding: '1rem',
                        transform: 'translateY(100%)',
                        transition: 'transform 0.3s ease'
                      }}>
                        <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                          {image.title}
                        </h4>
                        <p style={{ fontSize: '0.875rem', opacity: 0.9 }}>
                          {image.description}
                        </p>
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
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(0, 0, 0, 0.9)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1100,
                padding: '1rem'
              }}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="image-modal"
                onClick={(e) => e.stopPropagation()}
                style={{
                  background: 'white',
                  borderRadius: '1rem',
                  maxWidth: '90vw',
                  maxHeight: '90vh',
                  position: 'relative',
                  overflow: 'hidden',
                  width: '100%'
                }}
              >
                <button
                  className="image-modal-close"
                  onClick={closeImageModal}
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: 'rgba(0, 0, 0, 0.5)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    zIndex: 10,
                    transition: 'all 0.3s ease'
                  }}
                >
                  <X size={24} />
                </button>
                
                <button
                  className="image-nav-btn image-nav-prev"
                  onClick={() => navigateImage('prev')}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '1rem',
                    transform: 'translateY(-50%)',
                    background: 'rgba(0, 0, 0, 0.5)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50%',
                    width: '50px',
                    height: '50px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    zIndex: 10,
                    transition: 'all 0.3s ease'
                  }}
                >
                  <ChevronLeft size={24} />
                </button>
                
                <button
                  className="image-nav-btn image-nav-next"
                  onClick={() => navigateImage('next')}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    right: '1rem',
                    transform: 'translateY(-50%)',
                    background: 'rgba(0, 0, 0, 0.5)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50%',
                    width: '50px',
                    height: '50px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    zIndex: 10,
                    transition: 'all 0.3s ease'
                  }}
                >
                  <ChevronRight size={24} />
                </button>
                
                <div className="image-modal-content" style={{
                  padding: '2rem',
                  textAlign: 'center'
                }}>
                  <div
                    className="image-modal-image"
                    style={{
                      width: '100%',
                      height: '60vh',
                      backgroundImage: `url(${selectedImage.src})`,
                      backgroundSize: 'contain',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      backgroundColor: '#f3f4f6',
                      borderRadius: '0.5rem',
                      marginBottom: '1.5rem'
                    }}
                  />
                  <div className="image-modal-info">
                    <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>
                      {selectedImage.title}
                    </h3>
                    <p style={{ color: '#6b7280', fontSize: '1rem' }}>
                      {selectedImage.description}
                    </p>
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
