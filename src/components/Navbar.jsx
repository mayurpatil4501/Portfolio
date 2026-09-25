import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Download, Terminal, Moon, Sun, 
  Mail, Sparkles 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { PORTFOLIO_DATA } from '../portfolioData';

export default function Navbar({ activeSection, onToggleTheme, isDark }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Credentials', href: '#credentials' },
    { name: 'Resume', href: '#resume-section' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`nav-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Brand / Logo */}
        <a href="#" className="nav-brand">
          <div className="brand-icon">
            <Terminal size={18} className="brand-terminal" />
          </div>
          <span className="brand-text">
            mayur<span className="brand-accent">.patil</span>
          </span>
          <span className="status-indicator" title="Open to opportunities">
            <span className="status-dot"></span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="nav-links">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="nav-actions">
          <button 
            onClick={onToggleTheme} 
            className="icon-button"
            aria-label="Toggle visual theme"
            title="Toggle Theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a 
            href="/Mayur_Patil_Resume.pdf" 
            download="Mayur_Patil_Resume.pdf"
            className="btn btn-secondary nav-resume-btn"
          >
            <Download size={15} />
            <span>Resume</span>
          </a>

          <a 
            href="#contact" 
            className="btn btn-primary nav-contact-btn"
          >
            Hire Me
          </a>

          {/* Mobile Menu Toggle */}
          <button 
            className="icon-button mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu-drawer">
          <div className="mobile-menu-links">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="mobile-actions">
              <a 
                href="/Mayur_Patil_Resume.pdf" 
                download="Mayur_Patil_Resume.pdf"
                className="btn btn-secondary w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Download size={16} /> Download Resume (PDF)
              </a>
              <a 
                href="#contact" 
                className="btn btn-primary w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
