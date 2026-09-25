import React, { useState } from 'react';
import { 
  Mail, MessageSquare, Send, CheckCircle2, 
  Copy, Calendar, Clock, MapPin, Sparkles, Check, Phone 
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../portfolioData';
import confetti from 'canvas-confetti';

export default function Contact() {
  const { personal } = PORTFOLIO_DATA;
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    company: '',
    workLocation: '', // e.g. Pune, Bangalore, Hybrid, Remote
    subject: 'Java Developer – Fresher',
    ctcRange: '', // Expected CTC / Budget
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const [sendingState, setSendingState] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.company) return;

    setSendingState('sending');
    setErrorMessage('');

    const emailSubject = `[Job Opportunity] ${formData.subject} @ ${formData.company} (Contact: ${formData.name})`;

    try {
      // Direct cloud email dispatch to patilmayur01012004@gmail.com
      const response = await fetch('https://formsubmit.co/ajax/patilmayur01012004@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: emailSubject,
          _template: 'table',
          _captcha: 'false',
          'Company Name': formData.company,
          'Contact Person / Recruiter Name': formData.name,
          'Contact Phone / WhatsApp': formData.phone || 'Not Provided',
          'Hiring For Position': formData.subject,
          'Job Work Location': formData.workLocation || 'Pune / Remote',
          'Salary / CTC Budget': formData.ctcRange || 'As per company standard',
          'Job Description / Query Message': formData.message,
          'Submission Timestamp': new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
        })
      });

      const result = await response.json();

      if (response.ok && (result.success === 'true' || result.success === true || result.message)) {
        setSubmitted(true);
        setSendingState('success');
        confetti({
          particleCount: 90,
          spread: 85,
          origin: { y: 0.6 }
        });
      } else {
        throw new Error(result.message || 'Transmission failed');
      }
    } catch (err) {
      console.warn('Form API fallback:', err);
      // Fallback: Opens pre-filled email draft
      const fullBody = encodeURIComponent(
        `Hello Mayur,\n\n` +
        `Here are the company hiring details:\n` +
        `----------------------------------------\n` +
        `🏢 Company Name: ${formData.company}\n` +
        `👤 Contact Person Name: ${formData.name}\n` +
        `📞 Phone / Mobile / WhatsApp: ${formData.phone || 'N/A'}\n` +
        `📍 Job Location: ${formData.workLocation || 'Pune / Remote'}\n` +
        `🎯 Hiring Position: ${formData.subject}\n` +
        `💰 Offered / Budget CTC: ${formData.ctcRange || 'Competitive'}\n` +
        `----------------------------------------\n\n` +
        `📝 Job Description / Query Message:\n${formData.message}\n\n` +
        `-- Sent via Mayur Patil Portfolio`
      );
      window.location.href = `mailto:patilmayur01012004@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${fullBody}`;
      setSubmitted(true);
      setSendingState('success');
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personal.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        
        {/* Section Heading */}
        <div className="section-header">
          <div className="section-tag">
            <Mail size={14} />
            <span>Connect & Hire</span>
          </div>
          <h2 className="section-title">
            Let's Build Something <span className="gradient-text">Exceptional</span>
          </h2>
          <p className="section-description">
            Actively seeking entry-level & associate engineering opportunities for the <strong>2026 Batch</strong>. Open for immediate hiring and technical interviews.
          </p>
        </div>

        {/* 2-Column Contact & Scheduling Box */}
        <div className="contact-grid">
          
          {/* Left Column: Direct Recruiter Details */}
          <div className="glass-card contact-info-panel">
            <h3 className="contact-panel-title">Direct Recruitment Channel</h3>
            <p className="contact-panel-desc">
              Looking for a dedicated Java developer with hands-on Spring Boot, Hibernate, and React experience? Reach out via phone or email:
            </p>

            <div className="contact-details-list">
              
              <div className="contact-item">
                <div className="contact-item-icon">
                  <Mail size={18} className="text-cyan" />
                </div>
                <div className="contact-item-content">
                  <span className="contact-label">Email Address</span>
                  <a href={`mailto:${personal.email}`} className="contact-value">
                    {personal.email}
                  </a>
                </div>
                <button 
                  onClick={handleCopyEmail} 
                  className="copy-mini-btn"
                  title="Copy email"
                >
                  {copiedEmail ? <Check size={14} className="text-emerald" /> : <Copy size={14} />}
                </button>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon">
                  <Phone size={18} className="text-emerald" />
                </div>
                <div className="contact-item-content">
                  <span className="contact-label">Mobile Phone</span>
                  <a href={`tel:${personal.phone}`} className="contact-value">
                    {personal.phone}
                  </a>
                </div>
                <button 
                  onClick={handleCopyPhone} 
                  className="copy-mini-btn"
                  title="Copy phone number"
                >
                  {copiedPhone ? <Check size={14} className="text-emerald" /> : <Copy size={14} />}
                </button>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon">
                  <MapPin size={18} className="text-amber" />
                </div>
                <div className="contact-item-content">
                  <span className="contact-label">Current Location</span>
                  <span className="contact-value">{personal.location} (Open to Relocation)</span>
                </div>
              </div>

            </div>

            {/* Recruiter Target Roles Badge Grid */}
            <div className="target-roles-card">
              <span className="target-roles-title">🎯 Open to Opportunities in:</span>
              <div className="target-roles-tags">
                <span className="target-role-badge">Java Developer – Fresher</span>
                <span className="target-role-badge">Junior Java Developer</span>
                <span className="target-role-badge">Associate Software Engineer – Java</span>
                <span className="target-role-badge">Trainee Software Engineer – Java</span>
                <span className="target-role-badge">Software Engineer – Fresher (Java)</span>
              </div>
            </div>

            {/* Recruiter Quick Schedule Notice */}
            <div className="calendar-box">
              <div className="calendar-header">
                <Calendar size={18} className="text-cyan" />
                <span>Ready for Interviews</span>
              </div>
              <p className="calendar-text">
                Promptly available for technical assessments, virtual coding rounds, and on-site discussions in Pune and across India.
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="glass-card contact-form-panel">
            {submitted ? (
              <div className="form-success-state">
                <div className="success-icon-wrap">
                  <CheckCircle2 size={50} className="text-emerald" />
                </div>
                <h3 className="success-title">Message Received!</h3>
                <p className="success-text">
                  Thank you for reaching out from <strong>{formData.company}</strong>, <strong>{formData.name}</strong>. Your inquiry regarding the <strong>{formData.subject}</strong> role has been transmitted to Mayur's inbox at <strong>patilmayur01012004@gmail.com</strong>.
                </p>
                <button 
                  onClick={() => setSubmitted(false)} 
                  className="btn btn-secondary mt-4"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group-row">
                  <div className="form-group">
                    <label htmlFor="company" className="form-label">Company Name *</label>
                    <input 
                      id="company"
                      type="text" 
                      required
                      placeholder="e.g. Infosys, TCS, Cognizant, Wipro, Capgemini"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Contact Person / Recruiter Name *</label>
                    <input 
                      id="name"
                      type="text" 
                      required
                      placeholder="e.g. Priya Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group-row">
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">Contact Phone / WhatsApp *</label>
                    <input 
                      id="phone"
                      type="tel" 
                      required
                      placeholder="e.g. +91 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="workLocation" className="form-label">Job Work Location</label>
                    <input 
                      id="workLocation"
                      type="text" 
                      placeholder="e.g. Pune / Mumbai / Bangalore / Hybrid / Remote"
                      value={formData.workLocation}
                      onChange={(e) => setFormData({...formData, workLocation: e.target.value})}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group-row">
                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">Hiring For Role *</label>
                    <select
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className="form-input form-select"
                    >
                      <option value="Java Developer – Fresher">Java Developer – Fresher</option>
                      <option value="Junior Java Developer">Junior Java Developer</option>
                      <option value="Associate Software Engineer – Java">Associate Software Engineer – Java</option>
                      <option value="Trainee Software Engineer – Java">Trainee Software Engineer – Java</option>
                      <option value="Software Engineer – Fresher (Java)">Software Engineer – Fresher (Java)</option>
                      <option value="Full-Stack Java Developer">Full-Stack Java Developer</option>
                      <option value="Other Technical Role / Interview">Other Technical Role / Interview</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="ctcRange" className="form-label">Offered CTC / Salary Range</label>
                    <input 
                      id="ctcRange"
                      type="text" 
                      placeholder="e.g. 4 - 7 LPA / Standard"
                      value={formData.ctcRange}
                      onChange={(e) => setFormData({...formData, ctcRange: e.target.value})}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Job Description / Inquiry Details *</label>
                  <textarea 
                    id="message"
                    rows={4}
                    required
                    placeholder="Describe the opportunity, key requirements, bond/shift terms (if any), or interview schedule..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="form-input form-textarea"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={sendingState === 'sending'} 
                  className="btn btn-accent w-full submit-btn"
                >
                  <Send size={16} />
                  <span>
                    {sendingState === 'sending' 
                      ? 'Delivering to patilmayur01012004@gmail.com...' 
                      : 'Transmit Directly to Mayur\'s Inbox'}
                  </span>
                </button>

                <div className="contact-alternative-row">
                  <span className="alt-text">Destination: <strong>patilmayur01012004@gmail.com</strong></span>
                  <a 
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personal.email}&su=Inquiry for ${formData.subject}`} 
                    target="_blank" 
                    rel="noreferrer"
                    className="direct-gmail-btn"
                  >
                    <Mail size={14} /> Open Gmail Draft
                  </a>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
