import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Credentials from './components/Credentials';
import ResumeSection from './components/ResumeSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState('about');

  // Sync theme attribute to HTML
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  // Scroll spy for active navbar highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects', 'skills', 'credentials', 'resume-section', 'contact'];
      const scrollPosition = window.scrollY + 250;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="portfolio-app">
      {/* Ambient background decoration */}
      <div className="ambient-background">
        <div className="ambient-blob-1"></div>
        <div className="ambient-blob-2"></div>
        <div className="ambient-grid"></div>
      </div>

      {/* Main Navigation Bar */}
      <Navbar 
        activeSection={activeSection} 
        onToggleTheme={toggleTheme} 
        isDark={isDark} 
      />

      <main>
        <div id="about">
          <Hero />
        </div>

        <Experience />

        <Projects />

        <Skills />

        <Credentials />

        <ResumeSection />

        <Contact />
      </main>

      <Footer />
    </div>
  );
}
