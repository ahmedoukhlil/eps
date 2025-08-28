import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  ArrowRight,
  Building2,
  Plane,
} from 'lucide-react';

const Services: React.FC = () => {
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

  return (
    <section id="services" className="services">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="services-title">Nos Services</h2>
          <p style={{ textAlign: 'center', fontSize: '1.125rem', color: '#6b7280', marginBottom: '3rem' }}>
            Des solutions professionnelles adaptées à vos besoins
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: service.id * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="service-card"
              style={{
                background: 'white',
                borderRadius: '1rem',
                padding: '2rem',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                border: '1px solid #e5e7eb',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Service Icon */}
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: service.color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem'
              }}>
                <service.icon size={30} color="white" />
              </div>

              {/* Service Title */}
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: '#1f2937',
                marginBottom: '1rem'
              }}>
                {service.title}
              </h3>

              {/* Service Description */}
              <p style={{
                color: '#6b7280',
                marginBottom: '1.5rem',
                lineHeight: '1.6'
              }}>
                {service.description}
              </p>

              {/* Service Features */}
              <ul style={{
                listStyle: 'none',
                marginBottom: '2rem'
              }}>
                {service.features.map((feature, index) => (
                  <li key={index} style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '0.5rem',
                    color: '#4b5563'
                  }}>
                    <div style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: service.color,
                      marginRight: '0.75rem',
                      flexShrink: 0
                    }} />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem'
                }}
              >
                En savoir plus
                <ArrowRight size={20} />
              </motion.button>

              {/* Decorative Element */}
              <div style={{
                position: 'absolute',
                top: '0',
                right: '0',
                width: '100px',
                height: '100px',
                background: `linear-gradient(135deg, ${service.color}20, transparent)`,
                borderRadius: '0 1rem 0 100px',
                zIndex: 0
              }} />
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          style={{
            textAlign: 'center',
            marginTop: '4rem',
            padding: '2rem',
            background: 'linear-gradient(135deg, #003366, #1e3a8a)',
            borderRadius: '1rem',
            color: 'white'
          }}
        >
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
            Besoin d'un devis personnalisé ?
          </h3>
          <p style={{ marginBottom: '1.5rem', opacity: 0.9 }}>
            Contactez-nous pour obtenir un devis gratuit et adapté à vos besoins spécifiques.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary"
            style={{
              background: 'transparent',
              border: '2px solid white',
              color: 'white'
            }}
          >
            Demander un Devis
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
