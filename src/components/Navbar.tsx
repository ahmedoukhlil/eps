import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-content">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="logo"
        >
          <img
            src="/logoepswbg.svg"
            alt="EPS Logo"
          />
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
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="mobile-menu-content"
        >
          <ul style={{ 
            listStyle: 'none', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '1rem',
            marginBottom: '1rem'
          }}>
            <li>
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
            </li>
            <li>
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
            </li>
            <li>
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
            </li>
            <li>
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
            </li>
            <li>
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
            </li>
          </ul>
          
          {/* Mobile CTA Button */}
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
      )}
    </nav>
  );
};

export default Navbar;
