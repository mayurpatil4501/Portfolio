import React, { useState } from 'react';
import { 
  FileText, Download, Eye, EyeOff, 
  ExternalLink, CheckCircle2, Sparkles, Maximize2 
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ResumeSection() {
  const resumePdfPath = "/Mayur_Patil_Resume.pdf";
  const [showViewer, setShowViewer] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.6 }
    });
    setTimeout(() => setDownloading(false), 2000);
  };

  const toggleView = () => {
    setShowViewer(!showViewer);
    if (!showViewer) {
      setTimeout(() => {
        const viewerEl = document.getElementById('resume-pdf-container');
        if (viewerEl) {
          viewerEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    }
  };

  return (
    <section id="resume-section" className="section resume-section">
      <div className="container">
        
        {/* Section Heading */}
        <div className="section-header">
          <div className="section-tag">
            <FileText size={14} />
            <span>Candidate Resume</span>
          </div>
          <h2 className="section-title">
            Curriculum <span className="gradient-text">Vitae / Resume</span>
          </h2>
          <p className="section-description">
            Access Mayur's verified credentials, project history, and academic transcripts in PDF format.
          </p>

          {/* Action Buttons: Only Download and View */}
          <div className="resume-controls">
            <a 
              href={resumePdfPath} 
              download="Mayur_Patil_Resume.pdf"
              onClick={handleDownload}
              className="btn btn-primary resume-action-btn"
            >
              <Download size={18} />
              <span>{downloading ? 'Downloading...' : 'Download Resume'}</span>
            </a>

            <button 
              onClick={toggleView}
              className={`btn ${showViewer ? 'btn-accent' : 'btn-secondary'} resume-action-btn`}
            >
              {showViewer ? <EyeOff size={18} /> : <Eye size={18} />}
              <span>{showViewer ? 'Hide Resume' : 'View Resume'}</span>
            </button>
          </div>
        </div>

        {/* Conditional PDF Viewer: Only renders when user clicks "View Resume" */}
        {showViewer && (
          <div id="resume-pdf-container" className="resume-viewer-container glass-card animate-fade-in">
            <div className="resume-viewer-header">
              <div className="viewer-title">
                <Eye size={17} className="text-cyan" />
                <span>Mayur_Patil_Resume.pdf (Live Preview)</span>
              </div>
              
              <div className="viewer-actions">
                <a 
                  href={resumePdfPath} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="viewer-action-btn"
                  title="Open in fullscreen new tab"
                >
                  <Maximize2 size={15} />
                </a>
                <a 
                  href={resumePdfPath} 
                  download="Mayur_Patil_Resume.pdf"
                  className="viewer-action-btn"
                  title="Download PDF"
                >
                  <Download size={15} />
                </a>
              </div>
            </div>

            <div className="resume-iframe-wrapper">
              <iframe 
                src={`${resumePdfPath}#toolbar=1&navpanes=0&scrollbar=1`}
                title="Mayur Patil Resume Preview"
                className="resume-pdf-iframe"
              />
            </div>

            <div className="resume-viewer-footer">
              <span className="footer-status-pill">
                <CheckCircle2 size={14} className="text-emerald" />
                <span>Verified ATS & Recruiter Ready Format (2026 Batch)</span>
              </span>
              <button 
                onClick={() => setShowViewer(false)}
                className="btn btn-secondary close-viewer-btn"
              >
                <EyeOff size={14} /> Close Preview
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
