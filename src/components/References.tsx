import React from 'react';
import { motion } from 'framer-motion';
import { Star, Users, Award, TrendingUp } from 'lucide-react';

const References: React.FC = () => {
  const stats = [
    {
      icon: Users,
      number: '150+',
      label: 'Clients Satisfaits',
      color: '#003366'
    },
    {
      icon: Award,
      number: '5+',
      label: 'Années d\'Expérience',
      color: '#FF0000'
    },
    {
      icon: TrendingUp,
      number: '98%',
      label: 'Taux de Satisfaction',
      color: '#003366'
    },
    {
      icon: Star,
      number: '24/7',
      label: 'Support Client',
      color: '#FF0000'
    }
  ];

  const clients = [
    'Client 1', 'Client 2', 'Client 3', 'Client 4', 'Client 5', 'Client 6',
    'Client 7', 'Client 8', 'Client 9', 'Client 10', 'Client 11', 'Client 12'
  ];

  const testimonials = [
    {
      name: 'Ahmed Ould Mohamed',
      position: 'Directeur Commercial',
      company: 'Entreprise ABC',
      content: 'EPS a transformé notre espace de travail avec leur service de nettoyage professionnel. Équipe fiable et résultats exceptionnels.',
      rating: 5
    },
    {
      name: 'Fatima Mint Sidi',
      position: 'Responsable Marketing',
      company: 'Startup XYZ',
      content: 'Leur expertise en communication nous a permis d\'augmenter notre visibilité de 200%. Service de qualité et professionnalisme.',
      rating: 5
    }
  ];

  return (
    <section id="references" className="references">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 style={{ fontSize: '2.5rem', fontWeight: '700', color: '#003366', marginBottom: '1rem' }}>
            Nos Références
          </h2>
          <p style={{ fontSize: '1.125rem', color: '#6b7280', maxWidth: '600px', margin: '0 auto' }}>
            Découvrez pourquoi les entreprises nous font confiance pour leurs besoins en nettoyage et communication
          </p>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            marginBottom: '4rem'
          }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              style={{
                textAlign: 'center',
                padding: '2rem',
                background: 'white',
                borderRadius: '1rem',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                border: '1px solid #e5e7eb'
              }}
            >
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: stat.color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem'
              }}>
                <stat.icon size={30} color="white" />
              </div>
              <div style={{ fontSize: '2rem', fontWeight: '700', color: stat.color, marginBottom: '0.5rem' }}>
                {stat.number}
              </div>
              <div style={{ color: '#6b7280', fontSize: '0.875rem' }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          style={{ marginBottom: '4rem' }}
        >
          <h3 style={{ textAlign: 'center', fontSize: '1.5rem', fontWeight: '600', color: '#1f2937', marginBottom: '2rem' }}>
            Ils nous font confiance
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '2rem',
            alignItems: 'center'
          }}>
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                style={{
                  height: '80px',
                  background: 'white',
                  borderRadius: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                  border: '1px solid #e5e7eb',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ color: '#6b7280', fontWeight: '500' }}>
                  {client}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 style={{ textAlign: 'center', fontSize: '1.5rem', fontWeight: '600', color: '#1f2937', marginBottom: '2rem' }}>
            Témoignages Clients
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                style={{
                  background: 'white',
                  padding: '2rem',
                  borderRadius: '1rem',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  border: '1px solid #e5e7eb',
                  position: 'relative'
                }}
              >
                {/* Quote Icon */}
                <div style={{
                  position: 'absolute',
                  top: '-10px',
                  left: '2rem',
                  width: '20px',
                  height: '20px',
                  background: '#003366',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <span style={{ color: 'white', fontSize: '0.75rem' }}>"</span>
                </div>

                {/* Rating */}
                <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem' }}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#FFD700" color="#FFD700" />
                  ))}
                </div>

                {/* Content */}
                <p style={{ color: '#4b5563', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                  {testimonial.content}
                </p>

                {/* Author */}
                <div>
                  <div style={{ fontWeight: '600', color: '#1f2937' }}>
                    {testimonial.name}
                  </div>
                  <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                    {testimonial.position} - {testimonial.company}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          style={{
            textAlign: 'center',
            marginTop: '4rem',
            padding: '3rem',
            background: 'linear-gradient(135deg, #003366, #1e3a8a)',
            borderRadius: '1rem',
            color: 'white'
          }}
        >
          <h3 style={{ fontSize: '2rem', fontWeight: '600', marginBottom: '1rem' }}>
            Prêt à nous faire confiance ?
          </h3>
          <p style={{ fontSize: '1.125rem', marginBottom: '2rem', opacity: 0.9 }}>
            Rejoignez nos clients satisfaits et découvrez la différence EPS
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary"
            style={{
              background: 'transparent',
              border: '2px solid white',
              color: 'white',
              fontSize: '1.125rem',
              padding: '1rem 2rem'
            }}
          >
            Commencer Maintenant
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default References;
