import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  ArrowUp
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="footer">
      <div className="container-custom">
        <div className="footer-content">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 style={{ color: '#FF0000', marginBottom: '1rem', fontSize: '1.5rem', fontWeight: '600' }}>
              EPS
            </h3>
            <p style={{ marginBottom: '1.5rem', lineHeight: '1.6', opacity: 0.9 }}>
              El Baraka Prestation de Service - Votre partenaire de confiance pour le nettoyage et la communication à Nouakchott.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              {[
                { icon: Facebook, href: '#', label: 'Facebook' },
                { icon: Twitter, href: '#', label: 'Twitter' },
                { icon: Instagram, href: '#', label: 'Instagram' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 style={{ color: '#FF0000', marginBottom: '1rem', fontSize: '1.25rem', fontWeight: '600' }}>
              Nos Services
            </h3>
            <ul style={{ listStyle: 'none' }}>
              {[
                'Nettoyage de bureaux',
                'Nettoyage industriel',
                'Nettoyage résidentiel',
                'Communication digitale',
                'Gestion réseaux sociaux',
                'Événementiel'
              ].map((service, index) => (
                <li key={index} style={{ marginBottom: '0.5rem' }}>
                  <a
                    href="#services"
                    style={{
                      color: 'white',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease',
                      opacity: 0.9
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#FF0000'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 style={{ color: '#FF0000', marginBottom: '1rem', fontSize: '1.25rem', fontWeight: '600' }}>
              Contact
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <MapPin size={20} color="#FF0000" />
                <span style={{ opacity: 0.9 }}>
                  Nouakchott, Mauritanie
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Phone size={20} color="#FF0000" />
                <a
                  href="tel:+22212345678"
                  style={{
                    color: 'white',
                    textDecoration: 'none',
                    opacity: 0.9,
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#FF0000'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
                >
                  +222 12 34 56 78
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Mail size={20} color="#FF0000" />
                <a
                  href="mailto:contact@eps.mr"
                  style={{
                    color: 'white',
                    textDecoration: 'none',
                    opacity: 0.9,
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#FF0000'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
                >
                  contact@eps.mr
                </a>
              </div>
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 style={{ color: '#FF0000', marginBottom: '1rem', fontSize: '1.25rem', fontWeight: '600' }}>
              Newsletter
            </h3>
            <p style={{ marginBottom: '1rem', opacity: 0.9 }}>
              Restez informé de nos dernières actualités et offres spéciales.
            </p>
            <form style={{ display: 'flex', gap: '0.5rem' }}>
              <input
                type="email"
                placeholder="Votre email"
                style={{
                  flex: 1,
                  padding: '0.75rem',
                  borderRadius: '0.5rem',
                  border: 'none',
                  outline: 'none',
                  fontSize: '0.875rem'
                }}
                required
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                style={{
                  padding: '0.75rem 1rem',
                  background: '#FF0000',
                  color: 'white',
                  border: 'none',
                  borderRadius: '0.5rem',
                  cursor: 'pointer',
                  fontSize: '0.875rem',
                  fontWeight: '500'
                }}
              >
                S'abonner
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            marginTop: '3rem',
            paddingTop: '2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem'
          }}
        >
          <div style={{ opacity: 0.8, fontSize: '0.875rem' }}>
            © {currentYear} EPS - El Baraka Prestation de Service. Tous droits réservés.
          </div>
          
          <div style={{ display: 'flex', gap: '2rem', fontSize: '0.875rem' }}>
            <a
              href="#"
              style={{
                color: 'white',
                textDecoration: 'none',
                opacity: 0.8,
                transition: 'opacity 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '0.8'}
            >
              Politique de confidentialité
            </a>
            <a
              href="#"
              style={{
                color: 'white',
                textDecoration: 'none',
                opacity: 0.8,
                transition: 'opacity 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '0.8'}
            >
              Conditions d'utilisation
            </a>
          </div>
        </motion.div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="back-to-top"
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          width: '3rem',
          height: '3rem',
          borderRadius: '50%',
          background: '#003366',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          transition: 'all 0.3s ease',
          zIndex: 1000
        }}
        onMouseEnter={(e) => e.currentTarget.style.background = '#FF0000'}
        onMouseLeave={(e) => e.currentTarget.style.background = '#003366'}
      >
        <ArrowUp size={20} />
      </motion.button>
    </footer>
  );
};

export default Footer;
