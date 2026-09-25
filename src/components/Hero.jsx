import React, { useState } from 'react';
import { 
  ArrowRight, Download, Mail, Phone,
  MapPin, CheckCircle2, Copy, Check, Terminal, ExternalLink, Sparkles 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { PORTFOLIO_DATA } from '../portfolioData';
import confetti from 'canvas-confetti';

export default function Hero() {
  const { personal, stats } = PORTFOLIO_DATA;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.7 }
    });
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-wrapper">
          
          {/* Main Hero Content */}
          <div className="hero-content">
            
            {/* Target Hiring Roles Pill Above Name */}
            <div className="hero-target-roles-wrapper">
              <span className="pulsing-radar"></span>
              <span className="role-pill-prefix">Seeking Roles:</span>
              <div className="hero-role-badges">
                {personal.targetRoles ? (
                  personal.targetRoles.map((role, idx) => (
                    <span key={idx} className="hero-role-tag">
                      {role}
                    </span>
                  ))
                ) : (
                  <>
                    <span className="hero-role-tag">Java Developer</span>
                    <span className="hero-role-tag">Java Full Stack Developer</span>
                    <span className="hero-role-tag">Software Engineer</span>
                  </>
                )}
              </div>
            </div>

            {/* Headline */}
            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">{personal.name}</span>.
              <br />
              <span className="hero-subtitle-role">{personal.role}</span>
            </h1>

            {/* Tagline / Subtitle */}
            <p className="hero-description">
              {personal.tagline}
            </p>

            <p className="hero-location">
              <MapPin size={16} className="text-cyan" />
              <span>Based in <strong>{personal.location}</strong></span>
              <span className="hero-divider">•</span>
              <span className="text-secondary">Open to On-site, Hybrid & Remote Roles</span>
            </p>

            {/* Recruiter Quick Action Call-To-Actions */}
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                <span>View Engineered Projects</span>
                <ArrowRight size={18} />
              </a>

              <a 
                href="/Mayur_Patil_Resume.pdf" 
                download="Mayur_Patil_Resume.pdf" 
                className="btn btn-secondary"
              >
                <Download size={18} />
                <span>Download Resume</span>
              </a>

              <button 
                onClick={handleCopyEmail} 
                className="btn btn-secondary email-copy-btn"
                title="Click to copy email address"
              >
                {copied ? <Check size={18} className="text-emerald" /> : <Copy size={18} />}
                <span>{copied ? 'Email Copied!' : 'Copy Email'}</span>
              </button>
            </div>

            {/* Social Links & Phone */}
            <div className="hero-socials">
              <span className="social-label">Connect:</span>
              <div className="social-icons">
                <a href={personal.github} target="_blank" rel="noreferrer" className="social-link" title="GitHub: mayurpatil4501">
                  <GithubIcon size={19} />
                </a>
                <a href={personal.linkedin} target="_blank" rel="noreferrer" className="social-link" title="LinkedIn: Mayur Patil">
                  <LinkedinIcon size={19} />
                </a>
                <a href={`mailto:${personal.email}`} className="social-link" title={`Email: ${personal.email}`}>
                  <Mail size={19} />
                </a>
                <a href={`tel:${personal.phone}`} className="social-link" title={`Call: ${personal.phone}`}>
                  <Phone size={17} />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Profile Card with Your Photo & Code Overlay */}
          <div className="hero-profile-container">
            <div className="profile-photo-card glass-card">
              <div className="profile-image-wrap">
                <div className="profile-glow-ring"></div>
                <div className="profile-inner-circle">
                  <img 
                    src={personal.avatar} 
                    alt={personal.name} 
                    className="profile-real-img"
                  />
                </div>
                <div className="profile-floating-badge">
                  <Sparkles size={14} className="text-cyan" />
                  <span>Java Full-Stack Developer</span>
                </div>
              </div>

              {/* Mini Tech Strip Under Photo */}
              <div className="profile-mini-tags">
                <span className="mini-tag">Java 8</span>
                <span className="mini-tag">Spring Boot</span>
                <span className="mini-tag">Hibernate</span>
                <span className="mini-tag">React.js</span>
                <span className="mini-tag">MySQL</span>
              </div>
            </div>

            {/* Sleek Java Code Card positioned neatly below the portrait */}
            <div className="hero-code-card hero-code-card-compact">
              <div className="code-header">
                <div className="code-dots">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                </div>
                <span className="code-filename">
                  <Terminal size={13} className="code-term-icon" /> MayurPatil.java
                </span>
                <span className="code-status">READY TO HIRE</span>
              </div>
              
              <div className="code-body">
                <pre>
                  <code>
{`// B.Tech CSE (2026 Batch)
public class MayurPatil implements FullStackEngineer {
  String[] backend = {"Java", "Spring Boot", "REST APIs", "Hibernate"};
  String[] frontend = {"React.js", "JavaScript", "HTML5", "CSS3"};
  String[] database = {"MySQL", "Oracle SQL", "JDBC"};
}`}
                  </code>
                </pre>
              </div>
            </div>
          </div>

        </div>

        {/* Recruiter Impact Metrics Bar */}
        <div className="stats-grid">
          {stats.map((item, index) => (
            <div key={index} className="glass-card stat-card">
              <div className="stat-value gradient-text">{item.value}</div>
              <div className="stat-label">{item.label}</div>
              <div className="stat-sub">{item.sub}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
