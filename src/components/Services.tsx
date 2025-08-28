import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  ArrowRight,
  Building2,
  Plane,
} from 'lucide-react';

const Services: React.FC = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      title: 'Nettoyage',
      description: 'Services de nettoyage professionnel pour entreprises, bureaux, locaux commerciaux et résidentiels.',
      icon: Building2,
      features: [
        'Nettoyage de bureaux et locaux commerciaux',
        'Nettoyage industriel et entrepôts',
        'Nettoyage résidentiel',
        'Nettoyage après travaux',
        'Désinfection et sanitisation',
        'Entretien régulier'
      ],
      color: '#003366'
    },
    {
      id: 2,
      title: 'Communication',
      description: 'Solutions de communication complètes pour promouvoir votre entreprise et atteindre vos objectifs.',
      icon: Sparkles,
      features: [
        'Stratégie de communication',
        'Création de contenu digital',
        'Gestion des réseaux sociaux',
        'Publicité et marketing',
        'Relations presse',
        'Événementiel'
      ],
      color: '#FF0000'
    },
    {
      id: 3,
      title: 'Manutention Aéroportuaire',
      description: 'Services spécialisés de manutention aéroportuaire pour assurer le bon fonctionnement des opérations aériennes.',
      icon: Plane,
      features: [
        'Manutention des bagages',
        'Assistance au sol des avions',
        'Gestion des cargaisons',
        'Services de rampe'
      ],
      color: '#1e40af'
    }
  ];

  const toggleService = (serviceId: number) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  return (
    <section id="services" className="services section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            color: '#003366',
            marginBottom: '1rem'
          }}>
            Nos Services
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#666',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Des solutions complètes pour répondre à tous vos besoins professionnels
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="service-card"
              style={{
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden'
              }}
              onClick={() => toggleService(service.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="service-icon"
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                  background: service.color,
                  transition: 'all 0.3s ease'
                }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <service.icon size={40} color="white" />
              </motion.div>

              <h3 className="service-title" style={{
                fontSize: '1.75rem',
                fontWeight: '600',
                color: '#003366',
                marginBottom: '1rem',
                textAlign: 'center'
              }}>
                {service.title}
              </h3>

              <p className="service-description" style={{
                fontSize: '1rem',
                color: '#666',
                lineHeight: '1.6',
                marginBottom: '1.5rem',
                textAlign: 'center'
              }}>
                {service.description}
              </p>

              <AnimatePresence>
                {expandedService === service.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div className="service-features" style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                      gap: '1rem',
                      marginBottom: '1.5rem'
                    }}>
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                          className="service-feature"
                          style={{
                            padding: '0.75rem 1rem',
                            background: 'rgba(0, 51, 102, 0.05)',
                            borderRadius: '0.5rem',
                            border: '1px solid rgba(0, 51, 102, 0.1)',
                            fontSize: '0.9rem',
                            color: '#003366',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                          }}
                        >
                          <div style={{
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            background: service.color,
                            flexShrink: 0
                          }} />
                          {feature}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.button
                className="btn-primary"
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  fontSize: '0.95rem',
                  padding: '0.875rem 1.5rem'
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleService(service.id);
                }}
              >
                {expandedService === service.id ? 'Masquer les détails' : 'Voir les détails'}
                <motion.div
                  animate={{ rotate: expandedService === service.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowRight size={18} />
                </motion.div>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
