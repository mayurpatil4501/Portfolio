import React from 'react';
import { 
  GraduationCap, Award, CheckCircle, 
  Quote, ExternalLink, ShieldCheck, Sparkles 
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../portfolioData';

export default function Credentials() {
  const { education, certifications, recommendations } = PORTFOLIO_DATA;

  return (
    <section id="credentials" className="section credentials-section">
      <div className="container">
        
        {/* Section Heading */}
        <div className="section-header">
          <div className="section-tag">
            <Award size={14} />
            <span>Verified Pedigree</span>
          </div>
          <h2 className="section-title">
            Certifications, <span className="gradient-text">Education & Social Proof</span>
          </h2>
          <p className="section-description">
            Industry cloud credentials, academic foundation in computer systems, and endorsements from engineering leaders.
          </p>
        </div>

        {/* 2-Column Layout: Certifications & Education */}
        <div className="credentials-grid">
          
          {/* Cloud & Engineering Certifications */}
          <div className="glass-card cred-column">
            <div className="cred-col-header">
              <ShieldCheck className="text-cyan" size={22} />
              <h3 className="cred-col-title">Industry Certifications</h3>
            </div>

            <div className="cert-list">
              {certifications.map((cert, idx) => (
                <div key={idx} className="cert-card-item">
                  <div className="cert-badge-icon">
                    <Award size={18} className="text-blue" />
                  </div>
                  <div className="cert-info">
                    <h4 className="cert-name">{cert.name}</h4>
                    <div className="cert-issuer">{cert.issuer}</div>
                    <div className="cert-meta">
                      <span className="badge-tag">{cert.date}</span>
                      <span className="cert-id font-mono">ID: {cert.credentialId}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="glass-card cred-column">
            <div className="cred-col-header">
              <GraduationCap className="text-purple" size={22} />
              <h3 className="cred-col-title">Academic Background</h3>
            </div>

            <div className="edu-list">
              {education.map((edu, idx) => (
                <div key={idx} className="edu-card-item">
                  <div className="edu-degree">{edu.degree}</div>
                  <div className="edu-institution text-cyan">{edu.institution}</div>
                  <div className="edu-meta-row">
                    <span className="badge-tag">{edu.period}</span>
                    <span className="badge-tag">GPA: {edu.gpa}</span>
                  </div>
                  <p className="edu-notes">{edu.notes}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Testimonials / Peer Endorsements */}
        <div className="recommendations-container">
          <h3 className="sub-section-title">
            <Quote size={20} className="text-cyan" />
            <span>Engineering Leadership Endorsements</span>
          </h3>

          <div className="recommendations-grid">
            {recommendations.map((rec, idx) => (
              <div key={idx} className="glass-card rec-card">
                <Quote size={26} className="rec-quote-watermark" />
                <p className="rec-text">"{rec.text}"</p>
                <div className="rec-author-row">
                  <div className="rec-avatar">{rec.avatar}</div>
                  <div>
                    <div className="rec-name">{rec.author}</div>
                    <div className="rec-role">{rec.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
