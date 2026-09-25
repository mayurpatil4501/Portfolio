import React from 'react';
import { 
  Code2, Layout, Server, Database, Cloud, ShieldCheck, 
  Terminal, CheckCircle2 
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../portfolioData';

export default function Skills() {
  const { skills } = PORTFOLIO_DATA;

  // Icon mapping
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Layout': return <Layout size={20} className="text-cyan" />;
      case 'Server': return <Server size={20} className="text-blue" />;
      case 'Database': return <Database size={20} className="text-purple" />;
      case 'Cloud': return <Cloud size={20} className="text-amber" />;
      case 'ShieldCheck': return <ShieldCheck size={20} className="text-emerald" />;
      default: return <Code2 size={20} className="text-cyan" />;
    }
  };

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        
        {/* Section Heading */}
        <div className="section-header">
          <div className="section-tag">
            <Code2 size={14} />
            <span>Technical Competency Matrix</span>
          </div>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Core Technologies</span>
          </h2>
          <p className="section-description">
            A comprehensive matrix of languages, backend patterns, cloud ecosystems, and frontend technologies battle-tested in production.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-grid">
          {skills.map((categoryGroup, index) => (
            <div key={index} className="glass-card skill-group-card">
              <div className="skill-group-header">
                <div className="skill-group-icon">
                  {getIcon(categoryGroup.icon)}
                </div>
                <h3 className="skill-group-title">{categoryGroup.category}</h3>
              </div>

              <div className="skill-badges-wrapper">
                {categoryGroup.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-badge-pill">
                    <CheckCircle2 size={13} className="skill-check-icon" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Architecture & Engineering Standards Banner */}
        <div className="standards-banner glass-card">
          <div className="standards-content">
            <h4 className="standards-title">Architectural Principles & Engineering Mindset</h4>
            <p className="standards-desc">
              Strong believer in clean domain boundaries, automated testing (unit + e2e), zero-downtime database schema migrations, comprehensive APM observability, and high team documentation velocity.
            </p>
          </div>
          <div className="standards-badges">
            <span className="badge-tag">99.9% Uptime Mindset</span>
            <span className="badge-tag">Strict Type Safety</span>
            <span className="badge-tag">OWASP Security Standard</span>
            <span className="badge-tag">CI/CD Automation</span>
          </div>
        </div>

      </div>
    </section>
  );
}
