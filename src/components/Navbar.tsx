import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
    >
      <div className="container-custom">
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%'
        }}>
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="logo"
          >
            <img src="/logoepswbg.svg" alt="EPS Logo" />
          </motion.div>

          {/* Desktop Navigation */}
          <motion.ul
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="nav-links"
          >
            <li>
              <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
                Accueil
              </a>
            </li>
            <li>
              <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }} title="Nettoyage, Communication & Manutention Aéroportuaire">
                Services
              </a>
            </li>
            <li>
              <a href="#gallery" onClick={(e) => { e.preventDefault(); scrollToSection('gallery'); }}>
                Galerie
              </a>
            </li>
            <li>
              <a href="#references" onClick={(e) => { e.preventDefault(); scrollToSection('references'); }}>
                Références
              </a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
                Contact
              </a>
            </li>
          </motion.ul>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="desktop-cta"
          >
            <a
              href="#contact"
              className="btn-primary"
              style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}
            >
              <Phone size={16} style={{ marginRight: '0.5rem' }} />
              Devis Gratuit
            </a>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="mobile-menu"
            aria-label="Menu mobile"
            aria-expanded={isMobileMenuOpen}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="mobile-menu-content"
            >
              <motion.ul
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <a
                    href="#home"
                    onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
                    style={{
                      color: isScrolled ? 'white' : '#003366',
                      textDecoration: 'none',
                      display: 'block',
                      padding: '0.75rem',
                      borderRadius: '0.5rem',
                      transition: 'background-color 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = isScrolled ? 'rgba(255,255,255,0.1)' : 'rgba(0,51,102,0.1)'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    Accueil
                  </a>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.15 }}
                >
                  <a
                    href="#services"
                    onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}
                    style={{
                      color: isScrolled ? 'white' : '#003366',
                      textDecoration: 'none',
                      display: 'block',
                      padding: '0.75rem',
                      borderRadius: '0.5rem',
                      transition: 'background-color 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = isScrolled ? 'rgba(255,255,255,0.1)' : 'rgba(0,51,102,0.1)'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    Services
                  </a>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <a
                    href="#gallery"
                    onClick={(e) => { e.preventDefault(); scrollToSection('gallery'); }}
                    style={{
                      color: isScrolled ? 'white' : '#003366',
                      textDecoration: 'none',
                      display: 'block',
                      padding: '0.75rem',
                      borderRadius: '0.5rem',
                      transition: 'background-color 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = isScrolled ? 'rgba(255,255,255,0.1)' : 'rgba(0,51,102,0.1)'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    Galerie
                  </a>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.25 }}
                >
                  <a
                    href="#references"
                    onClick={(e) => { e.preventDefault(); scrollToSection('references'); }}
                    style={{
                      color: isScrolled ? 'white' : '#003366',
                      textDecoration: 'none',
                      display: 'block',
                      padding: '0.75rem',
                      borderRadius: '0.5rem',
                      transition: 'background-color 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = isScrolled ? 'rgba(255,255,255,0.1)' : 'rgba(0,51,102,0.1)'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    Références
                  </a>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  <a
                    href="#contact"
                    onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
                    style={{
                      color: isScrolled ? 'white' : '#003366',
                      textDecoration: 'none',
                      display: 'block',
                      padding: '0.75rem',
                      borderRadius: '0.5rem',
                      transition: 'background-color 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = isScrolled ? 'rgba(255,255,255,0.1)' : 'rgba(0,51,102,0.1)'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    Contact
                  </a>
                </motion.li>
              </motion.ul>

              {/* Mobile CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.35 }}
                style={{ marginTop: '1rem' }}
              >
                <a
                  href="#contact"
                  className="btn-primary"
                  style={{
                    display: 'block',
                    width: '100%',
                    textAlign: 'center',
                    fontSize: '0.875rem',
                    padding: '0.75rem 1rem'
                  }}
                >
                  <Phone size={16} style={{ marginRight: '0.5rem' }} />
                  Devis Gratuit
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
