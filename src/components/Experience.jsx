import React, { useState } from 'react';
import { 
  Briefcase, Calendar, MapPin, ChevronRight, 
  ExternalLink, Building2, CheckCircle 
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../portfolioData';

export default function Experience() {
  const { experiences } = PORTFOLIO_DATA;
  const [activeExpId, setActiveExpId] = useState(experiences[0].id);

  const activeExp = experiences.find(e => e.id === activeExpId) || experiences[0];

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        
        {/* Section Heading */}
        <div className="section-header">
          <div className="section-tag">
            <Briefcase size={14} />
            <span>Proven Track Record</span>
          </div>
          <h2 className="section-title">
            Work Experience & <span className="gradient-text">Leadership</span>
          </h2>
          <p className="section-description">
            Quantifiable engineering outcomes, architectural stewardship, and cross-functional execution across high-velocity teams.
          </p>
        </div>

        {/* Tabbed Interactive Timeline & Detail View */}
        <div className="experience-container glass-card">
          
          {/* Company / Role Sidebar Selector */}
          <div className="experience-tabs">
            {experiences.map((exp) => (
              <button
                key={exp.id}
                onClick={() => setActiveExpId(exp.id)}
                className={`exp-tab-button ${activeExpId === exp.id ? 'active' : ''}`}
              >
                <div className="tab-left-accent"></div>
                <div className="tab-content">
                  <div className="tab-company">{exp.company}</div>
                  <div className="tab-role">{exp.role}</div>
                  <div className="tab-period">{exp.period}</div>
                </div>
                <ChevronRight size={16} className="tab-chevron" />
              </button>
            ))}
          </div>

          {/* Active Job Experience Details */}
          <div className="experience-detail">
            
            <div className="exp-detail-header">
              <div>
                <h3 className="exp-detail-title">
                  {activeExp.role} <span className="text-cyan">@ {activeExp.company}</span>
                </h3>
                <div className="exp-meta-row">
                  <span className="exp-meta-item">
                    <Calendar size={14} />
                    <span>{activeExp.period}</span>
                  </span>
                  <span className="exp-meta-item">
                    <MapPin size={14} />
                    <span>{activeExp.location}</span>
                  </span>
                  <span className="badge-tag">{activeExp.type}</span>
                </div>
              </div>
            </div>

            <p className="exp-description">
              {activeExp.description}
            </p>

            {/* Recruiter-friendly bullet points */}
            <div className="exp-highlights-list">
              <h4 className="highlights-title">Key Accomplishments & Impact:</h4>
              {activeExp.highlights.map((item, idx) => (
                <div key={idx} className="highlight-item">
                  <CheckCircle size={17} className="highlight-icon text-cyan" />
                  <p className="highlight-text">{item}</p>
                </div>
              ))}
            </div>

            {/* Technologies Used */}
            <div className="exp-tech-stack">
              <span className="tech-stack-label">Technologies Applied:</span>
              <div className="tech-tag-group">
                {activeExp.stack.map((tech, idx) => (
                  <span key={idx} className="badge-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
