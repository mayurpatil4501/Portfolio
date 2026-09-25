import React from 'react';
import { Terminal, Heart, ArrowUp, ShieldCheck, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { PORTFOLIO_DATA } from '../portfolioData';

export default function Footer() {
  const { personal } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="container">
        
        <div className="footer-top-row">
          
          {/* Brand & Mission */}
          <div className="footer-brand-col">
            <div className="footer-brand">
              <Terminal size={20} className="text-cyan" />
              <span>{personal.name}</span>
            </div>
            <p className="footer-tagline">
              Crafting resilient distributed backends and human-centered web platforms with uncompromising engineering discipline.
            </p>
          </div>

          {/* Quick Jump Links */}
          <div className="footer-links-col">
            <div className="footer-col-title">Portfolio Navigation</div>
            <ul className="footer-nav-list">
              <li><a href="#about">About Overview</a></li>
              <li><a href="#experience">Work Experience</a></li>
              <li><a href="#projects">Engineered Projects</a></li>
              <li><a href="#skills">Competency Matrix</a></li>
              <li><a href="/Mayur_Patil_Resume.pdf" download="Mayur_Patil_Resume.pdf">Download Resume (PDF)</a></li>
              <li><a href="#contact">Hire & Schedule</a></li>
            </ul>
          </div>

          {/* Recruiter Cheat Sheet */}
          <div className="footer-links-col">
            <div className="footer-col-title">Recruiter Fast Facts</div>
            <ul className="footer-facts-list">
              <li><span className="dot-bullet"></span> Work Auth: US Citizen / Authorized</li>
              <li><span className="dot-bullet"></span> Target: Senior / Staff / Lead</li>
              <li><span className="dot-bullet"></span> Notice Period: 2 Weeks</li>
              <li><span className="dot-bullet"></span> Preference: Remote / Hybrid SF</li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom-row">
          <div className="footer-copy">
            © {new Date().getFullYear()} {personal.name}. Designed with modern dark theme glassmorphism.
          </div>

          <div className="footer-social-row">
            <a href={personal.github} target="_blank" rel="noreferrer" className="footer-social-icon" title="GitHub">
              <GithubIcon size={18} />
            </a>
            <a href={personal.linkedin} target="_blank" rel="noreferrer" className="footer-social-icon" title="LinkedIn">
              <LinkedinIcon size={18} />
            </a>
            <a href={`mailto:${personal.email}`} className="footer-social-icon" title="Email">
              <Mail size={18} />
            </a>

            <button onClick={scrollToTop} className="scroll-top-btn" title="Back to top">
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
