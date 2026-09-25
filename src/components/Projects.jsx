import React, { useState } from 'react';
import { 
  FolderGit2, ExternalLink, Layers, 
  Cpu, ArrowUpRight, Filter, Sparkles, Activity 
} from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { PORTFOLIO_DATA } from '../portfolioData';

export default function Projects() {
  const { projects } = PORTFOLIO_DATA;
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Full Stack', 'Backend & Systems', 'AI & Full Stack', 'Security & Cloud'];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        
        {/* Section Heading */}
        <div className="section-header">
          <div className="section-tag">
            <FolderGit2 size={14} />
            <span>Featured Engineering</span>
          </div>
          <h2 className="section-title">
            Production-Grade <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-description">
            Architected for reliability, high throughput, and seamless end-user ergonomics. Includes system breakdowns and production metrics.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="project-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="glass-card project-card">
              
              {/* Project Card Header */}
              <div className="project-card-top">
                <div className="project-meta-badges">
                  <span className="project-category-tag">{project.category}</span>
                  {project.featured && (
                    <span className="project-featured-badge">
                      <Sparkles size={12} /> Featured
                    </span>
                  )}
                </div>

                <div className="project-action-links">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="icon-link"
                    title="View Source Code"
                  >
                    <GithubIcon size={17} />
                  </a>
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="icon-link"
                    title="Live Demonstration"
                  >
                    <ExternalLink size={17} />
                  </a>
                </div>
              </div>

              {/* Title & Subtitle */}
              <h3 className="project-title">{project.title}</h3>
              <p className="project-subtitle">{project.subtitle}</p>

              {/* Recruiter Metric Highlight */}
              <div className="project-metrics-callout">
                <Activity size={14} className="text-cyan" />
                <span>{project.metrics}</span>
              </div>

              {/* Description */}
              <p className="project-body">{project.description}</p>

              {/* Architectural Breakdown */}
              <div className="project-arch-box">
                <div className="arch-label">
                  <Cpu size={13} /> Architecture Flow
                </div>
                <div className="arch-flow">{project.architecture}</div>
              </div>

              {/* Core Features */}
              <ul className="project-feature-list">
                {project.highlights.map((item, idx) => (
                  <li key={idx} className="feature-item">
                    <span className="feature-bullet">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack Chips */}
              <div className="project-tech-tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="badge-tag">
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
